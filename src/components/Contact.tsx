'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, faFacebook, faInstagram, faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { socialsData } from '@/data/socials';
import InteractiveContactForm from './InteractiveContactForm';
import AlgorithmBackground from './AlgorithmBackground';

const iconMap: { [key: string]: typeof faLinkedin } = {
  'linkedin': faLinkedin,
  'facebook': faFacebook,
  'instagram': faInstagram,
  'github': faGithub
};

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Global Algorithm Background */}
      <AlgorithmBackground opacity="opacity-5" />
      
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Ready to boost your SEO performance? Let&apos;s discuss your project and create something amazing together.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-blue-700 mx-auto"></div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 lg:mb-12 px-4"
        >
          <motion.a
            href={`mailto:${socialsData.email}`}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 sm:p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group max-w-md w-full min-h-[44px] flex flex-col justify-center"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon 
              icon={faEnvelope} 
              className="text-4xl text-blue-700 mb-6 group-hover:scale-110 transition-transform duration-300 block text-center" 
            />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white text-center">Get In Touch</h3>
            <p className="text-slate-300 text-center text-base sm:text-lg break-all">{socialsData.email}</p>
            <p className="text-slate-400 text-center text-xs sm:text-sm mt-1 sm:mt-2">Click to send me an email</p>
          </motion.a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-12"
          suppressHydrationWarning
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 text-white">Connect With Me</h3>
          <div className="flex justify-center space-x-4 sm:space-x-6" suppressHydrationWarning>
            {socialsData.social.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                viewport={{ once: true }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full flex items-center justify-center hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300 min-w-[44px] min-h-[44px]"
                aria-label={social.name}
                suppressHydrationWarning
              >
                <FontAwesomeIcon 
                  icon={iconMap[social.platform]} 
                  className="text-lg sm:text-xl text-white" 
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Interactive Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <InteractiveContactForm />
        </motion.div>
      </div>
    </section>
  );
}
