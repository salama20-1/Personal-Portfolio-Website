import { React } from 'react'
import './skills.css'
export function Tools() {

    return (
        <div id="skills" className="bg-indigo-700">
            <div className="tools-sec text-center pt-24">
                        <h1 className="text-4xl font-light italic tracking-tight text-balance text-white sm:text4xl">
                            Exploring the Technical Skills
                        </h1>
                        <h2 className="pt-1 text-4xl font-semibold tracking-tight text-balance text-purple-400 sm:text4xl">Behind My Designs</h2>
                        <div className='mt-10 items-center gap-x-6'>
                            <div className='flex justify-center xl:gap-x-16 not-md:gap-x-2'>
                                <div className='tools-img-sec'>
                                    <img
                                    className='tools-img'
                                        // src="./assets/r.png"
                                        src="/Portfolio_website/assets/r.png"
                                        width={100} height={100}
                                        alt=""
                                    ></img>
                                    <p>R Programming</p>
                                    </div>
                                    <div className='tools-img-sec'>
                                    <img
                                    className='tools-img'
                                        // src="./assets/cad-file.png"
                                        src="/Personal-Portfolio-Website/assets/cad-file.png"
                                        width={100} height={100}
                                        alt=""
                                    ></img>
                                    <p>Autocad</p>
                                    </div>
                                    <div className='tools-img-sec'>
                                    <img
                                    className='tools-img'
                                        // src="./assets/java.png"
                                        src="/Personal-Portfolio-Website/assets/java.png"
                                        width={100} height={100}
                                        alt=""
                                    ></img>
                                    <p>Java</p>
                                    </div>
                                    <div className='tools-img-sec'>
                                    <img
                                    className='tools-img'
                                        // src="./assets/python.png"
                                        src="/Personal-Portfolio-Website/assets/python.png"
                                        width={100} height={100}
                                        alt=""
                                    ></img>
                                    <p>Python</p>
                                    </div>
                                    <div className='tools-img-sec'>
                                    <img
                                    className='tools-img'
                                        // src="./assets/c-.png"
                                        src="/Personal-Portfolio-Website/assets/c-.png"
                                        width={100} height={100}
                                        alt=""
                                    ></img>
                                    <p>C++</p>
                                    </div>
                            </div>
                        </div>
                        <svg id="visual" viewBox="0 0 1200 240" width="" height="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 75L240 106L480 54L720 68L960 82L1200 108L1200 241L960 241L720 241L480 241L240 241L0 241Z" fill="#c27aff"></path><path d="M0 105L240 125L480 116L720 145L960 108L1200 144L1200 241L960 241L720 241L480 241L240 241L0 241Z" fill="#a874ff"></path><path d="M0 177L240 127L480 131L720 137L960 172L1200 172L1200 241L960 241L720 241L480 241L240 241L0 241Z" fill="#8a70ff"></path><path d="M0 196L240 201L480 207L720 193L960 206L1200 170L1200 241L960 241L720 241L480 241L240 241L0 241Z" fill="#646cff"></path></svg>
                        </div>
                    </div>
                    
    )
}

export default Tools;