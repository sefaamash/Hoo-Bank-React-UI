import React from "react";
//Now we can just refer component and import it in single line of code remember when we refer any folder so bydefault it target its index.js file so no need to mention file
import {
  Navbar,
  Billing,
  CardDeal,
  Buisness,
  Clients,
  Cta,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";
import styles from "./style";

const App = () => {
  return (
    //NavBar
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Navbar />
      </div>
      </div>
      
      <Hero />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Buisness />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
