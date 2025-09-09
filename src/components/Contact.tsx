'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, faFacebook, faInstagram, faTwitter, faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { socialsData } from '@/data/socials';

const iconMap: { [key: string]: typeof faLinkedin } = {
  'linkedin': faLinkedin,
  'facebook': faFacebook,
  'instagram': faInstagram,
  'twitter': faTwitter,
  'github': faGithub
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {socialsData.cta.title}
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            {socialsData.cta.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto"></div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <a
            href={`mailto:${socialsData.email}`}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-emerald-100">{socialsData.email}</p>
          </a>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
            <FontAwesomeIcon icon={faPhone} className="text-3xl text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-emerald-100">{socialsData.phone}</p>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
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
                className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                aria-label={social.name}
              >
                <FontAwesomeIcon 
                  icon={iconMap[social.platform]} 
                  className="text-xl text-white" 
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={`mailto:${socialsData.cta.email}`}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {socialsData.cta.buttonText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
