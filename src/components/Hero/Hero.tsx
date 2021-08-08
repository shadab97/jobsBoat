import React from 'react'
import Button from '../Button/Button'

function Hero() {
    return (
        <div className="d-flex justify-content-around flex-wrap mt-4">
            <div className="">
                <div className="py-2 text-white d-flex flex-column flex-wrap justify-content-between float-right">
                    <h1>Welcome to </h1>
                    <h1>My<span className="brand-color">Jobs</span></h1>
                    <Button text="Get Started" />
                </div>
            </div>
            <div className="">
                <div className="hero-image float-right">
                    <img src="https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_960_720.jpg" width="450px" height="200px" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
