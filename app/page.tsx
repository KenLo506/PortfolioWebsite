'use client'

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import { fadeInUp, staggerContainer, cardHover } from './components/animations'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 mb-8 text-text-dark">About Me</h2>
            <motion.div 
              className="prose max-w-none bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={cardHover}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-text-light">
                Software Engineer with nearly 2 years of experience in full-stack development and open-source contributions. 
                Proficient in Java, Python, JavaScript, and C++ with hands-on experience in Spring Boot, React, Node.js, and MySQL. 
                Demonstrated success in freelance website development and feature creations/project collaboration for Krita (KDE Framework) 
                under Google Summer of Code.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 mb-8 text-text-dark">Skills</h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={fadeInUp} 
                className="bg-background-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20"
                whileHover={cardHover}
              >
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Languages</h3>
                <p className="text-text-light">Java, JavaScript, HTML/CSS, Python, C/C++/C#</p>
              </motion.div>
              <motion.div 
                variants={fadeInUp} 
                className="bg-background-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20"
                whileHover={cardHover}
              >
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Frameworks</h3>
                <p className="text-text-light">Node.js, React, Spring Boot, .NET, Angular, Qt</p>
              </motion.div>
              <motion.div 
                variants={fadeInUp} 
                className="bg-background-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20"
                whileHover={cardHover}
              >
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Development Practices</h3>
                <p className="text-text-light">Gen AI, Azure, CI/CD, MySQL, Git, Linux, Agile</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 mb-8 text-text-dark">Experience</h2>
            <motion.div 
              className="space-y-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={fadeInUp} 
                className="bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20"
                whileHover={cardHover}
              >
                <h3 className="text-2xl font-semibold text-text-dark">Web Surfing Studios (WSS)</h3>
                <p className="text-text-light mb-4">Software Development Intern • 4/2025 – Present</p>
                <ul className="list-disc list-inside text-text-light space-y-2">
                  <li>Developed and deployed full-stack web applications using Node.js, React, Spring Boot, and AWS</li>
                  <li>Implemented CI/CD pipelines and cloud infrastructure to optimize performance and reliability</li>
                  <li>Collaborated with agile teams to build real-world projects</li>
                  <li>Hands-on experience with DevOps, site reliability engineering, and scalable system architectures</li>
                  <li>Contributed to WSS's learning platform along with many of their ongoing apps, showing 10% decrease in overall bugs</li>
                </ul>
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20"
                whileHover={cardHover}
              >
                <h3 className="text-2xl font-semibold text-text-dark">Google Summer of Code 2024 with KDE</h3>
                <p className="text-text-light mb-4">Open Source Developer • 10/2023 – 8/2024</p>
                <ul className="list-disc list-inside text-text-light space-y-2">
                  <li>Worked on Krita under Google's program, implementing key features and bug fixes using C++, Qt, and Python</li>
                  <li>Led development of the "Pixel Perfect" feature, improving pixel art workflows requested by 20% of artists</li>
                  <li>Collaborated globally to refine multiple features and increase overall project efficiency</li>
                  <li>Resolved 5% of reported bugs by identifying root causes and implementing clean solutions</li>
                  <li>Gained experience in community-driven development and large-scale project management</li>
                </ul>
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20"
                whileHover={cardHover}
              >
                <h3 className="text-2xl font-semibold text-text-dark">Pulau Pinang</h3>
                <p className="text-text-light mb-4">Full Stack Developer • 6/2023 – 12/2023</p>
                <ul className="list-disc list-inside text-text-light space-y-2">
                  <li>Handled front-end, back-end, and maintenance for a local restaurant's website, increasing online engagement by 35%</li>
                  <li>Developed a dynamic menu using server-side scripting and integrated Leaflet API for interactive mapping</li>
                  <li>Designed a responsive UI using the Bootstrap framework, ensuring accessibility across devices</li>
                  <li>Set up CentOS Stream server running MySQL databases and nginx for efficient hosting</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 mb-8 text-text-dark">Projects</h2>
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={fadeInUp} 
                className="bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20"
                whileHover={cardHover}
              >
                <h3 className="text-2xl font-semibold text-text-dark">ML Poison Prediction</h3>
                <p className="text-text-light mb-4">Academic Project</p>
                <ul className="list-disc list-inside text-text-light space-y-2">
                  <li>Developed machine learning models to classify the edibility of mushrooms based on hundreds of morphological and ecological features</li>
                  <li>Implemented classification algorithms including Naive Bayes, Support Vector Machines (SVM), and Random Forest</li>
                  <li>Conducted extensive hyperparameter tuning and feature selection to optimize model performance</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 