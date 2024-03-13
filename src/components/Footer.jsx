import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='w-full text-gray-300 h-[80px]'>
            <div className="flex justify-center items-center">
                made with <AiFillHeart className="mx-2"/>code on <a
                    className="pl-1 text-[#00df9a]"
                    href="https://github.com/doodelidodo/dominic-meyer" target='_blank' rel='noreferrer'>
                    Github
                </a>
            </div>
        </div>
    );
};

export default Footer;