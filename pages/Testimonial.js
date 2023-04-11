import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const Testimonial = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };


    return (
        <>
            <Header />

            <div style={{ backgroundColor: "black", width: "100%", height: "auto", paddingTop: "1.5rem", paddingLeft: "4rem", overflow: "hidden", textAlign: "center", marginTop: "1rem" }}><h1
                style={{ color: "white", marginBottom: "1.5rem" }}>OUR Testimonials</h1></div>

            <div className="cardslidersetup " style={{ backgroundColor: "lightgray", padding: "2rem" }}>


                {/* optional */}


                <div className='jkl'>
                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>I came to Dr. Zeba Three month back with lots of acne , scars, pimples on my face and neck but Dr. Zeba gave me photofacial and she did a magic that I went back with a new clear face . Again after three months I am coming from Delhi to take her session
                            and would love to further visit her for my sessions. Thanks Dr. Zeba "</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Asha</h6>
                        </div>


                    </div>

                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>Hi Zeba mam today one of my colleagues complimented me that my skin is glowing n also dark spots are going. I got this compliment because of you
                            I don't know you are a magician or what but your treatment has done a miracle to my skin you made my lifeless skin so glowing thanks a lot mam being a doctor
                            I had tried almost every medicine for it but you did magic just in 3 sessions of photo facials.</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Poonam</h6>
                        </div>


                    </div>

                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>Glad to thank Dr. Zeba mam that their homeopathic medicine  and skin product has give me an outstanding result on me I am using these products and medicine since 8 months . I got rid of black
                            patches, pigmentation and dark circles on my face. I definitely recommend to use these products and consult Dr. Zeba for homoeopathy.</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Amina Begum</h6>
                        </div>


                    </div>
                </div>

                <div className='jkl'>
                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>I was very disturbed cause of my red cheeks , burning ,whenever I was exposed to sunlight, change of temperature, cold weather. I took homeopathic
                            medicines from Dr. Zeba and to my surprise it started affecting me from day one , now i can go out freely. I am very thankful to homeopathy.</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Khairon</h6>
                        </div>


                    </div>

                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>Thankyou Dr. Zeba Mam and homeopathy for treating me for alopecia .
                            As a 11 year old kid i have lost all my confidence cause of this disease. Thankyou for helping me live with great confidence and also for your  motivating words.</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Ridhima</h6>
                        </div>


                    </div>

                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>Thankyou Dr. Zeba Quadiri and homeopathy for helping me fixing my hormonal disorder and also in my weight loss I was facing this issue of hormonal imbalance.
                            which eas a major cause of my massive weight gaince since 8-10years. consulted so many gynaecologists but all in vain I lost all hope.
                            It was all possible only because of you Thankyou so much for helping me get wht I dreamt of.</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Parul</h6>
                        </div>


                    </div>
                </div>

                <div className='jkl'>
                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>This testimonial is long overdue. I met Dr Zeba in the year 2018 when I was suffering with multiple issues such as hair loss , pcos , hormonal imbalance,  mood swings.
                            facial hair and what not . It was fruastating and irritating because dealing with such issues was pushing me towards the brink of depression , but you are a life  saver Dr Zeba
                            a friend a mentor and a guide to me your amazing and accurate diagonosis  and treatment helped me to overcome day to day struggle  of mood swings , overcoming physical
                            ailments and enlightening me with positive approach to life you are a true life saver.</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>shreya</h6>
                        </div>


                    </div>

                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>Dr Zeba Quadiri online consultation popped up as a blessing to me on instagarm , i am a patient of severe acne breakouts and oily skin , I have been on several medications for quite
                            long but nothing helped . Zebdermm's medicine and skin care products worked tremendously not only it cleared my acne but also balanced oil on my face.
                            All this happened from the comfort of my home. I consulted online and whole therpapy was delivered at my doorstep .</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Naaz</h6>
                        </div>


                    </div>

                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>Homeoeopathic medicines works like magic on my damaged skin , I was suffering with burning redness and itching on my face everytime l am exposed to sunlight and heat . Taking
                            medicines from Zebdermm Wellness reduced redness of face and itching and buring has completely gone . just in 4 days Thanks to Dr. Zeba and homeopathy . now I can Freely step out .</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Zainab bi</h6>
                        </div>


                    </div>
                </div>

                <div className='jkl'>
                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>
                            My pigmentation has reduced drastically within the time period of 7-8 month . I thank Khatoon Beauty clinic
                            and esp Dr. Zeba that their treatment and products have shown such a great effect on my skin thankyou .</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Zehra Batool </h6>
                        </div>


                    </div>

                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>  my skin has lightened up a lot skintone has evened out and sun its no longer
                            a trouble I can step out in the sun without being worried for sun tan and sensitivity.
                            Would like to thank zebdermmwllness and Fatima </p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Maqsuma </h6>
                        </div>


                    </div>

                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>
                            I really want to thankyou mam cause my dark spots has reduced a lots and my skin is also better than before. The sunscreen you recommend me is amazing and suits my skin . Thankyou again mam</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Shenaz - </h6>
                        </div>


                    </div>
                </div>

                <div className='jkl'>
                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>I am thankful to homeopathy and zebdermmwellness for treating eczema of my son. which he was suffering from a year. He is totally fine now
                            thanks a lot and all the best wishes to Dr. Zeba</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Deepti</h6>
                        </div>


                    </div>

                    <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}> I applied some wrong creams thinking it will give me quick results which damaged my skin . Thankfully I consulted Dr. Zeba and now my skin issues got cured.
                            Thanks to Dr. Zeba and ZebdermmWellness</p>
                        {/* <button style={{ border: "none" }}>Read More</button> */}
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Driti </h6>
                        </div>


                    </div>

                    {/* <div className='jkl1' style={{ backgroundColor: 'white' }}>
                        <p style={{ margin: "1rem" }}>My ACL ligament got torn during long jump.I wasn't able to run or jump. I Consulted with  Dr Parwez sir. He advised mri in which my ACL ligament was torn  Arthroscopic surgery done by Dr Parwez sir, he takes great care of his patients  we are fully satisfied with his surgery and treatment. I recommend his name for any patients needing  orthopaedic surgery.Best Sports Injury Specialist in Jabalpur.</p>
                       
                        <div style={{ display: 'flex', width: "100%", marginLeft: "1rem" }}>
                            <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" />


                            <h6 style={{ margin: "1rem", textAlign: "right" }}>Rashmi Kewat</h6>
                        </div>


                    </div> */}
                </div>

            </div>



            {/* <section
                className="testimonial-main"
                style={{ textAlign: "center" }}
            >
                <div>
                    <p>What our patient say</p>
                    <h2>OUR TESTIMONIALS</h2>
                    <img src="./images/heading-art-01.svg" />
                </div>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    className="carousel-main-1"
                >

                    <div className="carousel-inner-1-main">
                        <h6>
                            <em>
                                I came to Dr. Zeba Three month back with lots of acne , scars, pimples on my face and neck but Dr. Zeba gave me photofacial and she did a magic that I went back with a new clear face . Again after three months I am coming from Delhi to take her session
                                and would love to further visit her for my sessions. Thanks Dr. Zeba "
                            </em>
                        </h6>
                        <p>✱ Results may vary person to person.</p>
                        <h4>Asha</h4>

                    </div>
                    <div className="carousel-inner-1-main">
                        <h6>
                            <em>
                                Hi Zeba mam today one of my colleagues complimented me that my skin is glowing n also dark spots are going. I got this compliment because of you
                                I don't know you are a magician or what but your treatment has done a miracle to my skin you made my lifeless skin so glowing thanks a lot mam being a doctor
                                I had tried almost every medicine for it but you did magic just in 3 sessions of photo facials.

                            </em>
                        </h6>
                        <p>✱ Results may vary person to person.</p>
                        <h4>Poonam</h4>

                    </div>
                    <div className="carousel-inner-1-main">
                        <h6>
                            <em>

                                Glad to thank Dr. Zeba mam that their homeopathic medicine  and skin product has give me an outstanding result on me I am using these products and medicine since 8 months . I got rid of black
                                patches, pigmentation and dark circles on my face. I definitely recommend to use these products and consult Dr. Zeba for homoeopathy.
                            </em>
                        </h6>
                        <p>✱ Results may vary person to person.</p>
                        <h4> Amina Begum</h4>

                    </div>

                    <div className="carousel-inner-1-main">
                        <h6>
                            <em> I was very disturbed cause of my red cheeks , burning ,whenever I was exposed to sunlight, change of temperature, cold weather. I took homeopathic
                                medicines from Dr. Zeba and to my surprise it started affecting me from day one , now i can go out freely. I am very thankful to homeopathy.
                            </em>
                        </h6>
                        <p>✱ Results may vary person to person.</p>
                        <h4> Khairon </h4>

                    </div>

                    <div className="carousel-inner-1-main">
                        <h6>
                            <em>
                                Thankyou Dr. Zeba Mam and homeopathy for treating me for alopecia .
                                As a 11 year old kid i have lost all my confidence cause of this disease. Thankyou for helping me live with great confidence and also for your  motivating words.
                            </em>
                        </h6>
                        <p>✱ Results may vary person to person.</p>
                        <h4> Ridhima </h4>

                    </div>

                    <div className="carousel-inner-1-main">
                        <h6>
                            <em>
                                Thankyou Dr. Zeba Quadiri and homeopathy for helping me fixing my hormonal disorder and also in my weight loss I was facing this issue of hormonal imbalance.
                                which eas a major cause of my massive weight gaince since 8-10years. consulted so many gynaecologists but all in vain I lost all hope.
                                It was all possible only because of you Thankyou so much for helping me get wht I dreamt of.

                            </em>
                        </h6>
                        <p>✱ Results may vary person to person.</p>
                        <h4>Parul </h4>

                    </div>


                    <div className="carousel-inner-1-main">
                        <h6>
                            <em>
                                This testimonial is long overdue. I met Dr Zeba in the year 2018 when I was suffering with multiple issues such as hair loss , pcos , hormonal imbalance,  mood swings.
                                facial hair and what not . It was fruastating and irritating because dealing with such issues was pushing me towards the brink of depression , but you are a life  saver Dr Zeba
                                a friend a mentor and a guide to me your amazing and accurate diagonosis  and treatment helped me to overcome day to day struggle  of mood swings , overcoming physical
                                ailments and enlightening me with positive approach to life you are a true life saver.
                            </em>
                        </h6>
                        <p>✱ Results may vary person to person.</p>
                        <h4> shreya</h4>

                    </div>


                    <div className="carousel-inner-1-main">
                        <h6>
                            <em>
                                Dr Zeba Quadiri online consultation popped up as a blessing to me on instagarm , i am a patient of severe acne breakouts and oily skin , I have been on several medications for quite
                                long but nothing helped . Zebdermm's medicine and skin care products worked tremendously not only it cleared my acne but also balanced oil on my face.
                                All this happened from the comfort of my home. I consulted online and whole therpapy was delivered at my doorstep .
                            </em>
                        </h6>
                        <p>✱ Results may vary person to person.</p>
                        <h4>Naaz </h4>

                    </div>


                    <div className="carousel-inner-1-main">
                        <h6>
                            <em>
                                Homeoeopathic medicines works like magic on my damaged skin , I was suffering with burning redness and itching on my face everytime l am exposed to sunlight and heat . Taking
                                medicines from Zebdermm Wellness reduced redness of face and itching and buring has completely gone . just in 4 days Thanks to Dr. Zeba and homeopathy . now I can Freely step out .
                            </em>
                        </h6>
                        <p>✱ Results may vary person to person.</p>
                        <h4> Zainab Bi</h4>

                    </div>



                </Carousel>
            </section> */}
            <Footer />
        </>
    )
}

export default Testimonial