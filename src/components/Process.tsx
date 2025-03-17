
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { slideLeft, slideRight, slideUp } from '@/utils/animations';

const Process = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Begin with a thorough exploration of your unique needs and objectives.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Craft tailored solutions that address your specific requirements.',
    },
    {
      number: '03',
      title: 'Develop',
      description: 'Transform concepts into reality with precision engineering.',
    },
    {
      number: '04',
      title: 'Deploy',
      description: 'Launch your solution with confidence, backed by comprehensive support.',
    },
  ];

  return (
    <section id="process" ref={ref} className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate={controls}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={slideUp(0.1)} className="chip bg-primary/10 text-primary mb-4">
            Our Process
          </motion.div>
          <motion.h2 variants={slideUp(0.2)} className="heading-lg mb-4">
            How we bring your vision to life
          </motion.h2>
          <motion.p variants={slideUp(0.3)} className="paragraph max-w-xl mx-auto">
            A systematic approach that ensures exceptional results, delivered on time and within budget.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial="initial"
                animate={controls}
              >
                <motion.div
                  variants={index % 2 === 0 ? slideRight(0.1 * index) : slideLeft(0.1 * index)}
                  className={`mb-6 md:mb-0 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
                >
                  <div className="relative">
                    <div className="text-8xl font-bold text-primary/10 absolute -top-10 -left-4 select-none">
                      {step.number}
                    </div>
                    <div className="relative z-10">
                      <h3 className="heading-md mb-4">{step.title}</h3>
                      <p className="paragraph">{step.description}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={index % 2 === 0 ? slideLeft(0.1 * index) : slideRight(0.1 * index)}
                  className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}
                >
                  <div className="relative">
                    {/* Step indicator */}
                    <div className="hidden md:block absolute left-0 top-1/2 w-8 h-8 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2 shadow-md" style={{ left: index % 2 === 0 ? '0%' : '100%' }} />
                    
                    <div className={`h-64 bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/10 to-primary/5' : 'from-primary/5 to-primary/10'} rounded-2xl overflow-hidden flex items-center justify-center glassmorphism`}>
                      <div className="text-primary/80 p-6 text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                          {/* Icon based on step */}
                          {index === 0 && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="16"></line>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                          )}
                          {index === 1 && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                          )}
                          {index === 2 && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                              <polyline points="2 17 12 22 22 17"></polyline>
                              <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                          )}
                          {index === 3 && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          )}
                        </div>
                        <h4 className="font-medium">{step.title}</h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
