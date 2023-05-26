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
    const [selectedVideoId, setSelectedVideoId] = useState(
        '84e96018-4022-434e-80bf-000ce4cd12b8'
    );

    const params = useParams();

    const getVideoDetailsWithAPI = (selectedVideoId) => {
        axios
            .get(
                `https://project-2-api.herokuapp.com/videos/${selectedVideoId}?api_key=53115177-82fd-4748-a35b-155d0b38c944`
            )
            .then((response) => {
                setVideoDetailsData(response.data);
            })
            .catch((error) => console.log(error));
    };

    const createNewCommentWithAPI = (formData, selectedVideoId) => {
        const newCommentData = {
            comment: formData.formComment,
            name: 'Hakan Sivritepe',
        };
        axios
            .post(
                `https://project-2-api.herokuapp.com/videos/${selectedVideoId}/comments`,
                newCommentData,
                {
                    params: {
                        api_key:
                            '53115177-82fd-4748-a35b-155d0b38c944',
                    },
                }
            )
            .then((response) => {
                getVideoDetailsWithAPI(selectedVideoId);
            })
            .catch((error) => console.log(error));
    };

    const deleteCommentWithAPI = (selectedVideoId, commentId) => {
        axios
            .delete(
                `https://project-2-api.herokuapp.com/videos/${selectedVideoId}/comments/${commentId}`,
                {
                    params: {
                        api_key:
                            '53115177-82fd-4748-a35b-155d0b38c944',
                    },
                }
            )
            .then((response) => {
                getVideoDetailsWithAPI(selectedVideoId);
            })
            .catch((error) => console.log(error));
    };

    // Gather the videos for the video list for once
    useEffect(() => {
        axios
            .get(
                'https://project-2-api.herokuapp.com/videos?api_key=53115177-82fd-4748-a35b-155d0b38c944'
            )
            .then((response) => {
                setVideoData(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    // Track the changes on selected video ID to get the video details via API request
    useEffect(() => {
        getVideoDetailsWithAPI(selectedVideoId);
    }, [selectedVideoId]);

    // Track the params for routing between the video pages
    useEffect(() => {
        if (!params.id) {
            setSelectedVideoId(
                '84e96018-4022-434e-80bf-000ce4cd12b8'
            );
        } else {
            setSelectedVideoId(params.id);
        }
    }, [params.id]);

    console.log('selectedID : ' + selectedVideoId);

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
