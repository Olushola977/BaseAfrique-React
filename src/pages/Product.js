import React from 'react';
import { HappyMan, CoWorking } from '../Images'

function Product() {
    return (
        <main>
            <section>
                <div class="bannerBox1 boxPosition boxSize-lg bannerBox1-rad-lg light">

                </div>
                <div class="bannerBox1 box1Position boxSize-lg bannerBox1-rad-lg light">

                </div>
                <div class="dot dotSize-s sDotPosition">

                </div>
            </section>
            <section class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 py-0">
                            <div class="banner-img position-relative mt-n7" data-aos="fade-right" data-aos-duration="1500">
                                <img src={HappyMan} class="img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-5 my-auto">
                            <div class="banner-text" data-aos="fade-left" data-aos-duration="1500">
                                <div class="bannerTextHeader">
                                    <h4>We create marvelous products</h4>
                                </div>
                                <div class="bannerTextBody my-4">
                                    <span>we are creating web and mobile products by using the essential design tools. Building and producing brand new projects is what we strive for.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="gradient4">
                <div class="container py-5">
                    <div class="row justify-content-around pt-5" data-aos="fade-down" data-aos-duration="1500">
                        <div class="col-lg-5">
                            <div class="ProductCard1">
                                <div class="cardHeader">
                                    <h4>Network Security</h4>
                                </div>
                                <div class="cardBody">
                                    <span>A device that can do filtering and website address blacklisting and endpoint security. Email protection and Microsegmentaiton on the cloud and mobile site.</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="ProductCard2">
                                <div class="cardHeader">
                                    <h4>Impeva</h4>
                                </div>
                                <div class="cardBody">
                                    <span>Provides solutions for high-value business data protection and prevents sensitive data theft from hackers and malicious insiders by securing data across three main areas: databases, file systems, and web applications.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-around pt-5" data-aos="fade-down" data-aos-duration="1500">
                        <div class="col-lg-5">
                            <div class="ProductCard1">
                                <div class="cardHeader">
                                    <h4>Impeva Camoflague</h4>
                                </div>
                                <div class="cardBody">
                                    <span>Imperva Camouflage Data Masking enables organizations to safely use data for critical business processes without exposing sensitive information. It mitigates the risk of data breach and non-compliance by de-identifying sensitive data in non-production environments.</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="productCard2">
                                <div class="cardHeader">
                                    <h4>Entrust Factor Authentication</h4>
                                </div>
                                <div class="cardBody">
                                    <span>This solutions combine strong authentication with bold enablement. We utilize the convenience and ubiquity of mobile technology to allow you to authenticate trusted identities without compromising usability. Our two-pronged approach involves first securing a user’s mobile device, then leveraging it to improve security.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-around pt-5" data-aos="fade-down" data-aos-duration="1500">
                        <div class="col-lg-5">
                            <div class="productCard1">
                                <div class="cardHeader">
                                    <h4>Portnox NACL</h4>
                                </div>
                                <div class="cardBody">
                                    <span>The Portnox platform is a software solution that sees through all network layers – Ethernet, wireless, virtual, VPN and cloud. It speaks directly and natively with all existing switches, wireless access controllers, routers and firewalls to get complete visibility of all devices the minute they connect to the network. It also controls connected devices, whether managed or unmanaged devices.</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="productCard2">
                                <div class="cardHeader">
                                    <h4>Privilege Access Management</h4>
                                </div>
                                <div class="cardBody">
                                    <span>Privileged Access Management (PAM) is a solution that helps organizations restrict privileged access within an existing Active Directory environment. Privileged Access Management accomplishes two goals: Isolate the use of privileged accounts to reduce the risk of those credentials being stolen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-around pt-5" data-aos="fade-down" data-aos-duration="1500">
                        <div class="col-lg-5">
                            <div class="productCard1">
                                <div class="cardHeader">
                                    <h4>Tuffin</h4>
                                </div>
                                <div class="cardBody">
                                    <span>Tufin enables customers to increase their business agility while maintaining a robust security posture across physical networks, hybrid cloud, containers and microservices. We provide policy-based automation to help customers implement changes in minutes instead of days, save time and valuable resources, and maintain continuous compliance with industry regulations and internal policies.</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="productCard2">
                                <div class="cardHeader">
                                    <h4>Tallis</h4>
                                </div>
                                <div class="cardBody">
                                    <span>Thales eSecurity provides your organization with security and trust in data wherever data is created, shared or stored without impacting business agility. Thales eSecurity delivers the industry's most comprehensive and advanced data security across devices, processes, platforms and environments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mainImage pt-5" data-aos="fade-down" data-aos-duration="1500">
                    <img src={CoWorking} width="100%" alt="" />
                </div>
            </section>
        </main>
    )
}

export default Product;