//The purpose of this file is that there are lot of components  in component folder so we have lot of import synax in App.js file so to counter thatr
//we make this file index .js and import all the componnets here and export it in to our app.js ,the purpose of it is cleanCode structure. 


import Navbar from "./Navbar";
import Billing from "./Billing";
import CardDeal from "./CardDeal";
import Buisness from "./Buisness";
import Clients from "./Clients";
import Cta from "./Cta";
import Stats from "./Stats";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Hero from "./Hero";

export {
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
};