import React from 'react';
import { ArrowUpRight, Server, Brain, Layout, ShieldAlert } from 'lucide-react';

export const ServicesStats: React.FC = () => {
  const services = [
    {
      title: 'Backend & Systems Architecture',
      description: 'Designing modular, layered REST APIs with TypeScript, Express.js, and FastAPI. Schema validation with Zod and clean controller-service-repository patterns.',
      icon: Server,
    },
    {
      title: 'Applied AI & Neural Models',
      description: 'Engineering machine learning pipelines with scikit-learn, TensorFlow, and PyTorch. Experience in GAN anomaly gatekeepers, 5-model ensembles, and NLP.',
      icon: Brain,
    },
    {
      title: 'Full-Stack Web Development',
      description: 'Crafting responsive, high-performance web applications using React, Next.js, and Tailwind CSS. Seamless asynchronous API integration and state handling.',
      icon: Layout,
    },
    {
      title: 'Network Defense & Intrusion Detection',
      description: 'Developing high-throughput packet vectorization, anomaly detection on 125K+ flow datasets, and automated cyberattack response engines.',
      icon: ShieldAlert,
    },
  ];

  const stats = [
    { value: '125K+', label: 'Flow Samples Evaluated', sub: 'NSL-KDD Benchmark' },
    { value: '92%+', label: 'Detection Accuracy', sub: 'Sentinel-AI System' },
    { value: '2', label: 'National Hackathon Honors', sub: 'IIT Madras & IIM Indore' },
    { value: '6+', label: 'Production Systems', sub: 'Built & Deployed' },
  ];

  return (
    <section id="services" className="py-24 relative z-10 border-t border-white/5 bg-[#06080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00ff66] block mb-2">
            Engineering Domains
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Services & Core Capabilities
          </h2>
          <p className="text-base text-gray-400 mt-3 leading-relaxed">
            Delivering robust engineering across distributed backends, applied machine learning systems, and responsive modern web applications.
          </p>
        </div>

        {/* 4 Cards Grid with Corner Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <div
                key={index}
                className="card-cyber p-8 flex flex-col justify-between group relative cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center text-[#00ff66] group-hover:bg-[#00ff66] group-hover:text-[#06080c] transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#00ff66] flex items-center justify-center text-gray-400 group-hover:text-[#00ff66] transition-colors">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#00ff66] transition-colors mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Ribbon — removed CGPA and 16+ repos, replaced with engineering metrics */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0d121c] border border-white/5 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((st, i) => (
              <div key={i} className={i !== 0 ? 'pt-6 lg:pt-0' : ''}>
                <span className="text-4xl sm:text-5xl font-heading font-black text-[#00ff66] block mb-1">
                  {st.value}
                </span>
                <span className="text-sm font-heading font-bold text-gray-200 block">
                  {st.label}
                </span>
                <span className="text-xs font-mono text-gray-500 block mt-0.5">
                  {st.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
