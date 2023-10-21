import React from 'react';
import { fetchGlobalDatas } from '../../utils/commonApi';

const PostModal = ({ setPostModal }) => {

    const postHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        console.log('formDataaaaaaa', e.currentTarget)
        
        // Validate if any input field is empty
        for (let [key, value] of formData.entries()) {
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
            <button onClick={() => setPostModal(false)} className="btn btn-circle absolute z-40 right-7 top-7">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className='relative flex justify-center items-center min-h-screen min-w-screen'>
                <div className='absolute z-30 w-screen h-screen backdrop-blur-[1px] bg-black/50'></div>

                <div className='bg-white absolute w-[700px] justify-center items-center h-96 z-30'>
                    <form onSubmit={postHandler}>
                        <section>
                                <p className='mb-1'>Choose an Image</p>
                                <input name='img' type="file" placeholder="Type here" className="input input-bordered input-success w-44 h-28 max-w-xs mb-4" />
                        </section>

                        <section className='flex flex-col items-center mt-5'>
                            <label className="label">
                                <div className="text">Add a Notice</div>
                            </label>

                            <textarea type='text' name='postTextArea' placeholder="Add Notice" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                        </section>
                        <button className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostModal;