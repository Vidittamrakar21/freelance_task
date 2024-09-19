import './write.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState,useContext,useRef,useEffect } from 'react';
import Navbar from '../nav/nav';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {editBlog} from '../../redux/blogslice'
import {editallBlog} from '../../redux/allblogslice'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function Edit () {

    const [name, setname] = useState("");
    const [id, setid] = useState("");
    const [allow, setallow] = useState(false);
    const blogs = useSelector(state => state.allblog.blogs); 
    
    const dispatch = useDispatch();

    const {bid} = useParams();
    const navigate = useNavigate();
  

    const [bvalue, setvalue] = useState("");
    const [inp1, setinp1] = useState("");
    const [inp2, setinp2] = useState("");
    const [inp3, setinp3] = useState("");
    const [inp4, setinp4] = useState("");
    const [inp5, setinp5] = useState("");

    const title = useRef();
    const url = useRef();
    const btype = useRef();
    const uname = useRef();
    const uimg = useRef();

    function fetchdata (){
        const bbdata = blogs.find((item)=> item.id === Number(bid));
        setinp1(bbdata.title)
        setinp2(bbdata.url)
        setinp3(bbdata.btype)
        setinp4(bbdata.user)
        setinp5(bbdata.user_img)
        setvalue(bbdata.bdata)

        setid(bbdata.id);
    }

    useEffect(()=>{
        fetchdata();
    },[])


    const data  =  {
        id: id,
        titel: inp1,
        url: inp2,
        btype: inp3,
        bdata: bvalue,
        user: inp4,
        user_img: inp5
    }

    const handlesubmit = () =>{

        dispatch(editBlog(data));
        dispatch(editallBlog(data));
        title.current.value = ""
        url.current.value = ""
        btype.current.value = ""
        setvalue("");
        navigate('/blog')
    }


return(
    <div id="wt">
         <Navbar/>
        <h1 id='guga'>Edit Blog !</h1>
        <input value={inp1} type="text" placeholder='&nbsp;Blog Title' className='link' onChange={(e)=>{setinp1(e.target.value)}} ref={title}/>
        <input value={inp2} type="text" placeholder='&nbsp; Put the link of an image' onChange={(e)=>{setinp2(e.target.value)}} className='link' ref={url}/>
        <input value={inp3} type="text" placeholder='&nbsp; Blog Type - lifestyle /tech /food / entrepreneurship' className='link' onChange={(e)=>{setinp3(e.target.value)}} ref={btype}/>
        <div id='editor'>
           <ReactQuill value={bvalue} onChange={setvalue}></ReactQuill>
        </div>
        <input value={inp4} type="text" placeholder='&nbsp; User Name' className='link' onChange={(e)=>{setinp4(e.target.value)}} ref={uname}/>
        <input value={inp5} type="text" placeholder='&nbsp; User Image URL' className='link' onChange={(e)=>{setinp5(e.target.value)}} ref={uimg}/>

        <button id='publish' onClick={handlesubmit} >Edit</button>


    </div>
)

}

export default Edit;