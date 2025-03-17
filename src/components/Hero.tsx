
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { blurIn, fadeIn, slideLeft, slideRight, slideUp } from '@/utils/animations';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  const features = [
    { title: "Simplicity", description: "Effortless interface design" },
    { title: "Performance", description: "Lightning-fast experience" },
    { title: "Elegance", description: "Beautiful visual aesthetics" },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-[20%] w-72 h-72 rounded-full bg-primary/5 animate-float" />
        <div className="absolute bottom-1/4 left-[15%] w-64 h-64 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[10%] right-[10%] w-48 h-48 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 z-10">
        <motion.div 
          className="flex flex-col justify-center"
          initial="initial"
          animate={controls}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeIn(0.2)} className="chip modern-gradient-2 text-white mb-6">
            Introducing DeepSee
          </motion.div>

          <motion.h1 
            variants={slideRight(0.3)}
            className="heading-xl text-balance mb-6"
          >
            Elevate your digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">experience</span>
          </motion.h1>

          <motion.p 
            variants={slideRight(0.5)}
            className="paragraph text-balance mb-8 max-w-xl"
          >
            A minimal and intuitive platform designed for the modern era. 
            Experience the perfect balance of aesthetics and functionality.
          </motion.p>

          <motion.div 
            variants={fadeIn(0.7)}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.button
              className="modern-gradient-1 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            
            <motion.button
              className="border border-border hover:border-purple-300 px-8 py-3 rounded-full hover:bg-purple-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.1, delayChildren: 0.9 } } }}
            className="grid grid-cols-3 gap-4"
          >
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                variants={fadeIn(0.1 * i)}
                className="flex flex-col"
              >
                <span className="text-sm text-muted-foreground">{feature.title}</span>
                <span className="font-medium">{feature.description}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative flex items-center justify-center"
          initial="initial"
          animate={controls}
        >
          <motion.div 
            variants={blurIn(0.4)}
            className="w-full h-96 sm:h-[500px] modern-gradient-3 rounded-3xl overflow-hidden flex items-center justify-center glassmorphism"
          >
            <motion.div 
              variants={slideUp(0.6)}
              className="w-3/4 h-3/4 bg-white rounded-2xl shadow-xl flex items-center justify-center"
            >
              <motion.div 
                variants={fadeIn(0.8)}
                className="text-center p-6"
              >
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400" 
                  alt="Digital Interface" 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="heading-sm mb-2">User-Centered Design</h3>
                <p className="text-sm text-muted-foreground">
                  Crafted for humans, engineered for performance
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div 
            variants={slideLeft(0.7)}
            className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl modern-gradient-4 rotate-12 glassmorphism"
          />
          <motion.div 
            variants={slideRight(0.8)}
            className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl modern-gradient-2 -rotate-12 glassmorphism"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
