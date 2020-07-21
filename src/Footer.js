import React from 'react';
import {Route, Link} from 'react-router-dom';

function Footer() {
    return (
        <footer data-aos="fade-in" data-aos-duration="2000">
            <section className="gradient3 footerGradient position-relative">
                <div className="bannerBox1 bannerBox1-rad-sm light boxSize-lg footerBox1Position opacity-06">

                </div>
                <div className="bannerBox1 bannerBox1-rad-lg darkGrey boxSize-xxl opacity-02 footerBox2Position">

                </div>
                <div className="bannerBox1 bannerBox1-rad-lg darkGrey boxSize-xxxl opacity-02 footerBox3Position">

                </div>
                <div className="dot dotSize-lg footerDotPosition">

                </div>
                <div className="container ml-6">
                    <div className="row pt-6">
                        <div className="col-lg-4 col-xl-2 px-0 footerHeader">
                            <h4><Link to="/"><span className="txtLogo">B</span><span>aseAfrique</span></Link></h4>
                            <div className="footerItems">
                                <ul className="info align-items-center">
                                    <li>
                                        <div className="d-inline-flex align-items-center">
                                            <img src="images/phone-line.svg" className="mr-2" alt="" /><span className="gotham-medium">+234 01-631 1215</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-inline-flex align-items-center">
                                            <img src="images/mail-line.svg" className="mr-2" alt="" /><span className="gotham-medium">Customer@Baseafrique.com</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-inline-flex align-items-center">
                                            <img src="images/map-pin-line.svg" className="mr-2" alt="" /><span className="gotham-medium">1224, Bishop Oluwole Street, Victoria Island,<br />Eti Osa, Lagos.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-inline-flex align-items-center">
                                            <img src="images/copyright-line.svg" className="mr-2" alt="" /><span className="gotham-medium">2020 BaseAfrique</span><span className="ml-4 gotham-medium">All Rights Reserved.</span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-xl-2">
                            <div className="footerHeader">
                                <h5>PRODUCTS</h5>
                                <div className="footerItems">
                                    <ul>
                                        <li><Link to="#">BaseAfrique</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-xl-2">
                            <div className="footerHeader">
                                <h5>INFORMATION</h5>
                                <div className="footerItems">
                                    <ul>
                                        <li><Link to="#">License</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-xl-2">
                            <div className="footerHeader">
                                <h5>ABOUT</h5>
                                <div className="footerItems">
                                    <ul>
                                        <li><Link to="#">Contacts</Link></li>
                                        <li><Link to="#">Team</Link></li>
                                        <li><Link to="#">Service</Link></li>
                                        <li><Link to="#">Support</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-2">
                            <div className="footerHeader">
                                <h5>FOLLOW</h5>
                                <div className="footerItems">
                                    <ul>
                                        <li><Link to="#">Twitter</Link></li>
                                        <li><Link to="#">Facebook</Link></li>
                                        <li><Link to="#">LinkedIn</Link></li>
                                        <li><Link to="#">Instagram</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bannerBox1 bannerBox1-rad-lg light boxSize-xxl footerBox4Position">

                </div>
                <div className="dot dotSize-sm footerDot2Position">

                </div>
            </section>
        </footer>
    )
}

export default Footer;