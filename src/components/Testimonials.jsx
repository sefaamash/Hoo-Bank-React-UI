import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    //Clients Testominial Section this section will be in column as it has 2 div's
    <section
      id="testimonials"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
       {/*GradientDIV its z-index will be lower than other divs as it will be behind the upper and lower div*/}
    <div className="absolute z-[0] w-[60%] h-[60%] right-[-50%] rounded-full blue__gradient "/>
      
      {/*UpperDIV */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          {" "}
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      
      {/*LowerDiv */}
      <div className="flex flex-wrap sm:justify-start justify-center relative z-[1]">
        {feedback.map((card) => (
          <FeedBackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
