import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Firebase from '../assets/firebase.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Abacus from '../assets/abacus.png'
import SQL from '../assets/sql.png'
import Wordpress from '../assets/wordpress.png'
import Python from '../assets/python.png'


const Skills = () => {
    return (
        <div name='skills' className='text-gray-300 w-full h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00df9a]'>Skills</p>
                    <p className='py-4'>Das sind Technologien / Software mit denen ich arbeite</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#001400] hover:scale-110 duration-500'>
                        <img src={HTML} alt="HTML icon" className='w-20 mx-auto'/>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#001400] hover:scale-110 duration-500'>
                        <img src={CSS} alt="CSS icon" className='w-20 mx-auto'/>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#001400] hover:scale-110 duration-500'>
                        <img src={Tailwind} alt="Tailwind icon" className='w-20 mx-auto'/>
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#001400] hover:scale-110 duration-500'>
                        <img src={JavaScript} alt="JavaScript icon" className='w-20 mx-auto'/>
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#001400] hover:scale-110 duration-500'>
                        <img src={ReactImg} alt="React icon" className='w-20 mx-auto'/>
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#001400] hover:scale-110 duration-500'>
                        <img src={Python} alt="Python icon" className='w-20 mx-auto'/>
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#001400] hover:scale-110 duration-500'>
                        <img src={Firebase} alt="Firebase icon" className='w-20 mx-auto'/>
                        <p className='my-4'>Firebase</p>
                    </div>
                    <div className='shadow-md shadow-[#001400] hover:scale-110 duration-500'>
                        <img src={Github} alt="Github icon" className='w-20 mx-auto'/>
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#001400] hover:scale-110 duration-500'>
                        <img src={SQL} alt="SQL icon" className='w-20 mx-auto'/>
                        <p className='my-4'>SQL</p>
                    </div>
                    <div className='shadow-md shadow-[#001400] hover:scale-110 duration-500'>
                        <img src={Wordpress} alt="Wordpress icon" className='w-20 mx-auto'/>
                        <p className='my-4'>Wordpress</p>
                    </div>
                    <div className='shadow-md shadow-[#001400] hover:scale-110 duration-500'>
                        <img src={Abacus} alt="Abacus icon" className='w-20 mx-auto'/>
                        <p className='my-4'>Abacus</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;