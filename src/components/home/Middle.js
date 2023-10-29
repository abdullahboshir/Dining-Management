import React, { useEffect, useState } from 'react';
import { fetchGlobalDatas } from '../../utils/commonApi';

const Middle = () => {
    const [data, setData] = useState([]);
    const [coinData, setCoinData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(3);


    useEffect(() => {
        (async () => {

            const postDatas = await fetchGlobalDatas(null, 'posts', 'GET');
     
            if (currentPage >= 1 && postsPerPage > 2) {
                setData(postDatas?.data)
            }
            else {
                const lastPostIndex = currentPage * postsPerPage;
                const saveData = [...coinData]
                const currentPosts = saveData.slice(0, lastPostIndex);
                setData(currentPosts?.data);
            }
        })();
    }, [coinData, currentPage]);


    const handleSroll = () => {
        let bottom = window.innerHeight + document.documentElement.scrollTop + 3 >= document.documentElement.scrollHeight;
        if (bottom) {
            setCurrentPage((prev) => prev + 1);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleSroll)
    }, []);


    console.log('data is here', data)

    return (
        <section className='pt-2 flex items-center justify-center bg-gray-300'>
            <div className='gap-2 mt-16'>
            {
                data?.map((datas, index) => (<div key={index} className='w-96 h-auto bg-gray-100 my-5 rounded-lg p-5'>
                    <p>{datas.textArea}</p>

                    <div className={`grid gap-2 mt-2 mb-5 ${datas?.img.length === 4? 'grid-cols-2 grid-rows-2' : datas?.img.length === 3? 'grid-cols-2 grid-rows-2' : datas?.img.length === 2? 'grid-cols-1 grid-rows-1' : 'grid-cols-1'}`}>
                        {
                            datas?.img?.map((images, index) => (
                                images?.path &&
                          
                                   <img key={index} className={`w-full h-full object-cover ${
                                    datas?.img.length === 3 && index === 2 ? 'col-span-2 row-span-1' : 
                                    datas?.img.length === 2 && index === 1 ? 'col-span-2 row-span-1' : 
                                    ''}`} src={`http://localhost:5000/${images?.path}`} />
                            ))
                        }
                    </div>
                </div>))
            }
            </div>
        </section>
    );
};

export default Middle;