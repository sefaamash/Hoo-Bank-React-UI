import React from "react";
import styles from "../style";
import Button from "./Button";

const Cta = () => {
  return (
    //Call to action Section(MainSection)
    <section id="features" className={`${styles.marginY} ${styles.padding} flex sm:flex-row flex-col bg-black-gradient-2 box-shadow rounded-[20px] `}  >
      {/*Left Section inside CTA MainSection*/}
      <div className={`flex flex-col flex-1  `}>
        {/*H2 inside Left Section*/}
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        {/*P inside Left Section*/}
        <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      {/*Right Section inside CTA MainSection*/}
      <div className={`  ${styles.flexCenter} md:ml-80 ml-0 xs:mt-0 mt-10`}>
         {/*GetStarted Button inside Right Section*/}
         <Button styles="mt-10"/>
      </div>
    </section>
  );
};

export default Cta;
