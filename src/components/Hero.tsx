'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const Hero = () => {

    const slider = useRef(null);
    const textOne = useRef(null);
    const textTwo = useRef(null);
    let xPercent = 0;
    const direction = -1;

    useEffect(() => {
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        gsap.set(textOne.current, { xPercent: xPercent })
        gsap.set(textTwo.current, { xPercent: xPercent })
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    }

    return (
        <div className="overflow-hidden pl-10 fixed left-0 top-0 z-[-1] h-[75vh] md:h-[65vh] flex items-center">
            <h1 ref={slider} className="font-custom text-[25vw] md:text-[40vw] whitespace-nowrap flex">
                <span ref={textOne}>Creative Director<span className='px-20 md:px-10'>✦</span></span>
                <span ref={textTwo}>Creative Director<span className='px-20 md:px-10'>✦</span></span>
            </h1>
        </div>
    )
}

export default Hero