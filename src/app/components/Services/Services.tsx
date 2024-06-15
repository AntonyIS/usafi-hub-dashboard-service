import React from 'react';
import Button from '../ui/Buttom';


const Services: React.FC = () => {
    const services = [
        {
            name: "House Cleaning",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos cupiditate odio tempora saepe consectetur pariatur minima optio dolore natus! Obcaecati voluptatem laboriosam sequi quod sapiente sit doloribus, esse pariatur!"
        },
        {
            name: "Cloths Cleaning",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos cupiditate odio tempora saepe consectetur pariatur minima optio dolore natus! Obcaecati voluptatem laboriosam sequi quod sapiente sit doloribus, esse pariatur!"
        },
        {
            name: "Garage Cleaning",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos cupiditate odio tempora saepe consectetur pariatur minima optio dolore natus! Obcaecati voluptatem laboriosam sequi quod sapiente sit doloribus, esse pariatur!"
        }
    ]
    return (
        <section className='bg-white p-3'>
            <div className="container mt-3">
                <div className='text-center m-3'>
                    <h3>Our services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos cupiditate odio tempora saepe consectetur pariatur minima optio dolore natus! Obcaecati voluptatem laboriosam sequi quod sapiente sit doloribus, esse pariatur!</p>
                </div>
                <div className='row'>
                    {services.map((service, index)=>(
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="card BorderLess shadow p-3 mb-5 bg-body-tertiary rounded">
                                <div className="card-body" key={index}>
                                    <h3>{service.name}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> 
                <div className="row m-3">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center">
                        <Button name={"Explore more.."} />
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
                </div>
            </div>
        </section>
    );
};

export default Services;
