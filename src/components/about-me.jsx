import { useState } from 'react'
import './home-banner.css'
import ExampleDoc from './../../public/assets/Alina_Salam_Resume.pdf'
export function AboutMe() {

    return (
        <div id="about-me" className="bg-purple-500 pb-10">
            <svg id="visual" viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 157L200 143L400 154L600 139L800 184L1000 181L1200 145L1200 0L1000 0L800 0L600 0L400 0L200 0L0 0Z" fill="#646cff"></path><path d="M0 128L200 89L400 98L600 121L800 105L1000 87L1200 119L1200 0L1000 0L800 0L600 0L400 0L200 0L0 0Z" fill="#9a72ff"></path><path d="M0 48L200 56L400 75L600 49L800 68L1000 50L1200 56L1200 0L1000 0L800 0L600 0L400 0L200 0L0 0Z" fill="#c27aff"></path></svg>
             <div className="relative isolate px-6 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#2d5a27ab] to-[#f0f4cd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6 not-md:hidden">
                        <div className='flex justify-center'>
                            <img
                                className=""
                                src='./assets/about-me-bg.png'
                                width={400}
                                alt=''>
                            </img>
                        </div>
                    </div>
                    <div className="col-span-6 not-md:col-span-12">
                        <div className="">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white not-md:text-3xl">
                                Who is <span className='text-indigo-700 font-normal italic'>Alina Salam?</span>
                            </h1>
                            <p className="mt-8 font-medium text-pretty text-lg text-black mb-8 not-md:mt-4 not-md:mb-4 not-md:text-sm">
                                I am a proficient frontend developer with over four years of extensive professional experience and a Master's degree in Computer Science from Middlesex University, London. My expertise lies in designing and implementing responsive and user-friendly applications utilizing modern frameworks, including React, Angular, React Native, Shopify, and WordPress. Additionally, my academic curriculum included a significant graduate project focused on Artificial Intelligence, during which I applied Python programming to develop advanced machine learning models and intelligent systems.
                            </p>
                            <div class="grid grid-cols-3 gap-4">
                                <div class="not-md:text-sm">
                                    <h1 className='text-3xl text-indigo-700 font-semibold not-md:text-xl'>30+</h1>
                                    Projects Completed
                                </div>
                                <div class="not-md:text-sm">
                                    <h1 className='text-3xl text-indigo-700 font-semibold not-md:text-xl'>4+</h1>
                                    Years of Experience
                                </div>
                                {/* <div class="...">05</div> */}
                            </div>
                            <div className="mt-8">
                                <a
                                    href={ExampleDoc}
                                    download="Alina_Salam_Resume" 
                                    target='_blank'
                                    className="rounded-full bg-indigo-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutMe;