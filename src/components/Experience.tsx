'use client';

import { motion } from 'framer-motion';
import { experienceData } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {experienceData.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {experienceData.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experienceData.timeline.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:justify-between`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12 pl-20 md:pl-0' : 'md:pl-12 pl-20 md:pr-0'
                }`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.position}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <h4 className="text-lg font-semibold text-blue-600">
                          {job.company}
                        </h4>
                        <span className="text-sm text-gray-500">
                          {job.location}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full inline-block">
                        {job.period}
                      </p>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies & Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
