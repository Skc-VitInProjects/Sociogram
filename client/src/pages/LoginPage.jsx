import React , { useState } from 'react';
import assets from '../assets/assets';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {

  const [currState , setCurrState] = useState("Sign Up");     //current state is set to "Sign Up"
  const [fullName , setFullName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [bio , setBio] =useState("");
  const [isDataSubmitted , setIsDataSubmitted] = useState(false);    //by default , the data is unsubmitted , i.e. false

  const {login} = useContext(AuthContext);

  const onSubmitHandler = (event) => {                 //function to handle user submition of details
     event.preventDefault();

     if(currState === "Sign Up" && !isDataSubmitted){
       setIsDataSubmitted(true);
       return;
     }

     login(currState === "Sign Up" ? "signup" : "login" , {fullName , email ,password , bio})
  }

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center 
       justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl '>
         
         {/* --------------left---------logo is added--- */}
         <div>
            <img src={assets.logo_big} alt="" className='w-[min(30vw , 250px)] h-50'/>
            <h1 className='text-white px-10 text-2xl' >Sociogram</h1>
         </div>

         {/* -----------right----------form Details---- */}
         <form onSubmit = {onSubmitHandler}
           className='border-2 bg-[#212121] text-white border-orange-500 p-6 flex 
             flex-col gap-6 rounded-lg shadow-lg'>
              <h2 className='font-medium text-2xl flex justify-between items-center'>
                {/* CurrState is Sign Up */}
                  {currState}     
                   {isDataSubmitted && <img onClick={() => setIsDataSubmitted(false)} src={assets.arrow_icon} 
                      alt="" className='w-5 cursor-pointer' />
                   }
              </h2>
              
              {/* Full name  */}
              {currState === "Sign Up" && !isDataSubmitted && (                //data is unsubmitted
                    <input onChange={(e) => setFullName(e.target.value)} value= {fullName}
                       type="text" className='p-2 border border-yellow-500 rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-yellow-500' 
                       placeholder= "Full Name" required />   
                    
              )}
              
              {/* once , name is entered , other details can be entered */}
              {!isDataSubmitted && (                   //data is unsubmitted
                 <>
                  <input onChange={(e) => setEmail(e.target.value)}  value = {email}
                    type="email" placeholder='Email Address' required 
                    className='p-2 border border-yellow-500 rounded-md focus:outline-none focus:ring-2 
                      focus:ring-yellow-500'/>
                  
                  <input onChange={(e) => setPassword(e.target.value)}  value = {password}
                    type="password" placeholder='Password' required 
                    className='p-2 border border-yellow-500 rounded-md focus:outline-none focus:ring-2 
                      focus:ring-yellow-500'/>
                 </>
              )}
                
                {/* when data is submitted then , fill bio */}
              {
                currState === "Sign Up" && isDataSubmitted && (
                   <textarea  onChange={(e) => setBio(e.target.value)} value ={bio}
                     rows={4} 
                     className='p-2 border border-yellow-500 rounded-md focus:outline-none focus:ring-2 
                       focus:ring-yellow-500'
                     placeholder='Add something about you' required></textarea>
                )
              }

              {/* Submit details */}
              <button type="submit" className='py-3 bg-gradient-to-r from-yellow-400 to-orange-600
                  text-white rounded-md cursor-pointer'>
                    
                    {/* if state is Sign Up , then user will create account , else he will login */}
                    {currState === "Sign Up" ? "Create Account" : "Login Now"}         
              </button>

              <div className='flex items-center gap-2 text-sm text-gray-500'>
                 <input type="checkbox" name="" id="" />
                 <p>Agree to the terms of use & privacy policy.</p>
              </div>

              <div className='flex flex-col gap-2'>
                {currState === "Sign Up" ? (
                  <p className='text-sm text-gray-600'>Already have an account ?
                  <span onClick={() => {setCurrState("Login"); setIsDataSubmitted(false)}}           //changes the state from Sign Up to Login
                    className='font-medium text-yellow-500 cursor-pointer'>&nbsp;&nbsp;Login here</span></p>
                ) : (
                  <p className='text-sm text-gray-600'>Create an account 
                  <span onClick={() => setCurrState("Sign Up")}            
                    className='font-medium text-yellow-500 cursor-pointer'>&nbsp;&nbsp;Click here</span></p>
                )}
              </div>
         </form>
       
    </div>
  );
}

export default LoginPage;
