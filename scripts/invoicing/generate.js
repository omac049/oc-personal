#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const CONFIG_PATH = path.join(__dirname, 'clients.json');
const TEMPLATE_PATH = path.join(__dirname, 'template.html');
const ENV_PATH = path.join(ROOT, '.env.invoicing');

if (fs.existsSync(ENV_PATH)) {
  for (const line of fs.readFileSync(ENV_PATH, 'utf-8').split('\n')) {
    const match = line.match(/^([A-Z_]+)=(.+)$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2];
    }
  }
}

const ORDINALS = [
  '', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth',
  'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth',
  'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth',
  'eighteenth', 'nineteenth', 'twentieth', 'twenty-first', 'twenty-second',
  'twenty-third', 'twenty-fourth'
];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function formatDate(year, month, day) {
  return `${MONTHS[month]} ${day}, ${year}`;
}

function shortMonth(monthIndex) {
  return MONTHS[monthIndex].slice(0, 3);
}

function getMonthNumber(client) {
  const [firstYear, firstMonth] = client.firstBillingMonth.split('-').map(Number);
  const now = new Date();
  const billingYear = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
  const billingMonth = now.getMonth() === 0 ? 12 : now.getMonth();

  return (billingYear - firstYear) * 12 + (billingMonth - firstMonth) + 1;
}

function buildIncludesList(includes) {
  return includes.map(item => `              <li>${item}</li>`).join('\n');
}

function buildSiteGroupsHtml(siteGroups) {
  return siteGroups.map(group => {
    const sitesHtml = group.sites.map(s => `                <li>${s}</li>`).join('\n');
    return `            <div class="sites-group">
              <strong>${group.host}</strong>
              <ul>
${sitesHtml}
              </ul>
            </div>`;
  }).join('\n');
}

function resolvePaymentMethods(methods) {
  return methods.map(m => {
    const value = m.value || process.env[m.envKey];
    if (!value) {
      throw new Error(
        `Missing payment value for "${m.label}". ` +
        `Set the ${m.envKey} environment variable or add "value" to clients.json.`
      );
    }
    return { label: m.label, value };
  });
}

function buildPaymentMethodsHtml(methods) {
  return methods.map(m =>
    `        <dt>${m.label}</dt>\n        <dd>${m.value}</dd>`
  ).join('\n');
}

function getTotalSites(siteGroups) {
  return siteGroups.reduce((sum, g) => sum + g.sites.length, 0);
}

function generateInvoice(client, sender, payment, template) {
  const monthNumber = getMonthNumber(client);
  const ordinal = ORDINALS[monthNumber] || `month ${monthNumber}`;
  const invoiceNum = `${client.invoicePrefix}-${String(client.nextInvoiceNumber).padStart(3, '0')}`;

  const now = new Date();
  const prevMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
  const prevYear = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
  const cycleDay = client.billingCycleStartDay;

  const periodStart = formatDate(prevYear, prevMonth, cycleDay);
  const endMonth = now.getMonth();
  const endYear = now.getFullYear();
  const periodEnd = formatDate(endYear, endMonth, cycleDay);
  const servicePeriod = `${periodStart} – ${periodEnd}`;
  const servicePeriodShort = `${shortMonth(prevMonth)} ${cycleDay} – ${shortMonth(endMonth)} ${cycleDay}, ${endYear}`;

  const invoiceDate = formatDate(prevYear, prevMonth, cycleDay);
  const amountFormatted = `$${client.amount.toFixed(2)}`;
  const totalSites = getTotalSites(client.siteGroups);
  const clientFirstName = client.name.split(' ')[0];

  const replacements = {
    '{{INVOICE_NUMBER}}': invoiceNum,
    '{{INVOICE_DATE}}': invoiceDate,
    '{{SERVICE_PERIOD}}': servicePeriod,
    '{{SERVICE_PERIOD_SHORT}}': servicePeriodShort,
    '{{MONTH_ORDINAL}}': ordinal,
    '{{SERVICE_DESCRIPTION}}': client.serviceDescription,
    '{{AMOUNT_RANGE}}': client.amountRange,
    '{{AMOUNT_FORMATTED}}': amountFormatted,
    '{{TOTAL_SITES}}': String(totalSites),
    '{{CLIENT_NAME}}': client.name,
    '{{CLIENT_COMPANY}}': client.company,
    '{{CLIENT_EMAIL}}': client.email,
    '{{CLIENT_WEBSITE}}': client.website,
    '{{CLIENT_FIRST_NAME}}': clientFirstName,
    '{{SENDER_NAME}}': sender.name,
    '{{SENDER_TITLE}}': sender.title,
    '{{SENDER_EMAIL}}': sender.email,
    '{{SENDER_WEBSITE}}': sender.website,
    '{{FOOTER_LINE}}': sender.footerLine,
    '{{PAYMENT_TERMS}}': payment.terms,
    '{{INCLUDES_LIST}}': buildIncludesList(client.includes),
    '{{SITE_GROUPS_HTML}}': buildSiteGroupsHtml(client.siteGroups),
    '{{PAYMENT_METHODS_HTML}}': buildPaymentMethodsHtml(payment.methods),
  };

  let html = template;
  for (const [placeholder, value] of Object.entries(replacements)) {
    html = html.replaceAll(placeholder, value);
  }

  const fileIndex = client.nextInvoiceNumber - 2;
  const fileName = fileIndex <= 1
    ? `ppb-invoice.html`
    : `ppb-invoice-${fileIndex}.html`;

  const outputPath = path.join(ROOT, client.outputDir, fileName);
  fs.writeFileSync(outputPath, html, 'utf-8');

  console.log(`Generated: ${outputPath}`);
  console.log(`  Invoice: ${invoiceNum}`);
  console.log(`  Period:  ${servicePeriod}`);
  console.log(`  Amount:  ${amountFormatted}`);
  console.log(`  Month:   ${ordinal}`);

  return { outputPath, invoiceNum, fileName };
}

function bumpInvoiceNumber(config) {
  for (const client of config.clients) {
    client.nextInvoiceNumber += 1;
  }
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2) + '\n', 'utf-8');
  console.log('\nUpdated clients.json — nextInvoiceNumber bumped for all clients.');
}

function main() {
  const dryRun = process.argv.includes('--dry-run');

  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

  console.log(`Invoice generator — ${new Date().toISOString()}`);
  console.log(`Mode: ${dryRun ? 'DRY RUN (no files written)' : 'LIVE'}\n`);

  const payment = {
    ...config.payment,
    methods: resolvePaymentMethods(config.payment.methods),
  };

  if (dryRun) {
    for (const client of config.clients) {
      const monthNumber = getMonthNumber(client);
      const ordinal = ORDINALS[monthNumber] || `month ${monthNumber}`;
      const invoiceNum = `${client.invoicePrefix}-${String(client.nextInvoiceNumber).padStart(3, '0')}`;
      console.log(`Would generate for ${client.name}:`);
      console.log(`  Invoice: ${invoiceNum}`);
      console.log(`  Month:   ${ordinal}`);
      console.log(`  Amount:  $${client.amount.toFixed(2)}`);
    }
    return;
  }

  for (const client of config.clients) {
    generateInvoice(client, config.sender, payment, template);
  }

  bumpInvoiceNumber(config);
}

main();
