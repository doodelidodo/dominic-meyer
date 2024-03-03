import { ReactTyped } from "react-typed";
import {HiArrowNarrowRight} from "react-icons/hi";

const Hero = () => {
    return (
        <div name="home" className="text-white w-full h-screen">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#00df9a] font-bold p-2">Home of</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3">Dominic Meyer.</h1>
                <div className="flex items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">steht für</p>
                    <ReactTyped
                        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
                        strings={[
                            "Webdesign",
                            "Wordpress",
                            "React",
                            "Python",
                            "Abacus",
                            "Rennvelo",
                            "Schach"
                        ]}
                        typeSpeed={80}
                        backSpeed={90}
                        loop
                    >
                    </ReactTyped>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">.</p>
                </div>
                <div>
                    <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00df9a] hover:border-[#00df9a]">Let's go
                        <span>
                            <HiArrowNarrowRight className="ml-2 " />
                        </span>
                    </button>
                </div>

        </div>
</div>
)
    ;
}

export default Hero;
