
// //   return (
// //     <>
// //       <h1>AppleYoutube</h1>

// //       {
// //         appleVideos?.map((singleVideo)=>{
// //             console.log(singleVideo);
// //             return <h1>{singleVideo.snippet.title}</h1>
// //         })
// //       }
// //     </>
// //   );
// // }

// // export default AppleYoutube

// // // // AIzaSyCnQMQpA8FWMtExVrmEX8k9P6co_OhtG9o;
// // // //  "id": "UCE_M8A5yxnLfW0KghEeajjw"




// // // {
// // //   "kind": "youtube#channelListResponse",
// // //   "etag": "mz69kTl4eTWQ_DNpITJReTTsCDY",
// // //   "pageInfo": {
// // //     "totalResults": 1,
// // //     "resultsPerPage": 5
// // //   },
// // //   "items": [
// // //     {
// // //       "kind": "youtube#channel",
// // //       "etag": "YBIB3kIgzFGk1Uu42kfTJsfeA4w",
// // //       "id": "UCE_M8A5yxnLfW0KghEeajjw"
// // //     }
// // //   ]
// // // }
// // // AIzaSyCfFluOMf9nJPhk0p7-A0C_RuIoShCyHeU-api key 


// // // GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCfFluOMf9nJPhk0p7-A0C_RuIoShCyHeUHTTP/1.1

// // // Authorization: Bearer [YOUR_ACCESS_TOKEN]
// // // Accept: application/json


// import React, { useEffect, useState } from 'react'

// const AppleYoutube = () => {

//   const [youtubeVideos, setYoutubeVideos] = useState([]);

//   useEffect(()=>{
//     async function getVideos (){
//       const response = await fetch(
//         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCfFluOMf9nJPhk0p7-A0C_RuIoShCyHeU`
//       );
//       // console.log(response)
//       const data = await response.json()
//       // console.log(data)
//       setYoutubeVideos(data.items)
//     }
//     getVideos();
//   }, [])

//   console.log(youtubeVideos)
//  return (
//    <section className="youtubeVideosWrapper">
//      <div className="allVideosWrapper">
//        <div className="container">
//          <div className="row justify-content-center text-center">
//            <div className="col-12">
//              <div className="title-wrapper">
//                <br />
//                <h1>Latest Videos</h1>
//                <br />
//              </div>
//            </div>

//            {youtubeVideos?.map((singleVideo, i) => {
//              return (
//                <div key={i} className="col-sm-12 col-md-6 col-lg-4">
//                  <div className="singleVideoWrapper">
//                    <div className="videoThumbnail">
//                      <a
//                        href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
//                        target="_blank"
//                        rel="noreferrer"
//                      >
//                        <img
//                          src={singleVideo.snippet.thumbnails.high.url}
//                          alt="thumbnails"
//                        />
//                      </a>
//                    </div>
//                    <div className="videoInfoWrapper">
//                      <div className="videoTitle">
//                        <a
//                          href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
//                          target="_blank"
//                          rel="noreferrer"
//                        >
//                          {singleVideo.snippet.title}
//                        </a>
//                      </div>
//                      <div className="videoDesc">
//                        {singleVideo.snippet.description}
//                      </div>
//                    </div>
//                  </div>
//                </div>
//              );
//            })}
//          </div>
//        </div>
//      </div>
//    </section>
//  );
// }

// export default AppleYoutube

import React, { useEffect, useState } from "react";
import "./Videos.css";

const AppleYoutube = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCfFluOMf9nJPhk0p7-A0C_RuIoShCyHeU`
      );
      const data = await response.json();
      setYoutubeVideos(data.items);
    }
    getVideos();
  }, []);

  return (
    <section className="youtubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
                <br />
                <h1>Latest Videos</h1>
                <br />
              </div>
            </div>

            {youtubeVideos?.map((singleVideo, i) => {
              const videoDate = new Date(
                singleVideo.snippet.publishedAt
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
              return (
                <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a
                        href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a
                          href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                      <div className="videoDate">{videoDate}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleYoutube;