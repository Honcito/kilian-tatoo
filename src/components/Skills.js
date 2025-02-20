import React, { useState, useEffect } from 'react';
// useInView hook
import { useInView } from 'react-intersection-observer';
// react circular
import { CircularProgressbar } from 'react-circular-progressbar';
// react circular styles
import 'react-circular-progressbar/dist/styles.css';
// import motion
import { motion } from 'framer-motion';
// import fade in
import { fadeIn } from '../variants';

const Skills = () => {
  // ref para detectar cuando el componente está en vista
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  // full body tattoo state
  const [fullBody, setFullBody] = useState(0);

  // useEffect para animar la barra de progreso cuando esté en vista
  useEffect(() => {
    if (inView) {
		setTimeout(() => {
			if (fullBody < 90) {
				setFullBody(fullBody + 1);
			}
	}, 50);
	} else {
		setFullBody(0);
	}
  }, [inView, fullBody]);

  // circular progressbar styles
  const styles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#eeeeee",
    },
    text: {
      fill: "#111111",
      fontSize: "24px",
    },
  };

 return (
   <section ref={ref} className="section">
     <div className="container mx-auto">
       <div className="flex flex-col items-center gap-y-6">
         {/* Circular item 1 */}
         <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
           <CircularProgressbar
             strokeWidth={1}
             value={fullBody}
             styles={styles}
             text={`${fullBody}%`}
           />
           <div className="uppercase font-light tracking-[1.2px] text-center">
             Full Body Tattoo
           </div>
         </div>

         {/* Circular item 2 */}
         <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
           <CircularProgressbar
             strokeWidth={1}
             value={fullBody}
             styles={styles}
             text={`${fullBody}%`}
           />
           <div className="uppercase font-light tracking-[1.2px] text-center">
             Full Body Tattoo
           </div>
         </div>

         {/* Circular item 3 */}
         <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
           <CircularProgressbar
             strokeWidth={1}
             value={fullBody}
             styles={styles}
             text={`${fullBody}%`}
           />
           <div className="uppercase font-light tracking-[1.2px] text-center">
             Full Body Tattoo
           </div>
         </div>

         {/* Circular item 4 */}
         <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
           <CircularProgressbar
             strokeWidth={1}
             value={fullBody}
             styles={styles}
             text={`${fullBody}%`}
           />
           <div className="uppercase font-light tracking-[1.2px] text-center">
             Full Body Tattoo
           </div>
         </div>
       </div>
     </div>
   </section>
 );


};

export default Skills;
