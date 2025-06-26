'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ImageCarousel from './components/ImageCarousel'
import { fadeInUp, staggerContainer, cardHover } from './components/animations'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1])
  const y = useTransform(scrollYProgress, [0, 0.1], [50, 0])

  return (
    <div className="min-h-screen" ref={containerRef}>
      <Hero />

      {/* Main Content with Enhanced Transition Effect */}
      <motion.div
        style={{ opacity, scale, y }}
        className="bg-background"
      >
        {/* About Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2 
                className="heading-2 mb-8 text-text-dark relative inline-block group "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative z-10">About Me</span>
                <motion.span 
                  className="absolute inset-0 bg-primary/20 rounded-lg -z-10 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.h2>
              <motion.div 
                className="prose max-w-none bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:bg-gray-700 group"
                whileHover={cardHover}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-text-light group-hover:text-white transition-colors duration-300">
                  Hi! I'm an Software Engineer with nearly 2 years of experience in backend development, website creation, feature implementation, and
                  generative AI applications, specializing in building user-friendly web experiences. I love making cool yet intuitive applications. I mainly use Java, Python, JavaScript
                  and C++ with hands-on experience in Spring Boot, React, Node.js, and MySQL. Feel free to contact me, I'm always excited to talk about new opportunities. 
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
              <motion.h2 
                className="heading-2 mb-8 text-text-dark relative inline-block group "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative z-10">Skills</span>
                <motion.span 
                  className="absolute inset-0 bg-primary/20 rounded-lg -z-10 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  variants={fadeInUp} 
                  className="bg-background-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 hover:bg-gray-700 group"
                  whileHover={cardHover}
                >
                  <h3 className="text-xl font-semibold mb-4 text-text-dark group-hover:text-white transition-colors duration-300">Languages</h3>
                  <p className="text-text-light group-hover:text-white transition-colors duration-300">Java, JavaScript, HTML/CSS, Python, C/C++/C#</p>
                </motion.div>
                <motion.div 
                  variants={fadeInUp} 
                  className="bg-background-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 hover:bg-gray-700 group"
                  whileHover={cardHover}
                >
                  <h3 className="text-xl font-semibold mb-4 text-text-dark group-hover:text-white transition-colors duration-300">Frameworks</h3>
                  <p className="text-text-light group-hover:text-white transition-colors duration-300">Node.js, React, Spring Boot, .NET, Angular, Qt</p>
                </motion.div>
                <motion.div 
                  variants={fadeInUp} 
                  className="bg-background-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 hover:bg-gray-700 group"
                  whileHover={cardHover}
                >
                  <h3 className="text-xl font-semibold mb-4 text-text-dark group-hover:text-white transition-colors duration-300">Development Practices</h3>
                  <p className="text-text-light group-hover:text-white transition-colors duration-300">Azure, CI/CD, MySQL, Git, Linux, Agile</p>
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
              <motion.h2 
                className="heading-2 mb-8 text-text-dark relative inline-block group "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative z-10">Experience</span>
                <motion.span 
                  className="absolute inset-0 bg-primary/20 rounded-lg -z-10 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.h2>
              <motion.div 
                className="space-y-12"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  variants={fadeInUp} 
                  className="relative group bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 overflow-hidden"
                  whileHover={cardHover}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: 'url(/images/wss.jpg)',
                      filter: 'blur(5px)'
                    }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-text-dark">Web Surfing Studios (WSS)</h3>
                    <p className="text-text-light mb-4">Software Development Intern • 4/2025 – Present</p>
                    <ul className="list-disc list-inside text-text-light space-y-2">
                      <li>Developed and deployed full-stack web applications using Node.js, React, Spring Boot, and AWS</li>
                      <li>Implemented CI/CD pipelines and cloud infrastructure to optimize performance and reliability</li>
                      <li>Collaborated with agile teams to build real-world projects</li>
                      <li>Hands-on experience with DevOps, site reliability engineering, and scalable system architectures</li>
                      <li>Contributed to WSS's learning platform along with many of their ongoing apps, showing 10% decrease in overall bugs</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp} 
                  className="relative group bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 overflow-hidden"
                  whileHover={cardHover}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: 'url(/images/krita.jpg)',
                      filter: 'blur(5px)'
                    }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-text-dark">Google Summer of Code 2024 with KDE</h3>
                    <p className="text-text-light mb-4">Open Source Developer • 10/2023 – 8/2024</p>
                    <ul className="list-disc list-inside text-text-light space-y-2">
                      <li>Worked on Krita under Google's program, implementing key features and bug fixes using C++, Qt, and Python</li>
                      <li>Led development of the "Pixel Perfect" feature, improving pixel art workflows requested by 20% of artists</li>
                      <li>Collaborated globally to refine multiple features and increase overall project efficiency</li>
                      <li>Resolved 5% of reported bugs by identifying root causes and implementing clean solutions</li>
                      <li>Gained experience in community-driven development and large-scale project management</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp} 
                  className="relative group bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 overflow-hidden"
                  whileHover={cardHover}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: 'url(/images/pinang.jpg)',
                      filter: 'blur(5px)'
                    }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-text-dark">Pulau Pinang Website</h3>
                    <p className="text-text-light mb-4">Full Stack Developer • 6/2023 – 12/2023</p>
                    <ul className="list-disc list-inside text-text-light space-y-2">
                      <li>Handled front-end, back-end, and maintenance for a local restaurant's website, increasing online engagement by 35%</li>
                      <li>Developed a dynamic menu using server-side scripting and integrated Leaflet API for interactive mapping</li>
                      <li>Designed a responsive UI using the Bootstrap framework, ensuring accessibility across devices</li>
                      <li>Set up CentOS Stream server running MySQL databases and nginx for efficient hosting</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div 
                  variants={fadeInUp} 
                  className="relative group bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 overflow-hidden"
                  whileHover={cardHover}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: 'url(/images/ctp.jpg)',
                      filter: 'blur(5px)'
                    }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-text-dark">CUNY Tech Prep</h3>
                    <p className="text-text-light mb-4">Fellow, Full Stack Developer • 7/2022 – 6/2023</p>
                    <ul className="list-disc list-inside text-text-light space-y-2">
                      <li>Worked on multiple real world projects using React, Node.js with Express, and PostgreSQL, following industry standards</li>
                      <li>Applied MVC architecture, Git/GitHub for version control, Agile methodologies, and test‑driven development.</li>
                      <li>Implemented CI/CD workflows, ensuring efficient deployment and continuous integration.</li>
                      <li>Learned/Improved many indemand tech skills and continuously shown professional soft skills like leadership and communication</li>
                    </ul>
                  </div>
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
              <motion.h2 
                className="heading-2 mb-8 text-text-dark relative inline-block group "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative z-10">Projects</span>
                <motion.span 
                  className="absolute inset-0 bg-primary/20 rounded-lg -z-10 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.h2>
              <motion.div 
                className="space-y-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  variants={fadeInUp} 
                  className="relative group bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 overflow-hidden"
                  whileHover={cardHover}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: 'url(/images/ml-poison.jpg)',
                      filter: 'blur(4px)'
                    }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-text-dark">ML Poison Prediction</h3>
                    <p className="text-text-light mb-4">Academic Project</p>
                    <ul className="list-disc list-inside text-text-light space-y-2">
                      <li>Developed machine learning models to classify the edibility of mushrooms based on hundreds of morphological and ecological features</li>
                      <li>Implemented classification algorithms including Naive Bayes, Support Vector Machines (SVM), and Random Forest</li>
                      <li>Conducted extensive hyperparameter tuning and feature selection to optimize model performance</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div 
                  variants={fadeInUp} 
                  className="relative group bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 overflow-hidden"
                  whileHover={cardHover}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: 'url(/images/pawsome.jpg)',
                      filter: 'blur(4px)'
                    }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-text-dark">Pet Boarding Website</h3>
                    <p className="text-text-light mb-4">Personal Project</p>
                    <ul className="list-disc list-inside text-text-light space-y-2">
                    <li>Developed a full-stack pet boarding management system with an integrated database, ensuring secure data handling for pet bookings, facility tracking, and customer interactions.</li>
                      <li>Implemented controllers and views to support structured GET and POST operations, including cascading deletes, validation logic for booking consistency, and referential integrity enforcement.</li>
                      <li>Designed scalable architecture using Entity Framework-backed models and view models for optimized user interactions, enhancing system efficiency and usability.</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div 
                  variants={fadeInUp} 
                  className="relative group bg-background-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 overflow-hidden"
                  whileHover={cardHover}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: 'url(/images/apple.jpg)',
                      filter: 'blur(4px)'
                    }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-text-dark">Apple Clone</h3>
                    <p className="text-text-light mb-4">Personal Project</p>
                    <ul className="list-disc list-inside text-text-light space-y-2">
                      <li>Implemented a dynamic, modern layout mirroring Apple's design language, ensuring optimized
                      performance, interactive element.</li>
                      <li>Designed using Tailwind CSS for responsive styling, Node.js for backend services, and Framer Motion for smooth animations and UI transitions.</li>
                      <li>Designed and coded an interactive landing page replicating Apple's aesthetic, focusing on smooth animations and transitions.</li>
                      <li>Optimized page load speeds and performance using efficient asset management and lazy loading techniques.</li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <ImageCarousel />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  )
} 