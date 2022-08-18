 import { Margin } from "@mui/icons-material";
import { border, borderRadius, fontWeight } from "@mui/system";
import { Link } from "react-router-dom";
 import image from './aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg'
 const Home = () => {
    return (
      <div style={{ border: "none",
      borderRadius: "20px",
       trasparent: "true",
      backgroundColor: "whitesmoke",
       backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      height: "800px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      opacity:'0.8',
      width:'1340px'}} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
           
            <div  className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 style={{fontSize:'50px',fontFamily:'cursive',backgroundColor:'whitesmoke',borderRadius:'20px' ,fontWeight:'bolder',color:'Black' ,border:'5px solid white'}} className="text-bold max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
               
                Best Music Collection 
              </h2>
              
            </div>
            <div>
              <Link
              style={{fontSize:'50px' ,color:'white',marginTop:'30%'}}
                to="/MusicPlayer"
                className="inline-flex btn btn-dark items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Lets Play
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }; 
  export default Home