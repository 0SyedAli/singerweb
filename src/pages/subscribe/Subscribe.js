import React from 'react'
import './subscribe.css'

const Subscribe = () => {
    return (
        <div>
            <section className="newsletter-area subs-newsletter-area pos-relative event-bg pt-120 pb-120" data-background="assets/img/bg/letter.jpg" style={{ backgroundImage: 'url("assets/img/bg/letter.jpg")' }}>
                <div className="letter-shape letter-s1 bounce-animate"><img src="assets/img/icon/news1.png" alt='/' /></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-title mrSubs">
                                <div className="pr-line sn-line">
                                    <div className="line-pr"></div>
                                    <p>We Are Here For You</p>
                                </div>
                                <h1>Subscribe Now</h1>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="subscribe-form subscribe-form-2">
                                <form action="#">
                                    <input type="text" placeholder="Enter your email address" />
                                    <button className="btn-sn" type="submit">Subscribe <img src="assets/img/icon/arrow.png" alt='/' /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Subscribe