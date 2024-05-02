import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/about.jpg'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/page-header.jpg')}
                title="OUR SERVICES"
                content="Spazinex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
            />
            <PageAbout
                title={'Our Services'}
                heading="Provide best <br/> Business Solutions"
                thumb={ServiceThumb}
                content="<b>Spazeinex</b> provide comprehensive and innovative solutions to help businesses thrive in today's dynamic and competitive landscape. With our deep industry knowledge and expertise, we are committed to delivering exceptional results that drive growth and success for our clients."
            />
            <Services classes="sm-top"/>
            <PricingTable/>
            <Testimonial/>
            <BrandLogo/>
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageService;