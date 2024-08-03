// import React, { useEffect, useState } from 'react';
// import './Recommended.css';

// import { API_KEY, value_converter } from '../../data';
// import { Link } from 'react-router-dom';




// export const Recommended = ({categoryId}) => {

//     const [apiData,setApiData] = useState([]);

//     const fetchData = async () =>{
//         const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
//         await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));

//     }

//     useEffect(()=>{
//         fetchData();
//     },[])

//   return (
//     <div className='recommended'>
//         {apiData.map((item,index)=>{
//             return (
//                 <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
//                 <img src={item.snippet.thumbnails.medium.url} alt="" />
//                 <div className="vid-info">
//                     <h4>{item.snippet.title}</h4>
//                     <p>{item.snippet.channelTitle}</p>
//                     <p>{value_converter(item.statistics.viewCount)}</p>
//                 </div>
    
//             </Link>

//             )

//         })}


//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';

export const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        if (!categoryId) return;

        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideo_url)
            .then(res => res.json())
            .then(data => setApiData(data.items));
    }

    useEffect(() => {
        fetchData();
    }, [categoryId]);

    return (
        <div className='recommended'>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.id}`} key={index} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
