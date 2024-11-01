import React from 'react';
import { Sparkles, Rocket, BarChart2, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Creativity",
      description: "At Mia, we craft authentic content that mirrors your brand's voice while engaging and converting readers. Mia's AI integrates your personality and insights from our data-driven approach, delivering posts your audience connects with."
    },
    {
      icon: Globe2,
      title: "Multilingual Excellence",
      description: "Create content in any language and translate existing content seamlessly. Mia helps you reach global audiences with culturally-aware, naturally-flowing content that maintains your brand's voice across languages."
    },
    {
      icon: Rocket,
      title: "Rapid Delivery",
      description: "Get professionally crafted, SEO-optimized content in minutes. Mia is here to make sure your content strategy scales with ease."
    },
    {
      icon: BarChart2,
      title: "Proven Results",
      description: "Clients experience an average 2x growth in website traffic within months of working with Mia. See the transformation for yourself!"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 bg-dark-purple/30">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 rounded-xl p-8 text-center"
            >
              <div className="bg-pink-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}