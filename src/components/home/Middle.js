import React, { useEffect, useState } from 'react';

const Middle = () => {
    const [data, setData] = useState([]);
    const [coinData, setCoinData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(3);

    
    useEffect(() => {
        (async () => {
            const response = [
                {name: 'abul'},
                {name: 'kalam'},
                {name: 'Hsehm'},
                {name: 'Rofiqul'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
                {name: 'Arif'},
            ];

            if (currentPage > 1 && postsPerPage > 2) { 
                console.log('dataaaaaaaaaaaaa', response)
                setData(response)
            }
            else {
                const lastPostIndex = currentPage * postsPerPage;
                const saveData = [...coinData]
                const currentPosts = saveData.slice(0, lastPostIndex);
                setData(currentPosts);
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
        <section className='pt-16'>
            <h1>I am hereeeeeeeeeeeeeee</h1>
        {
        data.map((datas) => <div> 
            <p>{datas.name}</p>
        </div>)
        }
        </section>
    );
};

export default Middle;