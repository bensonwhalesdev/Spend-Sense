import React from 'react';
import { useInView } from 'react-intersection-observer';
import { PieChart, CheckCircle, Target, BarChart3 } from "lucide-react";
import clsx from 'clsx';

const ThirdSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const steps = [
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      title: "Create Your Budget",
      desc: "Set monthly spending limits tailored to your lifestyle. Know exactly where your money is going.",
    },
    {
      icon: <PieChart className="w-10 h-10 text-white" />,
      title: "Track Every Expense",
      desc: "Automatically log your spending and categorize transactions in real-time.",
    },
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Set Financial Goals",
      desc: "Whether it’s saving for a trip or paying off debt, set goals and we’ll help you reach them.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-white" />,
      title: "Gain Powerful Insights",
      desc: "Visualize your progress with smart charts and reports that keep you in control.",
    },
  ];

  return (
    <section className="bg-[#D5D5E0] rounded-tr-[180px] py-20 px-6 md:px-20">
      <div ref={ref} className={clsx("bg-[#1C1F58] rounded-tr-[180px] py-20 px-6 transition-all duration-1000",
          {"opacity-100 translate-y-0": inView,
            "opacity-0 translate-y-10": !inView,
          }
        )}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">How Spend-Sense Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {steps.map((step, index) => (
            <div key={index} className={clsx("flex flex-col items-center p-6 rounded-xl bg-[#2A2E73] shadow-md hover:shadow-lg transition-all duration-700",
                {
                  "opacity-100 translate-y-0 delay-[150ms]": inView,
                  "opacity-0 translate-y-10": !inView,
                }
              )}>
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
