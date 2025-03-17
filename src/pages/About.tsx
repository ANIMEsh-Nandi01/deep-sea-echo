
import { motion } from 'framer-motion';
import { ChevronRight, Users, BarChart, Award, Globe } from 'lucide-react';
import { slideUp, slideRight, slideLeft } from '@/utils/animations';

const About = () => {
  return (
    <div className="pt-28 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={slideRight(0.1)} className="chip modern-gradient-4 text-white mb-4">
                About Us
              </motion.div>
              <motion.h1 variants={slideRight(0.2)} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                We're on a mission to transform digital interactions
              </motion.h1>
              <motion.p variants={slideRight(0.3)} className="text-lg mb-6 text-gray-700">
                At DeepSee, we combine cutting-edge technology with thoughtful design to create experiences that elevate brands and engage users.
              </motion.p>
              <motion.div variants={slideRight(0.4)} className="flex items-center">
                <a href="#our-story" className="text-primary font-medium flex items-center">
                  Discover our story <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Our team" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-primary">10+</span>
                  <span className="text-gray-700">Years<br/>Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section id="our-story" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            >
              Our Story
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Founded in 2014, DeepSee began with a simple idea: to make digital experiences more intuitive, more engaging, and more human. What started as a small team of passionate designers and developers has grown into a global agency trusted by brands worldwide.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" 
                alt="Company growth" 
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </motion.div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-900">From humble beginnings</h3>
                <p className="text-gray-700">
                  We started in a small office with just five team members, but with a big vision. Our first projects were small but impactful, focusing on helping local businesses improve their web presence.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Expanding our horizons</h3>
                <p className="text-gray-700">
                  By 2018, we had expanded our team to over 50 talented individuals and opened offices in three countries. Our client base grew to include international brands seeking our expertise in creating memorable digital experiences.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Where we are today</h3>
                <p className="text-gray-700">
                  Today, DeepSee is a leader in digital innovation, with a diverse portfolio spanning web applications, branding, and immersive experiences. We remain committed to our core values of creativity, quality, and client satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold mb-2">200+</p>
              <p className="text-sm opacity-80">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-sm opacity-80">Team Members</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold mb-2">15</p>
              <p className="text-sm opacity-80">Industry Awards</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold mb-2">10</p>
              <p className="text-sm opacity-80">Years in Business</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="chip modern-gradient-1 text-white mx-auto mb-4"
            >
              Our Team
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            >
              Meet the minds behind DeepSee
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 max-w-2xl mx-auto"
            >
              Our diverse team brings together expertise in design, development, strategy, and more to deliver exceptional results for our clients.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400",
              },
              {
                name: "Sarah Chen",
                role: "Design Director",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
              },
              {
                name: "Michael Torres",
                role: "Technical Lead",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
              },
              {
                name: "Jamie Wilson",
                role: "Strategy Director",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400",
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 max-w-2xl mx-auto"
            >
              These principles guide our work and shape our culture, ensuring we deliver the best possible outcomes for our clients.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "Collaboration",
                description: "We believe great work happens through partnership, both within our team and with our clients."
              },
              {
                icon: <BarChart className="h-8 w-8 text-indigo-600" />,
                title: "Excellence",
                description: "We pursue the highest standards in everything we do, from design and code to client communication."
              },
              {
                icon: <Award className="h-8 w-8 text-indigo-600" />,
                title: "Innovation",
                description: "We constantly explore new technologies and approaches to solve complex problems."
              },
              {
                icon: <Globe className="h-8 w-8 text-indigo-600" />,
                title: "Impact",
                description: "We measure our success by the tangible results we create for users and businesses."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
