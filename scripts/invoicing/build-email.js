#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, 'clients.json');

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function shortMonth(idx) {
  return MONTHS[idx].slice(0, 3);
}

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
const now = new Date();
const currentMonth = now.getMonth();
const currentYear = now.getFullYear();

const results = config.clients.map(client => {
  const invoiceNumber = client.nextInvoiceNumber - 1;
  const invoiceId = `${client.invoicePrefix}-${String(invoiceNumber).padStart(3, '0')}`;
  const cycleDay = client.billingCycleStartDay;
  const nextMonthIdx = (currentMonth + 1) % 12;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  const period = `${shortMonth(currentMonth)} ${cycleDay} – ${shortMonth(nextMonthIdx)} ${cycleDay}, ${nextYear}`;

  const fileIndex = invoiceNumber - 2;
  const fileName = fileIndex <= 1 ? 'ppb-invoice.html' : `ppb-invoice-${fileIndex}.html`;
  const invoiceUrl = `https://${config.sender.website}/${client.outputDir.replace('public/', '')}/${fileName}`;

  const firstName = client.name.split(' ')[0];
  const subject = `Invoice ${invoiceId} — ${MONTHS[currentMonth]} ${currentYear} | ${config.sender.name}`;

  const body = [
    `Hi ${firstName},`,
    '',
    `Your invoice for ${MONTHS[currentMonth]} ${currentYear} is ready.`,
    '',
    `Invoice: ${invoiceId}`,
    `Period: ${period}`,
    `Amount: $${client.amount.toFixed(2)} USD`,
    '',
    `View & download: ${invoiceUrl}`,
    '',
    `Payment is due upon receipt (Net 15 if preferred). Please reference ${invoiceId} with your payment.`,
    '',
    'Thank you,',
    config.sender.name,
    config.sender.website,
  ].join('\n');

  return {
    to: client.email,
    subject,
    body,
    invoiceUrl,
  };
});

const output = JSON.stringify(results, null, 2);

const outPath = process.env.GITHUB_OUTPUT;
if (outPath) {
  fs.appendFileSync(outPath, `email_to=${results[0].to}\n`);
  fs.appendFileSync(outPath, `email_subject=${results[0].subject}\n`);
  const delimiter = `EOF_${Date.now()}`;
  fs.appendFileSync(outPath, `email_body<<${delimiter}\n${results[0].body}\n${delimiter}\n`);
}

console.log(output);
