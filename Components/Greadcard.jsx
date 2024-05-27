import React from 'react'

const Greadcard = () => {
    const img1 = "./images/meditation.jpg"
    const img2 = "./images/happines.jpg"
    const img3 = "./images/dedication.jpg"
    const img4 = "./images/discipline.jpg"
    const img5 = "./images/hardwork.jpg"
    const img6 = "./images/meditation.jpg"
    const img7 = "./images/meditation2.jpg"
    const img8 = "./images/meditation2.jpg"
    return (
        <>
        <div className="product-1">
           
           <h1 style={{color:'#005392',marginLeft:'40%',marginTop:30}}>Life at Alayza</h1>
           <img style={{marginLeft:'42%'}} src="./images/heading-art-01.svg" />
         </div>
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
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>meditation</p></div>
                        <img src={img1} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                    <div className='g_card1'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>happiness</p></div>
                        <img src={img2} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                </div>
                <div className='gbody_card'>
                    <div className='g_cart2'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>dedication</p></div>
                        <img src={img3} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                    <div className='g_card1'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>discipline</p></div>
                        <img src={img4} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                    <div className='g_card1'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>hardwork</p></div>
                        <img src={img5} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                </div>
                <div className='gbody_card'>
                    <div className='g_card1'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>meditation</p></div>
                        <img src={img6} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                    <div className='g_cart2'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>meditation2</p></div>
                        <img src={img7} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                    <div className='g_card1'>
                        <div style={{ width: '100%', height: '100%', position: 'absolute', }} className='clol'><p>meditation2</p></div>
                        <img src={img8} alt="" style={{ width: "100%", height: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Greadcard
