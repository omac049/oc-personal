'use client';

import { motion } from 'framer-motion';
import { aboutData } from '@/data/about';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {aboutData.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none text-gray-700">
              {aboutData.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Achievements</h3>
              <div className="space-y-6">
                {aboutData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">
                      {stat.number}
                    </div>
                    <p className="text-gray-700 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
