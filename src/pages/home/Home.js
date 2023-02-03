import React from "react";
import Banner from "../../components/banner/Banner";
import Hero from "../../components/hero/Hero";
import Different from "../../components/review/Different";
import Card from "../../components/card/Card";
import "./home.scss";
const Home = () => {
  return (
    <div>
      <Hero />
      <section className="section">
         <Card/>
      </section>
      <section className="section-1">
        <Different />
      </section>
      <section className="section-2">
        <Banner />
      </section>
    </div>
  );
};

export default Home;
