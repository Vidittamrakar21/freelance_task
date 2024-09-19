import Navbar from "../nav/nav"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Home (){

    const blogs = useSelector(state => state.allblog.blogs); 
    const navigate = useNavigate();



    useEffect(()=>{
        AOS.init({duration: 2000})
        
    },[])

    function navigate_blogpage (x) {
    
        navigate(`/blogpage/${x}`)
    }

    return(
        <div className="min-h-[800px] w-[100%] flex items-center justify-start flex-col select-none ">
            <Navbar/>
            <div className="h-[500px] w-[1300px]  flex items-center justify-between">
                <div className="">
                <img className="h-[500px] w-[900px] absolute top-[100px] rounded-[30px]" src="https://img.freepik.com/premium-photo/startup-company-office-space-with-employees-working-their-desks_605022-10098.jpg" alt="" />
                <div className="z-10 backdrop-blur-md  flex items-start justify-start h-[150px] w-[900px]  relative top-[180px]  rounded-b-[30px] ">
                    <h1 className="text-[white] text-[25px] p-4">Unlocking Business <br></br> Efficiency with SAAS Solution</h1>
                </div>
                </div>
                <div className="h-[500px] w-[370px] backdrop-blur-md bg-[#2b2c2e36] rounded-[30px] flex items-center justify-start flex-col">
                    <h1 className="text-[white] mt-2">Other Featured Posts</h1>
                    <div data-aos="zoom-in" className="flex items-center justify-start h-[60px] w-[350px]  mt-5">
                        <img className="h-[50px] w-[50px] rounded-lg" src="https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-2141952348.jpg?resize=1280,853" alt="" />
                        <h2 className="text-[white] ml-4">Apple, Google wallets now support California driver’s licenses</h2>
                    </div>
                    <div data-aos="zoom-in" className="flex items-center justify-start h-[60px] w-[350px]  mt-5">
                        <img className="h-[50px] w-[50px] rounded-lg" src="https://techcrunch.com/wp-content/uploads/2019/05/GettyImages-646878354.jpg" alt="" />
                        <h2 className="text-[white] ml-4">Snap’s new AI feature lets you create Snapchat Lenses by simply describing them
                        </h2>
                    </div>
                    <div data-aos="zoom-in" className="flex items-center justify-start h-[60px] w-[350px]  mt-5">
                        <img className="h-[50px] w-[50px] rounded-lg" src="https://techcrunch.com/wp-content/uploads/2019/07/GettyImages-1062870692.jpg?resize=1280,854" alt="" />
                        <h2 className="text-[white] ml-4">Amazon releases a video generator — but only for ads</h2>
                    </div>
                    <div data-aos="zoom-in" className="flex items-center justify-start h-[60px] w-[350px]  mt-5">
                        <img className="h-[50px] w-[50px] rounded-lg" src="https://techcrunch.com/wp-content/uploads/2023/11/microsoft-copilot-bing.jpg?resize=1280,736" alt="" />
                        <h2 className="text-[white] ml-4">Microsoft Copilot: Everything you need to know about Microsoft’s AI</h2>
                    </div>
                    <div data-aos="zoom-in" className="flex items-center justify-start h-[60px] w-[350px]  mt-5">
                        <img className="h-[50px] w-[50px] rounded-lg" src=" https://img.freepik.com/premium-photo/startup-company-office-space-with-employees-working-their-desks_605022-10098.jpg" alt="" />
                        <h2 className="text-[white] ml-4">Unlocking Business <br></br> Efficiency with SAAS Solution</h2>
                    </div>
                </div>
            </div>

            <div className="h-[600px] w-[1300px]  bg-[#191a1b36] backdrop-blur-md mt-[50px] rounded-[30px] overflow-hidden overflow-y-scroll no-scrollbar  flex items-start justify-start flex-wrap">


               {blogs.map((item , index)=>(
                 <div key={item.id} onClick={()=>{navigate_blogpage(item.id)}} data-aos="fade-up" className="h-[380px] w-[330px] bg-[#5A5859] flex items-center justify-center flex-col rounded-[30px] ml-5 mt-5">
                 <img className="h-[160px] w-[300px] rounded-xl" src={item.url} alt="" />
                 <h2 className="text-[white] ml-4 mt-2">{item.title}</h2>
                 <p className="text-[#c7c7c7] p-2" dangerouslySetInnerHTML={{__html: (item.bdata).slice(0,80)}} ></p>
                 <div className="bg-[#484848] h-[60px] w-[300px] flex items-center justify-start   rounded-lg">
                 <img className="h-[40px] w-[40px] ml-2 rounded-lg" src={item.user_img} alt="" />
                 <h2 className="text-[white] ml-4">{item.user}</h2>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="ml-[50px]" viewBox="0 0 16 16">
                 <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                 </svg>
                 </div>
              </div>
               ))}
                


            </div>
        </div>
    )
}