'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function InteractiveContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const inputVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(13, 148, 136, 0.15)",
      borderColor: "rgba(13, 148, 136, 0.5)",
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
      borderColor: "rgba(209, 213, 219, 1)",
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Name *</label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  variants={inputVariants}
                  animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/80 backdrop-blur-sm focus:outline-none transition-all duration-300 ${
                    errors.name ? 'border-red-400' : 'border-gray-300'
                  }`}
                  placeholder="Your full name"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm flex items-center space-x-1"
                    >
                      <FontAwesomeIcon icon={faExclamationTriangle} className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email *</label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  variants={inputVariants}
                  animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/80 backdrop-blur-sm focus:outline-none transition-all duration-300 ${
                    errors.email ? 'border-red-400' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm flex items-center space-x-1"
                    >
                      <FontAwesomeIcon icon={faExclamationTriangle} className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Subject *</label>
              <motion.input
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                variants={inputVariants}
                animate={focusedField === 'subject' ? 'focused' : 'unfocused'}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white/80 backdrop-blur-sm focus:outline-none transition-all duration-300 ${
                  errors.subject ? 'border-red-400' : 'border-gray-300'
                }`}
                placeholder="What's this about?"
              />
              <AnimatePresence>
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm flex items-center space-x-1"
                  >
                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Message */}
            <motion.div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message *</label>
              <motion.textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                variants={inputVariants}
                animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white/80 backdrop-blur-sm focus:outline-none resize-none transition-all duration-300 ${
                  errors.message ? 'border-red-400' : 'border-gray-300'
                }`}
                placeholder="Tell me about your project or how I can help..."
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm flex items-center space-x-1"
                  >
                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span>Send Message</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
              className="w-20 h-20 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FontAwesomeIcon icon={faCheck} className="text-white text-2xl" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Message Sent Successfully!
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600"
            >
              Thank you for reaching out. I&apos;ll get back to you soon!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
