import React, {Component} from 'react';

import {
    BannerMan, BannerWoman, CoinStack, Optimization, BusinessAndFinance, Internet, Pivotal, Ibm, Cloud, Microsoft, Cisco,
    Oracle, Dell, Symantec, Imperva, FireEye, Hewlett, Commvault, Hp, CyberArk, Vmware, Observe, Vmware2, Intellinx
} from '../Images'


    function Home() {
        return (
            <main>
                <section>
                    <div className="bannerBox1 boxPosition boxSize-lg bannerBox1-rad-lg light">

                    </div>
                    <div className="bannerBox1 box1Position boxSize-lg bannerBox1-rad-lg light">

                    </div>
                    <div className="bannerBox2 box2Radius">

                    </div>
                </section>
                <section className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 py-0">
                                <div className="banner-img position-relative" data-aos="fade-right" data-aos-duration="2000">
                                    <img src={BannerMan} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 my-auto">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="bannerTextHeader gotham-bold">
                                        <h3>We help Organizations improve their bottom-line using technology</h3>
                                    </div>
                                    <div className="bannerTextBody my-4">
                                        <span>BaseAfrique is a Multi-competency enterprise transformation<br /> and technology-consulting firm</span>
                                    </div>
                                    <p className="lead banner-button">
                                        <a className="btn btn-primary btn-lg" href="#" role="button">Discover BaseAfrique</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5">

                    <div className="dot dotSize-lg storyDotPosition">

                    </div>
                    <div className="circle-sm circleColor position-absolute circlePosition2">

                    </div>
                    <div className="circle-lg circleColor position-absolute circlePosition1">

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-xl-4 my-auto">
                                <div className="gradient2 gradient2Border mt--">

                                </div>
                                <div className="box">
                                    <div className="banner-text py-5 my-5 pl-6" data-aos="fade-up" data-aos-duration="2000">
                                        <div className="bannerTextHeader pt-5">
                                            <h4 className="bold">OUR<br />STORY</h4>
                                        </div>
                                        <div className="bannerTextBody my-4">
                                            <span>Our vision at BaseAfrique has always been to keep our clients rowing, optimizing their operations and staying ahead of the curve while fully leveraging technology. Our principal directors have combines industry experience of over40 years in various sectors in the economy with competence in usiness transformation, security financial advisory, IT Operations,CybserSecurity Infrastructure and Management.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 py-0">
                                <div className="banner-img position-relative">
                                    <img src={BannerWoman} className="img-fluid" data-aos="fade-left" data-aos-duration="3000" alt="" />
                                    <div className="bannerBox1 position1 boxSize-sm bannerBox1-rad-sm light">

                                    </div>
                                    <div className="bannerBox1 position2 boxSize-xl bannerBox1-rad-lg darkGrey">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-lg-5">
                                <div className="shadow-light pl-5 pr-3 py-4 bannerBox1-rad-lg">
                                    <div className="cardImg pt-5 pb-4" data-aos="fade-up" data-aos-duration="1500" data-aos-duration="1500">
                                        <img src={CoinStack} alt="" />
                                    </div>
                                    <div className="cardHeader">
                                        <h5>Customer Acquisition & <br />Retention Growth</h5>
                                    </div>
                                    <div className="cardBody pt-3 pb-5">
                                        <span>We design enterprise applications to operate in corporate environment such as business or government to enhance the efficiency of online shopping and payment processing, interactive product catalogs, computerized billing systems, security, content management.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 my-auto">
                                <div className="borderRight darkGrey position-R-0">

                                </div>
                                <div className="banner-text mt-30" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="bannerTextHeader">
                                        <h5 className="bold">OUR<br />SERVICES</h5>
                                    </div>
                                    <div className="bannerTextBody my-4">
                                        <span>BaseAfrqiue is a multi-competency enterprise transformation and technology-consulting firm that combines expertise and capabilities across many industries and business functions to deliver superior value to its clients.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-lg-5">
                                <div className="shadow-light pl-5 pr-3 py-4 bannerBox1-rad-lg" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="cardImg pt-5 pb-4">
                                        <img src={Optimization} alt="" />
                                    </div>
                                    <div className="cardHeader">
                                        <h5>Route To Market &<br />Supply Chain Optimization</h5>
                                    </div>
                                    <div className="cardBody pt-3 pb-5">
                                        <span>IT service management, content switching modules, resource planning, business intelligence, human resource management, manufacturing, application integration, forms automation, sales force automation, enterprise resource planning and business process management.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="shadow-light pl-5 pr-3 py-4 bannerBox1-rad-lg" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="cardImg pt-5 pb-4">
                                        <img src={BusinessAndFinance} alt="" />
                                    </div>
                                    <div className="cardHeader">
                                        <h5>Business & <br />Financial Process Automation</h5>
                                    </div>
                                    <div className="cardBody pt-3 pb-5">
                                        <span>IT service management, content switching modules, resourceplanning, business intelligence, and business process management.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-lg-5 mt-auto">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="bannerTextHeader">
                                        <h5 className="bold">WHO IS<br />BASEAFRIQUE?</h5>
                                    </div>
                                    <div className="bannerTextBody my-4">
                                        <span>At BaseAfrique, we're a diverse family of domain experts serving varying industry verticals helping our clients make lasting improvements to their performance and realise their most important goals using technology as a massive leverage.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="shadow-light pl-5 pr-3 py-4 bannerBox1-rad-lg" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="cardImg pt-5 pb-4">
                                        <img src={Internet} alt="" />
                                    </div>
                                    <div className="cardHeader">
                                        <h5>IT Operations Management</h5>
                                    </div>
                                    <div className="cardBody pt-3">
                                        <span>IT service management, content switching modules, resource lanning, business intelligence, and business process management.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-3">
                    <div className="container">
                        <div className="row justify-content-around align-items-center">
                            <div className="col-lg-5">
                                <div className="button border-lg" data-aos="fade-left" data-aos-duration="1500">
                                    <a className="btn btn-primary btn-lg btn-rounded" href="#" role="button">READ MORE</a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="link" data-aos="fade-right" data-aos-duration="1500">
                                    <a href="#">See More &#8594;</a>
                                </div>
                            </div>
                            <div className="dot dotSize-lg position3">

                            </div>
                            <div className="bannerBox1 boxSize-lg bannerBox1-rad-lg light position5">

                            </div>
                            <div className="bannerBox1 boxSize-lg bannerBox1-rad-lg darkGrey position4">

                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="bg-light py-5">
                        <div className="dot dotSize-lg partnersDotPosition">

                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="partnerHeader mt-5 mb-5" data-aos="fade-down" data-aos-duration="2000">
                                        <h2>OUR PARTNERS</h2>
                                    </div>
                                    <div className="row my-3 align-items-center partners">
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg">
                                                <img src={Pivotal} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg">
                                                <img src={Ibm} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg">
                                                <img src={Cloud} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg">
                                                <img src={Microsoft} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg">
                                                <img src={Cisco} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-left">
                                            <div className="partnerimg">
                                                <img src={Oracle} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row my-4 align-items-center partners">
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg borderTop">
                                                <img src={Dell} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg borderTop">
                                                <img src={Symantec} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg borderTop">
                                                <img src={Imperva} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg borderTop">
                                                <img src={FireEye} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg borderTop">
                                                <img src={Hewlett} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-left">
                                            <div className="partnerimg borderTop">
                                                <img src={Commvault} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row my-4 align-items-center partners">
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg borderTop">
                                                <img src={Hp} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg borderTop">
                                                <img src={CyberArk} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg borderTop">
                                                <img src={Vmware} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg borderTop">
                                                <img src={Observe} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-right">
                                            <div className="partnerimg borderTop">
                                                <img src={Vmware2} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-left">
                                            <div className="partnerimg borderTop">
                                                <img src={Intellinx} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gradient3 gradient3Style">
                        <div className="bannerBox1 bannerBox1-rad-lg darkGrey boxSize-xxl opacity-02 gradientBoxPosition">

                        </div>
                    </div>
                </section>
                <section>
                    <div className="redGradient">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="my-3 py-5" data-aos="fade-left">
                                        <h3 className="pb-4 font text-white">LET'S IMPROVE<br />YOUR BOTTOM-LINE<br />USING TECHNOLOGY</h3>
                                        <a href="contact-us.html" className="btn btn-white btn-rounded bolder text-d-blue">Contact Us</a>
                                    </div>
                                </div>
                                <div className="dot dotSize-lg redDotPosition">

                                </div>
                                <div className="next">
                                    <div className="dot dotSize-sm redSmDotPosition">

                                    </div>
                                    <div className="bannerBox1 bannerBox1-rad-lg darkGrey opacity-02 size-m position-1">

                                    </div>
                                    <div className="bannerBox1 bannerBox1-rad-sm darkGrey size-sm opacity-02 position-2">

                                    </div>
                                    <div className="bannerBox1 bannerBox1-rad-sm darkGrey size-sm opacity-02 position-3">

                                    </div>
                                    <div className="bannerBox1 bannerBox1-rad-lg darkGrey size-lg opacity-02 position-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }

export default Home;