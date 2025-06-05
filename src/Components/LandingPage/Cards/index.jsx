import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import "./style.css"

const Card = ({ h3text, ptext, classStyle }) => {
  const [ ref, inView ] = useInView({
    triggerOnce: true, 
    threshold: 0.3,
  });

  return (
    <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'} hover:scale-[1.1] transition cursor-pointer ${classStyle}`}>
      
     <div className="w-[500px] h-[200px] bg-[#F4F6FA] p-6 rounded-xl shadow-md hover:shadow-lg transition card">
        <div className={`bg-[#F4F6FA] ${classStyle}`}>
          <h3 className={`text-xl font-semibold text-[#1C1F58] mb-3`}>{h3text}</h3>
          <p className={`text-gray-700`}>{ptext}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
