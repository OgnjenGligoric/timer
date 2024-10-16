import React from "react";
import './ColorShiftAnimation.css'
export default function ColorShiftAnimation(){
    return (
        <svg id="color-shift-svg">
            <defs>
                <linearGradient id="color-shift" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#67cb88">
                        <animate
                            attributeName="stop-color"
                            values="#67cb88;#cb6767;#67cb88"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </stop>
                    <stop offset="100%" stopColor="#cb6767">
                        <animate
                            attributeName="stop-color"
                            values="#cb6767;#67cb88;#cb6767"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    );
};
