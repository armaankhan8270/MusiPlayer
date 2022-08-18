import React from 'react'
// import dss from './pexels-moose-photos-1037992.jpg
const SignUp = () => {
  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <div style={{
          border: "none",
          borderRadius: "20px",
        //   trasparent: "true",
          backgroundColor: "whitesmoke",
        //   backgroundImage: `url(${dss})`,
          backgroundRepeat: "no-repeat",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width:'800px'
        }}  className="mx-auto card w-96 bg-white text-primary-content">
 
      <section style={{
          border: "none",
          borderRadius: "20px",
        //   trasparent: "true",
          backgroundColor: "pink",
        //   backgroundImage: `url(${dss})`,
          backgroundRepeat: "no-repeat",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width:'800px'
        }} className="max-w-4xl p-6 mx-auto bg-white border-rounded border-rounded  dark:bg-gray-800">
        <h2 style={{fontSize:'50px',fontFamily:'cursive'}}  >Login</h2>
        
            <div style={{
          border: "none",
          borderRadius: "20px",
        //    trasparent: "true",
          backgroundColor: "whitesmoke",
        //    backgroundImage: `url(${dss})`,
          backgroundRepeat: "no-repeat",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width:'90%'
        }} className=" shadow-lg p-3 mb-5 bg-body rounded grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label  style={{fontSize:'30px',fontFamily:'cursive'}} className="fs-1" htmlFor="username">Username: </label>
                    <input style={{backgroundColor:'white'}} id="username" type="text" className="  shadow-lg p-3 mb-5 bg-body rounded lock w-full px-4 py-2 mt-2 text-gray-700  border-rounded border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>

               

                <div>
                    <label style={{fontSize:'30px',fontFamily:'cursive'}} className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                    <input style={{backgroundColor:'red'}} id="password" type="password" className=" shadow-lg p-3 mb-5 bg-body rounded block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-rounded border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>

               
                <button style={{fontSize:'20px'}} className=" col-3 btn btn-info">Login</button>
            </div>

            <div className="flex justify-end mt-6">
               
            
            </div>
            
    </section>
</div>


     </div>
    );
}

export default SignUp