import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    //Card Section(MainSection)
    <section id="cardDeal" className={layout.section}>
      {/*Left Section inside CardDeal MainSection*/}
      <div className={`${layout.sectionInfo} `}>
        {/*H2 inside Left Section*/}
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        {/*P inside Left Section*/}
        <p className={`${styles.paragraph} max-w-[472px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        {/*GetStarted Button inside Left Section*/}
        <Button styles="mt-10"></Button>
      </div>

      {/*Right Section inside CardDEAL MainSection*/}
      <div className={`${layout.sectionImg} `}>
        <img src={card} alt='card' className="w-[100%] h-[100%]"/>
      </div>
    </section>
  );
};

export default CardDeal;
