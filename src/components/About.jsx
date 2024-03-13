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
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 px-4 items-center'>
                    <div className='flex justify-center items-center mb-5 sm:mb-0'>
                        <img src={MePic} alt="Dominic Meyer" className='w-[150px] sm:w-[200px] items-center'/>
                    </div>
                    <div>
                        <p className='text-xl'>Als erfahrener IT-Hase mit Fokus auf Expertise in Abacus Software und Programmierung, geniesse
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