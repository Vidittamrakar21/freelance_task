import Navbar from "../nav/nav"
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {deleteBlog} from '../../redux/blogslice'
import {deleteallBlog} from '../../redux/allblogslice'
import { useNavigate } from "react-router-dom";

export default function Blog (){

    const blogs = useSelector(state => state.blog.blogs); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteblog = (x) =>{
        dispatch(deleteBlog(x))
        dispatch(deleteallBlog(x))
    }

    const navigate_editor = (x) =>{
        navigate(`/edit/${x}`)
    }

    return(
        <div className="min-h-[800px] w-[100%] flex items-center justify-start flex-col select-none ">
            <Navbar/>
           

            <div className="h-[800px] w-[1080px]  bg-[#191a1b36] backdrop-blur-md mt-[50px] rounded-[30px] overflow-hidden overflow-y-scroll no-scrollbar  flex items-start justify-start flex-wrap">


                {blogs.length>0?blogs.map((item, index)=>(
                    <div key={item.id} className="h-[380px] w-[330px] bg-[#5A5859] flex items-center justify-center flex-col rounded-[30px] ml-5 mt-5">
                    <img className="h-[160px] w-[300px] rounded-xl" src={item.url} alt="" />
                    <h2 className="text-[white] ml-4 mt-2">{item.title}</h2>
                    <p className="text-[#c7c7c7] p-2" dangerouslySetInnerHTML={{__html: (item.bdata).slice(0,80)}}></p>
                    <div className="bg-[#484848] h-[60px] w-[300px] flex items-center justify-start   rounded-lg">
                    <img className="h-[40px] w-[40px] ml-2 rounded-lg" src={item.user_img} alt="" />
                    <h2 className="text-[white] ml-4">{item.user}</h2>
                    <h5 className="ml-4 text-[white]"  onClick={()=>{navigate_editor(item.id)}}>Edit</h5>
                    <h5 className="ml-3 text-[#e45959]" onClick={()=>{deleteblog(item.id)}}>Delete</h5>
                    </div>
                 </div>
                )):<h1 className="text-[white] relative top-[50px] left-[50px]">No Blogs Yet!</h1>}
               


            </div>
        </div>
    )
}