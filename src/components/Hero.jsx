import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
//We are making everythng in contaner beacsue we are using tailwind for that we have to design each container inside className so we r using container so that we can apply tailwind css onit.

const Hero = () => {
  return (
    // MainContainer
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* MainSection inside MainContainer */}
        <section
          id="home"
          className={`flex md:flex-row flex-col  ${styles.paddingY}`}
        >
          {/* leftSection Part inside MainSection */}
          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          >
            {/* 20% discount container inside left section */}
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
              <img //LOGO
                src={discount}
                alt="discount"
                className="w-[32px] h-[32px]"
              />
              <p className={`${styles.paragraph} ml-2`}>
                {" "}
                {/*DiscountText */}
                <span className="text-white">20%</span> DISCOUNT FOR{" "}
                <span className="text-white">1 MONTH</span> ACCOUNT
              </p>
            </div>
            {/* NextGeneration Text container inside left section */}
            <div className="flex flex-row justify-between item-center w-full ">
              <h1
                className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] 
              leading-[75px]"
              >
                The Next <br className="ss:block hidden" />
                <span className="text-gradient">Generation</span>{" "}
                
              </h1>
              {/* GetStarted Button NextGeneration CContainer */}
              <div className="ss:flex hidden md:mr-4 mr-0 ">
                <GetStarted  />
              </div>
            </div>
            <h1
              className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] 
              leading-[75px] w-full"
            >
              Payment Method.
            </h1>
            <p
              className={`${styles.paragraph} md:mt-5 max-w-[470px] text-dimWhite`}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>

          {/* right Section Part inside MainSection */}
          <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `} >
            <img src={robot} alt='billing' className="w-[100%] h-[100%]  relative z-[5] "/>
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
            <div className="absolute z-[1] w-[50%] h-[80%] bottom-40 white__gradient"></div>
            <div className="absolute z-[0] w-[50%] h-[55%] 50right-20 bottom-20 blue__gradient"></div>
          </div>
            {/* Now we want get started button to be below the robot pic in mobileDevoices so it will be hidden on every device but visible on mobiles*/}
            <div className={`${styles.flexCenter} ss:hidden `}>
              <GetStarted />
            </div>

        </section>
      </div>
    </div>
  );
};

export default Hero;
