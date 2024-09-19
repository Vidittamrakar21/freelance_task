import '../../App.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar(){

    const navigate = useNavigate();
    
    const navigate_home = () =>{
        navigate('/')
    }

    const navigate_write = () =>{
        navigate('/write')
    }
    const navigate_blog = () =>{
        navigate('/blog')
    }

    return(
        <nav className="h-[50px] w-[100%] fixed top-0  backdrop-blur-md z-40 left-0  flex items-center justify-between select-none">
            <h1 onClick={navigate_home} className='st text-[white] text-[35px] ml-[90px]'>blog.it</h1>
            <div className='h-[45px] w-[500px]  flex items-center justify-center'>
                <ul className='text-[white] flex items-center justify-evenly h-[45px] w-[300px]'>
                    <li  onClick={navigate_home} className='hover:text-[#f85757]'>Homepage</li>
            
                    <li onClick={navigate_blog} className='hover:text-[#f85757]'>Blog</li>
                    <li className='hover:text-[#f85757]'>Login</li>
                </ul>
                <button onClick={navigate_write} className='h-[30px] w-[110px] bg-[#f85757] text-[white] rounded-md cursor-pointer' >Post Blog</button>
            </div>

        </nav>
    )
}