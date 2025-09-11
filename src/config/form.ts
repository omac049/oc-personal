// Form configuration for email services
export const formConfig = {
  // Formspree configuration
  formspree: {
    endpoint: process.env.NEXT_PUBLIC_FORMSPREE_ID || 'myzdvywz',
    url: `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || 'myzdvywz'}`,
  },
  
  // Email settings
  email: {
    to: 'omar.seogears@gmail.com', // Your email address
    subject: 'New Contact Form Submission - Omar Corral Portfolio',
  },
  
  // Form validation
  validation: {
    maxMessageLength: 1000,
    allowedDomains: [], // Empty array allows all domains
  }
};

// Alternative services configuration
export const alternativeServices = {
  // Netlify Forms (if you deploy to Netlify)
  netlify: {
    action: '/contact',
    method: 'POST',
    attributes: {
      'data-netlify': 'true',
      'netlify-honeypot': 'bot-field',
    }
  },
  
  // EmailJS configuration (client-side email service)
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  }
};
