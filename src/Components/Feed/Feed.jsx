// import React, { useEffect, useState } from 'react';
// import './Feed.css';
// import { Link } from 'react-router-dom';
// import { API_KEY, value_converter } from '../../data';
// import moment from 'moment';

// export const Feed = ({ category, query }) => {
//     const [data, setData] = useState([]);

//     const fetchVideoList = async () => {
//         try {
//             const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
//             const response = await fetch(videoListUrl);
//             const result = await response.json();
//             setData(result.items || []);
//         } catch (error) {
//             console.error('Failed to fetch video list:', error);
//         }
//     };

//     const fetchSearchResults = async () => {
//         try {
//             const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`;
//             const response = await fetch(searchUrl);
//             const result = await response.json();
//             setData(result.items || []);
//         } catch (error) {
//             console.error('Failed to fetch search results:', error);
//         }
//     };

//     useEffect(() => {
//         if (query) {
//             fetchSearchResults();
//         } else {
//             fetchVideoList();
//         }
//     }, [category, query]);

//     return (
//         <div className="feed">
//             {data.map((item, index) => {
//                 const videoId = item.id.videoId || item.id;
//                 const viewCount = item.statistics ? item.statistics.viewCount : 'N/A';

//                 return (
//                     <Link key={index} to={`/video/${category}/${videoId}`} className='card'>
//                         <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
//                         <h2>{item.snippet.title}</h2>
//                         <h3>{item.snippet.channelTitle}</h3>
//                         <p>
//                             {value_converter(viewCount)} views &bull;{' '}
//                             {moment(item.snippet.publishedAt).fromNow()}
//                         </p>
//                     </Link>
//                 );
//             })}
//         </div>
//     );
// };



import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

export const Feed = ({ category, query }) => {
    const [data, setData] = useState([]);

    const fetchVideoList = async () => {
        try {
            const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
            const response = await fetch(videoListUrl);
            const result = await response.json();
            setData(result.items || []);
        } catch (error) {
            console.error('Failed to fetch video list:', error);
        }
    };

    const fetchSearchResults = async () => {
        try {
            const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`;
            const response = await fetch(searchUrl);
            const result = await response.json();
            setData(result.items || []);
        } catch (error) {
            console.error('Failed to fetch search results:', error);
        }
    };

    useEffect(() => {
        if (query) {
            fetchSearchResults();
        } else {
            fetchVideoList();
        }
    }, [category, query]);

    return (
        <div className="feed">
            {data.map((item, index) => {
                const videoId = item.id.videoId || item.id;
                const viewCount = item.statistics ? item.statistics.viewCount : 'N/A';

                return (
                    <Link key={index} to={`/video/${videoId}`} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>
                            {value_converter(viewCount)} views &bull;{' '}
                            {moment(item.snippet.publishedAt).fromNow()}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
};
