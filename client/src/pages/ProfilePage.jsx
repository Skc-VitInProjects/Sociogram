import React , {useState}from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';

const ProfilePage = () => {

  const [selectedImg , setSelectedImg] = useState(null);
  const navigate = useNavigate();

  const [name , setName] = useState("Martin Johnson");       //dummy name given 
  const [bio , setBio] = useState("Hi Everyone, I am Using Sociogram");
 
  // function to handle the page after clicking on save button
  const handleSubmit = async (e)=> {
     e.preventDefault();
     navigate('/');            //takes to HomePage to Chat Window
  }

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>

        <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-orange-600 
          flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>

          {/* Form Details */}
          <form onSubmit = {handleSubmit}
             className='flex flex-col gap-5 p-10 flex-1'>
            <h3 className='text-lg '>Profile Details</h3>
            <label htmlFor='avatar' className='flex items-center gap-3 cursor-pointer'> 
                
               <input onChange = {(e) => setSelectedImg(e.target.files[0])} type = "file"  //user uploads image here
                 id = "avatar" accept='.png , .jpg , .jpeg' hidden />

               <img src ={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} alt="" 
                 className= {`w-12 h-12 ${selectedImg && 'rounded-full'}`} />
                  upload profile image
            </label>

            <input onChange={(e) => setName(e.target.value)} value={name}         //entering name here
              type="text" required placeholder ="Your Name" 
              className='p-2 border border-yellow-500 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-yellow-500' />

            <textarea onChange={(e) => setBio(e.target.value)} value = {bio}     //entering bio here
               placeholder='Write profile bio' required 
               className='p-2 border border-yellow-500 rounded-md 
                 focus:outline-none focus:ring-2 focus:ring-yellow-500' rows={4}>
            </textarea>
            
            {/* Finally , submitting and saving the profile details */}
            <button type="submit" className='bg-gradient-to-r from-yellow-400 to-orange-600 text-white p-2 rounded-full text-lg cursor-pointer'>
                 Save
            </button>
               
          </form> 
            
          {/* Logo on the right side */}
          <img className="max-w-40 aspect-square rounded-full mx-10 max-sm:mt-10" 
            src={assets.logo_icon} alt="" />
        </div>
    </div>
  );
}

export default ProfilePage;
