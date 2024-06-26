import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-two";
import Services from "../components/Services";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials/home-two";
// import Team from "../components/Team/home-two";

import ServiceThumb from "../assets/img/about.jpg";

const PageAbout = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        bgImg={require("../assets/img/page-header.jpg")}
        title="ABOUT US"
        content="Spazinex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
      />
      <About
        title={"Our Team"}
        heading="Meet Our <br/> Expert Member"
        thumb={ServiceThumb}
        content="<b>Spazinex</b> provide comprehensive and innovative solutions to help businesses thrive in today's dynamic and competitive landscape. With our deep industry knowledge and expertise, we are committed to delivering exceptional results that drive growth and success for our clients."
      />
      <Services />
      <Features classes={"sm-top"} />
      <Testimonial />
      {/* <Team /> */}
      <BrandLogo />
      <Funfact classes="sp-top" />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default PageAbout;
