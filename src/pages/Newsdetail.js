import React from 'react';
import { EventImg } from '../Images';

function Newsdetail() {
    return (
        <main data-aos="fade-down" data-aos-duration="1500">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="banner-img position-relative">
                                <img src="images/directors.png" class="img-fluid" width="100%" />
                                <div class="position-absolute blogNewsText">
                                    <div class="cardHeader pb-2 text-white">
                                        <h1>Landor X: Man vs. Robot panel discusses tech with a human touch</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="gradient4 mt-2 py-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div class="eventDate">
                                    <h3>SYDNEY (25 August 2016)</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div class="eventNews">
                                    <p class="intro">What does the future of branding have in store? Where will marketers and consultants fit amidst robots and space-age technology? Inspired by this very question, a panel of brand and customer experience experts met with leaders from global branding agency Landor. The question at hand? Proving that innovation, creativity, and human touch are essential for brands to thrive in our increasingly automated world.
								</p><br />
                                    <p class="body">The event culminated in a panel discussion hosted by Landor’s executive director of innovation, Giles Day, who spoke about humanity and technology in the world of the future with Robbie Robertson (partner, spatial and brand experience at Deloitte Australia), Joe Lynch (vice president of insights at BBC Worldwide), Ian Swanson (design lead at Coca-Cola South Pacific), and Ross Jauncey (creative agency lead at Google).
								</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-5">
                                        <div class="eventCaption d-flex">
                                            <div class="img mr-3">
                                                <img src={EventImg} class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="imgText">
                                            <h3 class="subHeader">From creation to curation</h3>
                                            <p>To take full advantage of the opportunities technology presents, Jauncey explained that companies must go  beyond simply capturing data, instead using data to tailor their offerings. Jauncey noted that his Google team is more efficient at enhancing customer experience and creating and curating content because of the way it integrates data. Pointing to Google Cardboard and Tango, he explained the impact technology can have on storytelling, both from a brand and consumer point of view.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div class="eventNews">
                                    <p>Highlighting Pokémon Go as an area of opportunity, Jauncey stated, “Pokémon Go at the moment is about collecting imagine if that changed to creating. Look at Snapchat—it is allowing kids to create and curate content every day.”</p><br />
                                    <div class="subHeader">
                                        <h3>Data as a Tool</h3>
                                    </div>
                                    <p class="intro">One of the key takeaways from Landor X was an acknowledgement that not any one of these skills can exist in isolation insights without data, technology without humanity, or data without technology. Swanson from Coca-Cola South Pacific was quick to remind marketers that they need to remain grounded, for the best insights are usually found by speaking to and engaging with consumers. In discussing creativity, he noted, “We tend to lose ourselves in data, forgetting that the best ideas start with insights from real people.”</p><br />
                                    <p class="body">Wrapping up the day, the panel agreed that the growth of automation and robots benefits the marketing industry, freeing up humans to provide valuable insights and ideas instead of crunching numbers and capturing data. But the speakers stressed the need for innovation, creativity, and skill development to ensure that companies are ready to adapt to the changes that automation will bring. Jauncey summarized this idea: “[No matter what technology is developed in the future] businesses will always need good ideas, so we need to stay on top of creativity.”
								</p><br />
                                    <p class="body">Dominic Walsh agreed vehemently: “Ever increasingly, Landor is being asked to facilitate breakthrough innovation for its clients to help them keep pace with technological change. The key to this is applying agile principles so that brands can adapt to the changing world around them.”</p>
                                </div>
                            </div>
                        </div>
                        <div class="row py-5">
                            <div class="col-lg-3 mx-auto">
                                <div class="button">
                                    <button type="button" class="btn btn-pad bgLight px-4 py-2 bold">LOAD MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Newsdetail;