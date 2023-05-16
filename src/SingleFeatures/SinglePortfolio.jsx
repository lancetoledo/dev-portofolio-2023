import React from 'react';
import { FiPlus } from "react-icons/fi";
export default function SinglePortfolio(props) {
    const { portfolioImg, portfolioLink, title } = props;

    console.log(portfolioLink, "YOO", portfolioImg)
    return (
        <div className="grid">
            <div className="col px-sm-2 mb-3">
                <div className="portfolio-wrapper">
                    <div className="portfolio-thumb">
                        <a href={portfolioImg}><img src={portfolioImg} alt={title} /></a>
                    </div>
                    <div className="overlay">
                        <a href={portfolioLink} data-attribute="SRL">
                            <img className="d-none" src={portfolioImg} alt={title} />
                            <i><FiPlus /></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
