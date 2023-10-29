import React, { useState } from 'react';
import { fetchGlobalDatas } from '../../utils/commonApi';
import { useAuth } from '../../context/ContextProvider';

const PostModal = ({ setPostModalSwitch }) => {
    const {currentUser} = useAuth()
    const [postImages, setPostImages] = useState(null);

console.log('idddddddddd', currentUser?.data?._id)

    const postHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append('authorId', currentUser?.data?._id)
        
        // Validate if any input field is empty
        for (let [key, value] of formData) {
            if (!value) {
                console.log(`Input ${key} is empty.`);
                return;
            }
        }
        
        console.log('form data got before submit', formData);


        fetch('http://localhost:5000/post', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });        
    };

       
     

    return (
        <div className='absolute right-0 top-0 h-screen w-screen'>
            <button onClick={() => setPostModalSwitch(false)} className="btn btn-circle absolute z-40 right-7 top-7">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className='relative flex justify-center items-center min-h-screen min-w-screen'>
                <div className='absolute z-30 w-screen h-screen backdrop-blur-[1px] bg-black/50'></div>

                <div className='bg-white absolute w-[1000px] justify-center items-center h-[500px] z-30 overflow-auto'>
                    <form onSubmit={postHandler}>

                    <section className='flex flex-col items-center mt-5'>
                            <label className="label">
                                <div className="text">Add a Notice</div>
                            </label>

                            <textarea type='text' name='textArea' placeholder="Add Notice" className="textarea textarea-bordered textarea-lg w-full max-w-lg h-32" ></textarea>
                        </section>


                        <section className='mt-5 mb-10 flex justify-center items-center'>
                         {
                            postImages? <div>
                                 <div className='flex flex-wrap flex-row justify-center items-center border-[1.5px] rounded-lg p-1'>
                              {
                                postImages.map((file, index) => 
                                    <img key={index} src={URL.createObjectURL(file)} alt="Student" className="w-52 p-1 rounded cursor-pointer p-2"></img>)
                              }
                            </div>
                            {postImages &&  <label htmlFor='file-input' className='cursor-pointer bg-blue-500 hover:bg-blue-700 flex justify-center items-center text-sm text-white font-bold py-2 px-4 rounded mt-1'>Change image?</label>}
                          
                            </div> : <label htmlFor='file-input' className="cursor-pointer bg-blue-500 hover:bg-blue-700 flex justify-center items-center text-lg text-white font-bold py-2 px-4 rounded w-36 h-44 block">Choose a Photo</label>
                         }

                            <input onChange={(e) => setPostImages([...e.target.files])} multiple id='file-input' name='images' type="file" placeholder="Type here" className='hidden'/>
                  
                        </section>

                        <button className='btn mb-5'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostModal;