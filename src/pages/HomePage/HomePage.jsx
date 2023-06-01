import './HomePage.scss';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function HomePage(props) {
    const [videoDetailsData, setVideoDetailsData] = useState([]);
    const [videoData, setVideoData] = useState([]);
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    const params = useParams();

    // Function to make a get call to the api to get the video details
    const getVideoDetailsWithAPI = (selectedVideoId) => {
        if (selectedVideoId) {
            axios
                .get(
                    `http://localhost:8080/videos/${selectedVideoId}`
                )
                .then((response) => {
                    setVideoDetailsData(response.data);
                })
                .catch((error) => console.log(error));
        }
    };

    // Function to make a post call to the api to create a new comment for a video
    const createNewCommentWithAPI = (formData, selectedVideoId) => {
        const newCommentData = {
            comment: formData.formComment,
            name: 'Hakan Sivritepe',
        };
        axios
            .post(
                `http://localhost:8080/videos/${selectedVideoId}/comments`,
                newCommentData
            )
            .then((response) => {
                getVideoDetailsWithAPI(selectedVideoId);
            })
            .catch((error) => console.log(error));
    };

    // Function to make a delete call to the api to delete a comment for a video
    const deleteCommentWithAPI = (selectedVideoId, commentId) => {
        axios
            .delete(
                `http://localhost:8080/videos/${selectedVideoId}/comments/${commentId}`
            )
            .then((response) => {
                getVideoDetailsWithAPI(selectedVideoId);
            })
            .catch((error) => console.log(error));
    };

    // Get all videos from the API
    const getAllVideosFromAPI = () => {
        axios
            .get('http://localhost:8080/videos')
            .then((response) => {
                setVideoData(response.data);
            })
            .catch((error) => console.log(error));
    };

    // Increase the likes of the videos
    const increaseLikesOfVideo = (selectedVideoId) => {
        axios
            .put(
                `http://localhost:8080/videos/${selectedVideoId}/likes`
            )
            .then((response) => {
                getVideoDetailsWithAPI(selectedVideoId);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Gather the videos for the video list for once
    useEffect(() => {
        getAllVideosFromAPI();
    }, []);

    // Track the changes on selected video ID to get the video details via API request
    useEffect(() => {
        getVideoDetailsWithAPI(selectedVideoId);
    }, [selectedVideoId]);

    // Track the params for routing between the video pages
    useEffect(() => {
        if (params.id) {
            setSelectedVideoId(params.id);
        } else if (videoData.length > 0) {
            setSelectedVideoId(videoData['0'].id);
        }
    }, [params.id, videoData]);

    return (
        <>
            {props.header}
            <VideoPlayer
                activeVideoData={[
                    {
                        videoURL: videoDetailsData.video,
                        imageURL: videoDetailsData.image,
                    },
                ]}
            />
            <section className="bottom-part">
                <div className="bottom-part__left-side">
                    <VideoDetails
                        activeVideoDetails={videoDetailsData}
                        increaseLikesOfVideo={increaseLikesOfVideo}
                    />
                    <CommentList
                        activeVideoComments={
                            videoDetailsData.comments
                        }
                        createNewCommentWithAPI={
                            createNewCommentWithAPI
                        }
                        deleteCommentWithAPI={deleteCommentWithAPI}
                        selectedVideoId={selectedVideoId}
                    />
                </div>
                <div className="bottom-part__right-side">
                    <VideoList
                        videoData={videoData}
                        activeVideoID={videoDetailsData.id}
                    />
                </div>
            </section>
        </>
    );
}

export default HomePage;
