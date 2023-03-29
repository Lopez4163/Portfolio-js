import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: "Sept 2014-2022",
        title: "Marine (Mobile Facility Technician)",
        duration: "5 Years",
        details: 
        "Pimping hoes and tricks isnt easy work, as a Pimp i had to backhand many woman and rough up tricks."
    
    },
    {
        year: "Oct 2019 - Present",
        title: "Converse Sale Associate",
        duration: "3 Years - Present",
        details: 
        "Pimping hoes and tricks isnt easy work, as a Pimp i had to backhand many woman and rough up tricks."
    
    },

];

const Work = () => {
    return(
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className=" text-4xl font-bold text-center text-[#001b5e]">Work History</h1>
            {data.map((item, idx) => (
                <WorkItem 
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;
