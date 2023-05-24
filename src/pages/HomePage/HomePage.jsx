import './HomePage.scss';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';

import videoDetailsJSON from '../../data/video-details.json';
import videosJSON from '../../data/videos.json';

import { useState } from 'react';

function HomePage(props) {
    const [videoDetailsData, setVideoDetailsData] = useState(
        videoDetailsJSON[0]
    );
    const [videoData, setVideoData] = useState(videosJSON);

    const changeVideo = (newId) => {
        setVideoDetailsData(
            videoDetailsJSON.find(({ id }) => id === newId)
        );
    };
    return (
        <>
            {props.header}
            <VideoPlayer activeVideoURL={videoDetailsData.video} />
            <section className="bottom-part">
                <div className="bottom-part__left-side">
                    <VideoDetails
                        activeVideoDetails={videoDetailsData}
                    />
                    <CommentList
                        activeVideoComments={
                            videoDetailsData.comments
                        }
                    />
                </div>
                <div className="bottom-part__right-side">
                    <VideoList
                        videoData={videoData}
                        changeVideo={changeVideo}
                        activeVideoID={videoDetailsData.id}
                    />
                </div>
            </section>
        </>
    );
}

export default HomePage;