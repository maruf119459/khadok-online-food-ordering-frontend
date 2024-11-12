import React from 'react';
import FaceIcon from '@mui/icons-material/Face';
// profilePageImage.png
import profilePageImage from '../../assetes/profilePageImage.png'
const UserProfile = () => {
    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
            
           <div className='flex flex-col items-center justify-center'>
            <FaceIcon sx={{fontSize:"9rem"}} />
            <h1 className='pt-5 text-2xl font-semibold'>Name: </h1>
            <h1 className='py-2 text-xl font-semibold'>Email: </h1>
            <h1 className='py-2 text-xl font-semibold'>Address: </h1>
            </div> 
            <div className='h-full w-[50%]'>
                <img src={profilePageImage} alt='profileImage'></img>
            </div>
        </div>
    );
};

export default UserProfile;