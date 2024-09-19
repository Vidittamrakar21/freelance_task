import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './components/home/home';
import Write from './components/write/write';
import Blog from './components/blog/blog';
import Blogpage from './components/blogpage/blogpage';
import Edit from './components/editblog/editblog';
import './App.css'
import { Provider } from 'react-redux';
import {store} from './redux/store'
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }, 
    {
      path: '/write',
      element: <Write/>
    }, 
    {
      path: '/blog',
      element: <Blog/>
    }, 
    {
      path: '/blogpage/:bid',
      element: <Blogpage/>
    }, 
    {
      path: '/edit/:bid',
      element: <Edit/>
    }, 
   
   
  ])

  return (
  


      <div className="h-[1300px]  absolute inset-0 -z-10 w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#b74af7_100%)] ">
        <Provider store={store}>
        <RouterProvider router={router}/>
     
         </Provider>
       
      </div>
    
  )
}

export default App;
