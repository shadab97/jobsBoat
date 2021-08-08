import React from 'react';
interface props {
    heading: string,
    details: string,
    shadow?: string,
    bgColor?: string
}
function Card({ heading, details, bgColor = "bg-white" }: props) {
    return (
        <div className={`${bgColor} box my-2 p-3 box-shadow`}>
            <p className="lead brand-color bold w-50">{heading}</p>
            <p className="text-color small">{details}</p>
        </div>
    )
}

export default Card
