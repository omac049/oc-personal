'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faRocket, faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import { formConfig } from '@/config/form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function InteractiveContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { field: 'name', label: 'What should I call you?', icon: faUser, placeholder: 'Your name' },
    { field: 'email', label: 'How can I reach you?', icon: faEnvelope, placeholder: 'your.email@example.com' },
    { field: 'message', label: 'Tell me about your project', icon: faComment, placeholder: 'Describe your SEO goals, project timeline, budget, or any questions you have...' }
  ];

  const validateStep = (step: number): boolean => {
    const field = steps[step].field as keyof FormData;
    const value = formData[field];
    
    if (!value.trim()) {
      setErrors({ [field]: 'This field is required' });
      return false;
    }
    
    if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors({ email: 'Please enter a valid email address' });
      return false;
    }
    
    setErrors({});
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Real email submission via Formspree
      const response = await fetch(formConfig.formspree.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `${formConfig.email.subject} - ${formData.name}`,
          _replyto: formData.email,
          _to: formConfig.email.to,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after success
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
          setCurrentStep(0);
        }, 4000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // You could add error state handling here
      alert('Sorry, there was an error sending your message. Please try emailing directly.');
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (steps[currentStep].field !== 'message') {
        handleNext();
      }
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
          className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
        >
          <FontAwesomeIcon icon={faRocket} className="text-white text-2xl" />
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold text-white mb-4"
        >
          Message Launched! 🚀
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-slate-300"
        >
          Thanks {formData.name}! I&apos;ll get back to you within 24 hours.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      {/* Creative Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          Let&apos;s Start Something Amazing
        </h3>
        <p className="text-slate-300">
          Just a few quick questions to get the conversation started
        </p>
        
        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index <= currentStep 
                  ? 'bg-blue-700' 
                  : 'bg-slate-600'
              }`}
              initial={{ width: 20 }}
              animate={{ 
                width: index === currentStep ? 40 : 20,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Form Container */}
      <motion.div
        className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl"
        whileHover={{ borderColor: 'rgba(59, 130, 246, 0.3)' }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Step Header */}
            <div className="flex items-center space-x-3 sm:space-x-4">
                             <motion.div
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.1 }}
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0"
               >
                <FontAwesomeIcon 
                  icon={steps[currentStep].icon} 
                  className="text-white text-base sm:text-lg" 
                />
              </motion.div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                  {steps[currentStep].label}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Step {currentStep + 1} of {steps.length}
                </p>
              </div>
            </div>

            {/* Input Field */}
            <div className="space-y-3">
              {steps[currentStep].field === 'message' ? (
                <motion.textarea
                  value={formData[steps[currentStep].field as keyof FormData]}
                  onChange={(e) => handleInputChange(steps[currentStep].field as keyof FormData, e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={steps[currentStep].placeholder}
                  rows={4}
                  className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  autoFocus
                />
              ) : (
                <motion.input
                  type={steps[currentStep].field === 'email' ? 'email' : 'text'}
                  value={formData[steps[currentStep].field as keyof FormData]}
                  onChange={(e) => handleInputChange(steps[currentStep].field as keyof FormData, e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={steps[currentStep].placeholder}
                  className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-lg"
                  autoFocus
                />
              )}
              
              {/* Error Message */}
              <AnimatePresence>
                {errors[steps[currentStep].field as keyof FormData] && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-sm flex items-center space-x-2"
                  >
                    <span>⚠️</span>
                    <span>{errors[steps[currentStep].field as keyof FormData]}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-3 sm:pt-4 gap-2">
              <motion.button
                type="button"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-4 sm:px-6 py-2 sm:py-3 text-slate-400 hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:hover:text-slate-400 min-h-[44px] text-sm sm:text-base rounded-lg"
                whileHover={{ x: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Back
              </motion.button>

                             <motion.button
                 type="button"
                 onClick={handleNext}
                 disabled={isSubmitting}
                 className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 flex items-center space-x-2 min-h-[48px] text-sm sm:text-base"
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
               >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : currentStep === steps.length - 1 ? (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span>Launch Message</span>
                  </>
                ) : (
                  <>
                    <span>Continue</span>
                    <span>→</span>
                  </>
                )}
              </motion.button>
            </div>

          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
