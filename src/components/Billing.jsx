import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    //Billing Section(MainSection)
    <section id="product" className={layout.sectionReverse}>
      {/*Left Section inside Billing MainSection*/}
      <div className={`${layout.sectionImgReverse} `}>
        {/*Image inside Billing MainSection*/}
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradient start inside LeftSection it will be visible behind image as its gradient is less than img */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      {/*Right Section inside Billing MainSection*/}
      <div className={`${layout.sectionInfo} `}>
        {/*H2 inside Right Section*/}
        <h2 className={styles.heading2}>
          Easily Control Your
          <br className="sm:block hidden" /> billing and invoicing.
        </h2>
        {/*P inside RightSection*/}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        {/*Btn Container inside RightSection*/}
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
