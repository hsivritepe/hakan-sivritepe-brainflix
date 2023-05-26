import './VideoPlayer.scss';
import posterImage from '../../assets/images/Upload-video-preview.jpg';

// This component is to create and display the video player on the video details pages
function VideoPlayer(props) {
    return (
        <section className="video-player">
            <video
                className="video-player__player"
                controls
                poster={props.activeVideoData[0].imageURL}
                src={
                    props.activeVideoData[0].videoURL +
                    '?api_key=fghfghf'
                }
            ></video>
        </section>
    );
}

export default VideoPlayer;
