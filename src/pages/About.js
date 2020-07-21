import React from 'react';
import { LaughingWoman, CardDesign, Success, Goal, Perception, MemberImg } from '../Images';

function About() {
    return (
        <main>
            <section>
                <div className="bannerBox1 boxPosition">

                </div>
                <div className="bannerBox1">

                </div>
                <div className="curveBox">

                </div>
                <div className="dot dotSize-xl">

                </div>
                <div className="borderRight border-position darkGrey">

                </div>
                <div className="bannerBox1 boxSize-lg bannerBox1-rad-sm light b-0 r-70 mb-n6  boxPosition1">

                </div>
                <div className="bannerBox1 boxSize-xl bannerBox1-rad-lg light b-0 r-0 boxPosition2">

                </div>
            </section>
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 my-auto">
                            <div className="banner-text" data-aos="fade-right" data-aos-duration="2000">
                                <div className="bannerTextHeader">
                                    <h4>Hello We're<br />BaseAfrique</h4>
                                </div>
                                <div className="bannerTextBody my-4">
                                    <span>we're a diverse family of domain experts serving varying industry verticals helping our clients make lasting improvements to their performance and realize their most important goals using technology as a massive leverage.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 py-0">
                            <div className="banner-img position-relative ml-150" data-aos="fade-left" data-aos-duration="2000">
                                <img src={LaughingWoman} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mainGradient mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="gradientHeader mt-4" data-aos="fade-down" data-aos-duration="1500">
                                    <h1>OUR STORY</h1>
                                    <p>Our vision at BaseAfrique has always been to keep our clients rowing, optimizing their operations and staying ahead of the curve while fully leveraging technology. Our principal directors have combines industry experience of over40 years in various sectors in the economy with competence in usiness transformation, security financial advisory, IT Operations,CybserSecurity Infrastructure and Management.</p>
                                </div>
                            </div>
                        </div>

                        <div className="cards mt-250">
                            <div className="row">
                                <div className="col-lg-4 cardMargin">
                                    <div className="shadow-light bg-light py-5 px-3 cardBorderRadius aboutCard" data-aos="fade-right" data-aos-duration="1500">
                                        <img src={CardDesign} className="imgDesign" alt="" />
                                        <div className="d-flex justify-content-center mt-5">
                                            <div className="cardImg mr-2">
                                                <img src={Success} alt="" />
                                            </div>
                                            <div className="cardHeader text-center">
                                                <h4>OUR<br />MISSION</h4>
                                            </div>
                                        </div>
                                        <div className="cardBody my-3 mb-5">
                                            <span>To provide first-className unique and premium service to our Clients and help them meet and surpass all their important goals</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-4 mt-n7 cardMargin">
                                    <div className="shadow-light bg-light py-5 px-3 cardBorderRadius aboutCard" data-aos="fade-down" data-aos-duration="1500">
                                        <img src={CardDesign} className="imgDesign" alt="" />
                                        <div className="d-flex justify-content-center mt-5">
                                            <div className="cardImg mr-2">
                                                <img src={Goal} alt="" />
                                            </div>
                                            <div className="cardHeader text-center">
                                                <h4>OUR<br />GOAL</h4>
                                            </div>
                                        </div>
                                        <div className="cardBody my-3 mb-5">
                                            <span>To use our expertise to the benefit of our Clients and Partners through an open, collaborative approach</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-4 cardMargin">
                                    <div className="shadow-light bg-light py-5 px-3 cardBorderRadius aboutCard" data-aos="fade-right" data-aos-duration="3000">
                                        <img src={CardDesign} className="imgDesign" alt="" />
                                        <div className="d-flex justify-content-center mt-5">
                                            <div className="cardImg mr-2">
                                                <img src={Perception} alt="" />
                                            </div>
                                            <div className="cardHeader text-center">
                                                <h4>OUR<br />VISION</h4>
                                            </div>
                                        </div>
                                        <div className="cardBody my-3 mb-5">
                                            <span>Our vision at BaseAfrique has always been to keep our Clients growing, optimizing their operations and staying ahead of their curve while fully leveraging technology</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light pt-170 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mx-auto">
                            <div className="teamHeader mb-3 text-center" data-aos="fade-down" data-aos-duration="1500">
                                <h1>OUR TEAM</h1>
                                <p>Meet our team of higly skilled engineers and executive</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 memberInfoRow">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="memberCard">
                                        <div className="memberimg">
                                            <img src={MemberImg} className="img-fuid" alt="" />
                                        </div>
                                        <div className="memberId">
                                            <span className="memberName">Covenant Chukwudi</span><br />
                                            <span className="positionHeld">Head Innovation</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="memberCard">
                                        <div className="memberimg">
                                            <img src={MemberImg} className="img-fuid" alt="" />
                                        </div>
                                        <div className="memberId">
                                            <span className="memberName">Johnbosco Eme-Okafor</span><br />
                                            <span className="positionHeld">VP Strategy</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="memberCard">
                                        <div className="memberimg">
                                            <img src={MemberImg} className="img-fuid" alt="" />
                                        </div>
                                        <div className="memberId">
                                            <span className="memberName">Opeyemi Dominique</span><br />
                                            <span className="positionHeld">Senior Software Engineer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="memberCard">
                                        <div className="memberimg">
                                            <img src={MemberImg} className="img-fuid" alt="" />
                                        </div>
                                        <div className="memberId">
                                            <span className="memberName">Abayomi Olatunji</span><br />
                                            <span className="positionHeld">Senior Software Engineer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="memberCard">
                                        <div className="memberimg">
                                            <img src={MemberImg} className="img-fuid" alt="" />
                                        </div>
                                        <div className="memberId">
                                            <span className="memberName">Adams David</span><br />
                                            <span className="positionHeld">Product Design</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="memberCard">
                                        <div className="memberimg">
                                            <img src={MemberImg} className="img-fuid" alt="" />
                                        </div>
                                        <div className="memberId">
                                            <span className="memberName">Brume Love</span><br />
                                            <span className="positionHeld">Resident Machine Learning Lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5 memberInfoRow">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="memberCard">
                                        <div className="memberimg">
                                            <img src={MemberImg} className="img-fuid" alt="" />
                                        </div>
                                        <div className="memberId">
                                            <span className="memberName">Jolugbo Emmanuel Temi.</span><br />
                                            <span className="positionHeld">Software Engineer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="memberCard">
                                        <div className="memberimg">
                                            <img src={MemberImg} className="img-fuid" alt="" />
                                        </div>
                                        <div className="memberId">
                                            <span className="memberName">Edwin Dijas Chiwona</span><br />
                                            <span className="positionHeld">Senior Data & Infrastructure Engineer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="memberCard">
                                        <div className="memberimg">
                                            <img src={MemberImg} className="img-fuid" alt="" />
                                        </div>
                                        <div className="memberId">
                                            <span className="memberName">Abel Onuoha</span><br />
                                            <span className="positionHeld">Head of marketing and Business Development</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="memberCard">
                                        <div className="memberimg">
                                            <img src={MemberImg} className="img-fuid" alt="" />
                                        </div>
                                        <div className="memberId">
                                            <span className="memberName">Wale Oladapo</span><br />
                                            <span className="positionHeld">Head of Product Development</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About;