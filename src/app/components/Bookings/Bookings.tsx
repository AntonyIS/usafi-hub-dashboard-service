import React from 'react';
import Button from '../ui/Buttom';

const icons = {
    "1": (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="m-3 bi bi-bookmark-x-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293z"/>
        </svg>
    ),
    "2": (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="m-3 bi bi-calendar-check-fill" viewBox="0 0 16 16">
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
        </svg>
    ),
    "3": (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="m-3 bi bi-house-check-fill" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
            <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z"/>
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514"/>
        </svg>
    )
};

const services = [
    {
        name: "House Cleaning",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos cupiditate odio",
        step: "1"
    },
    {
        name: "Cloths Cleaning",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos cupiditate odio ",
        step: "2"
    },
    {
        name: "Garage Cleaning",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos cupiditate odio ",
        step: "3"
    }
]

interface ServiceCardProps {
    name: string;
    description: string;
    step: "1" | "2" | "3"; 
    index: number;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, step, index }) => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="card BorderLess shadow p-3 mb-5 bg-body-tertiary rounded text-center">
                <div className="card-body" key={index}>
                    {icons[step]}
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};


const Bookings: React.FC = () => {
    return (
        <section className='bg-light p-3'>
            <div className="container mt-3">
                <div className='text-center m-3'>
                    <h3>Book for services in 3 easy steps</h3>
                </div>
                <div className='row'>
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            name={service.name}
                            description={service.description}
                            step={service.step as "1" | "2" | "3"} 
                            index={index}
                        />
                    ))}
                </div> 
            </div>
        </section>
    );
};

export default Bookings;
