import { ArrowDown } from "iconsax-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function CircleSpinner(){
    return(
        <>
        <HashLink smooth to="#specializations" className="xui-pos-relative">
            <div className="arrow-down">
                <ArrowDown size="22" color="#000760"/>
            </div>
            <svg className="portfolio-circle xui-bdr-rad-circle begorah-border-grey xui-p-half" viewBox="0 0 100 100" width="120" height="120">
            <defs>
                <path id="circle"
                d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"/>
            </defs>
            <text>
                <textPath style={{"fill": "#000"}} className="xui-opacity-6 xui-font-w-normal" href="#circle">
                View More &nbsp; &nbsp; &nbsp; View More
                </textPath>
            </text>
            </svg>
        </HashLink>
        </>
    );
}