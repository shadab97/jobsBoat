import React from 'react'
import company1 from '../../Images/company-1.jpg'
import Card from '../../components/Card/Card'
import Hero from '../../components/Hero/Hero'




function HomePage() {
    return (

        <React.Fragment>
            <Hero />
            <div className="Main" style={{ marginTop: "-5rem" }}>
                <div className="container pt-5">
                    <div className="pt-5 heading-sm bold mb-2">Why Us</div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <Card heading="Get more visibility" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere fugit dolore cumque quia voluptas harum. Molestiae laudantium beatae nesciunt." />
                        </div>
                        <div className="col-md-4">
                            <Card heading="Verify their abilities" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere fugit dolore cumque quia voluptas harum. Molestiae laudantium beatae nesciunt." />

                        </div>
                        <div className="col-md-4">
                            <Card heading="Organize your candidates" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere fugit dolore cumque quia voluptas harum. Molestiae laudantium beatae nesciunt." />

                        </div>
                    </div>

                    <div className="pt-5 heading-sm bold mb-2">Companies who trust us</div>
                    <div className="d-flex flex-wrap justify-content-center gap-5 mt-3">
                        <div>
                            <img src={company1} width="200px" height="100px" alt="" />
                        </div>
                        <div>
                            <img src={company1} width="200px" height="100px" alt="" />
                        </div>
                        <div>
                            <img src={company1} width="200px" height="100px" alt="" />
                        </div>
                        <div>
                            <img src={company1} width="200px" height="100px" alt="" />
                        </div>
                        <div>
                            <img src={company1} width="200px" height="100px" alt="" />
                        </div>
                        <div>
                            <img src={company1} width="200px" height="100px" alt="" />
                        </div>
                        <div>
                            <img src={company1} width="200px" height="100px" alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>

    )
}

export default HomePage
