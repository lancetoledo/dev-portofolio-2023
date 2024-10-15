//src/SingleFeatures/SingleCountdown.jsx

import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

export default function SingleCountdown(props) {
    const { title, start, end, duration, extraClass, formattedValue, children } = props;
    
    return (
        <div className={extraClass ? `col-md-3 col-sm-6 ${extraClass}` : "col-md-3 col-sm-6"}>
            <div className="counter-item text-center">
                {children} {/* This will render the icon */}
                <VisibilitySensor>
                    {({ isVisible }) =>
                        <h4 className="pc"> 
                            {isVisible ? (
                                <span className="count">
                                    {formattedValue || <CountUp start={start} end={end} duration={duration} formattingFn={(value) => value.toLocaleString()} />}
                                </span>
                            ) : "0"}
                        </h4>
                    }
                </VisibilitySensor>
                <p>{title}</p>
            </div>
        </div>
    )
}