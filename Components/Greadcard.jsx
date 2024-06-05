import React from 'react'

const Greadcard = () => {
    const img1 = "./images/strongermuscles.png"
    const img2 = "./images/higher stamina.jpg"
    const img3 = "./images/respectnature.jpg"
    const img4 = "./images/joint relief.jpg"
    const img5 = "./images/weight loss.jpg"
    const img6 = "./images/stress free.jpg"
    const img7 = "./images/healthylifestyle.jpg"
    const img8 = "./images/Vitamin_B3_Deficiency.png"
    return (
        <>
        <section className="youtube-main">
        <div className="product-1">
           
           <h1 style={{color:'#005392',}}>Life at Alayza</h1>
           <img style={{}} src="./images/heading-art-01.svg" />
         </div>
         </section>
        <div className='GreadCard'>
            <div className='Gmain_card'>
                <div className='gbody_card'>
                    <div className='g_card1' style={{ padding: "10px" }}>
                        <h1><strong>Life at Alayza</strong></h1>
                        <div>
                            <p>  Our Emphasis is on innovative natural supplements, which help you to get healthy life.
                                We are committed to provide natural health supplements at aﬀordable prices.
                                Our mission is to help people for doing more with Joy, they feel better and they live longer.</p>
                        </div>
                    </div>
                    <div className='g_cart2' >
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>Stronger Muscles</p></div>
                        <img src={img1} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                    <div className='g_card1'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>Higher Stamina</p></div>
                        <img src={img2} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                </div>
                <div className='gbody_card'>
                    <div className='g_cart2'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>Respect Nature</p></div>
                        <img src={img3} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                    <div className='g_card1'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>Joint Relief</p></div>
                        <img src={img4} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                    <div className='g_card1'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>Weight Loss</p></div>
                        <img src={img5} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                </div>
                
                <div className='gbody_card'>
                    <div className='g_card1'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute',hover:'blue' }} className='clol'><p>Stress Free</p></div>
                        <img src={img6} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                    <div className='g_cart2'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>Healthy Lifestyle</p></div>
                        <img src={img7} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                    <div className='g_card1'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>Vitamin Deficiency</p></div>
                        <img src={img8} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Greadcard
