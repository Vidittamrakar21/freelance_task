import './write.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState,useContext,useRef,useEffect } from 'react';
import Navbar from '../nav/nav';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addBlog} from '../../redux/blogslice'
import {addallBlog} from '../../redux/allblogslice'
function Write () {

    const [name, setname] = useState("");
    const [id, setid] = useState("");
    const [allow, setallow] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();
  

    const [bvalue, setvalue] = useState("");

    const title = useRef();
    const url = useRef();
    const btype = useRef();
    const uname = useRef();
    const uimg = useRef();

  


    const data  =  {
        id: Date.now(),
        title: title?.current?.value,
        url: url?.current?.value,
        btype: btype?.current?.value,
        bdata: bvalue,
        user: uname?.current?.value,
        user_img: uimg?.current?.value
    }

    const handlesubmit = () =>{

        dispatch(addBlog(data));
        dispatch(addallBlog(data));
        title.current.value = ""
        url.current.value = ""
        btype.current.value = ""
        setvalue("");
        navigate('/blog')
    }


return(
    <div id="wt">
         <Navbar/>
        <h1 id='guga'>Write A Blog !</h1>
        <input type="text" placeholder='&nbsp;Blog Title' className='link' ref={title}/>
        <input type="text" placeholder='&nbsp; Put the link of an image' className='link' ref={url}/>
        <input type="text" placeholder='&nbsp; Blog Type - lifestyle /tech /food / entrepreneurship' className='link' ref={btype}/>
        <div id='editor'>
           <ReactQuill value={bvalue} onChange={setvalue}></ReactQuill>
        </div>
        <input type="text" placeholder='&nbsp; User Name' className='link' ref={uname}/>
        <input type="text" placeholder='&nbsp; User Image URL' className='link' ref={uimg}/>

        <button id='publish' onClick={handlesubmit} >Post</button>


    </div>
)

}

export default Write;