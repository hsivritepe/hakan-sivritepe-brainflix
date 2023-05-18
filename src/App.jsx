import './App.scss';
import videoDetailsJSON from './data/video-details.json';
import videosJSON from './data/videos.json';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentList from './components/CommentList/CommentList';
import VideoList from './components/VideoList/VideoList';
import { useState } from 'react';

function App() {
    const [videoDetailsData, setVideoDetailsData] =
        useState(videoDetailsJSON);
    const [videoData, setVideoData] = useState(videosJSON);

    // const activeVideoComments = useState(
    //     videoDetailsData[0].comments
    // );
    // console.log(videoDetailsData[0].comments);
    return (
        <div className="App">
            <Header />
            <VideoPlayer />
            <VideoDetails />
            <CommentList
                activeVideoComments={videoDetailsJSON[0].comments}
            />
            <VideoList videoData={videoData} />
        </div>
    );
}

export default App;
