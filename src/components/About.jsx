import MePic from '../assets/me.jpeg'
const About = () => {
    return (
        <div name='about' className='w-full h-screen text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#00df9a]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. Ich bin Dominic Meyer.</p>
                    </div>
                    <div>
                        <p>Als erfahrener IT-Hase mit Fokus auf Programmierung und Expertise in Abacus Software, genieße
                            ich meine Freizeit beim Rennvelofahren und Schachspielen. Mit einem breiten Wissensspektrum und
                            einer Leidenschaft für Herausforderungen strebe ich stets nach persönlicher und beruflicher
                            Weiterentwicklung.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;