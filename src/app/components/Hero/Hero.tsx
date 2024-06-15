import React from 'react';
import Button from '../ui/Buttom';

const Hero: React.FC = () => {
    const HeroPoints = [
        "Highly trained, full-time employees (not sub-contractors)",
        "We bring all our own supplies & equipment to each job",
        "Transparent pricing, with no hidden fees"
    ]
    const buttonBook = "Book your home clean"
    const buttonLogin = "Login"
    return (
        <section className="bg-light sectionL1">
            <div className="container">
                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                        <div className="card bg-light BorderLess">
                            <div className="card-body">
                                <h1>Usafihub Cleaning Service</h1>
                                <ul className='no-bullets'>
                                    { HeroPoints.map((point, key)=>(
                                        <li className='no-bullets li' key={key}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle m-1" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                            </svg>
                                            <span className='m-1'>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className='mt-5'>
                                    <span className='m-1'>
                                        <Button name={buttonBook}/>
                                    </span>
                                    <span className='m-1 shadow-lg bg-body-tertiary rounded'>
                                        <Button name={buttonLogin}/>
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                        <div className="card bg-light BorderLess">
                            <div className="card-body">
                                <img
                                    src='/cleaner-hero-2.png'
                                    className="hero-image" 
                                    alt="Cleaner"
                                />
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default Hero;
