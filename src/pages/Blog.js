import React from 'react';
import { Thomas, FashionShow, Mary, Directors, Coke } from '../Images';
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <main>
            <section>
                <div class="bannerBox1 boxPosition boxSize-lg bannerBox1-rad-lg light">

                </div>
                <div class="dot dotSize-xl imgBannerPosition">

                </div>
            </section>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <div class="banner-img position-relative">
                                <img src={Coke} class="img-fluid" alt="" data-aos="fade-right" data-aos-duration="2000" />
                                <div class="bannerCard img-text rounded shadow" data-aos="fade-left" data-aos-duration="2000">
                                    <div class="cardHeader pb-2">
                                        <h4>CloudspaceTech helps Coca Cola to cool down Australia’s summer with a frozen rebrand</h4>
                                    </div>
                                    <div class="cardHeader pb-2">
                                        <span>5 June 2019 — Australian summers are iconic, but they’re also absolute scorchers. That’s why since the 1990s, Australians have been enjoying the icier side of their favorite soft drinks to get them through the warmer months.</span>
                                    </div>
                                    <div class="link">
                                        <Link to="#"><h5>Read More &#8594;</h5></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="gradient4 mt-5">
                    <div class="archiveBox1 bannerBox1-rad-lg position-absolute light">

                    </div>
                    <div class="archiveBox2 r-0 position-absolute light">

                    </div>
                    <div class="boxSize-lg archiveBox3 r-0 position-absolute light">

                    </div>
                    <div class="container pt-5 archiveContainer">
                        <div class="row">
                            <div class="col-lg-10 mx-auto">
                                <div class="row">
                                    <div class="col-lg-6 col-6">
                                        <div class="header">
                                            <h3>ARCHIVE</h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-6">
                                        <div class="dropdown float-right">
                                            <button class="btn btn-secondary px-4 dropdown-toggle dropdown-toggle-split" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                All Year
											</button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link class="dropdown-item" to="#">All Year</Link>
                                                <Link class="dropdown-item" to="#">2020</Link>
                                                <Link class="dropdown-item" to="#">2019</Link>
                                                <Link class="dropdown-item" to="#">2018</Link>
                                                <Link class="dropdown-item" to="#">2017</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bgLight py-5 px-4 mb-5">
                                    <div class="row pt-5" data-aos="fade-left" data-aos-duration="1500">
                                        <div class="col-lg-7 my-auto">
                                            <div class="archiveCardImg">
                                                <img src={Directors} class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="archiveCardText">
                                                <div class="cardHeader">
                                                    <h4>Landor X: Man vs. Robot panel discusses tech with a human touch</h4>
                                                </div>
                                                <div class="cardBody py-5">
                                                    <span>25 August 2019 — At our recent Landor X: Man vs. Robot event, experts from across the marketing, branding, and consulting spaces weighed in on how technology could impact creativity, design, and marketing in the future.</span>
                                                </div>
                                                <div class="link">
                                                    <Link href="news-detail.html"><h5>Read More &#8594;</h5></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row pt-5" data-aos="fade-right" data-aos-duration="1500">
                                        <div class="col-lg-7 my-auto">
                                            <div class="archiveCardImg">
                                                <img src={Mary} class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="archiveCardText">
                                                <div class="cardHeader">
                                                    <h4>Landor X: Man vs. Robot panel discusses tech with a human touch</h4>
                                                </div>
                                                <div class="cardBody py-5">
                                                    <span>25 August 2019 — At our recent Landor X: Man vs. Robot event, experts from across the marketing, branding, and consulting spaces weighed in on how technology could impact creativity, design, and marketing in the future.</span>
                                                </div>
                                                <div class="link">
                                                    <Link to="news-detail.html"><h5>Read More &#8594;</h5></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row pt-5" data-aos="fade-left" data-aos-duration="1500">
                                        <div class="col-lg-7 my-auto">
                                            <div class="archiveCardImg">
                                                <img src={FashionShow} class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="archiveCardText">
                                                <div class="cardHeader">
                                                    <h4>Landor X: Man vs. Robot panel discusses tech with a human touch</h4>
                                                </div>
                                                <div class="cardBody py-5">
                                                    <span>25 August 2019 — At our recent Landor X: Man vs. Robot event, experts from across the marketing, branding, and consulting spaces weighed in on how technology could impact creativity, design, and marketing in the future.</span>
                                                </div>
                                                <div class="link">
                                                    <Link to="news-detail.html"><h5>Read More &#8594;</h5></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row pt-5" data-aos="fade-right" data-aos-duration="1500">
                                        <div class="col-lg-7 my-auto">
                                            <div class="archiveCardImg">
                                                <img src={Thomas} class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="archiveCardText">
                                                <div class="cardHeader">
                                                    <h4>Landor X: Man vs. Robot panel discusses tech with a human touch</h4>
                                                </div>
                                                <div class="cardBody py-5">
                                                    <span>25 August 2019 — At our recent Landor X: Man vs. Robot event, experts from across the marketing, branding, and consulting spaces weighed in on how technology could impact creativity, design, and marketing in the future.</span>
                                                </div>
                                                <div class="link">
                                                    <Link to="news-detail.html"><h5>Read More &#8594;</h5></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row py-5">
                                    <div class="col-lg-3 mx-auto">
                                        <div class="button">
                                            <button type="button" class="btn bgLight px-4 py-2 bolder">LOAD MORE</button>
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

export default Blog;