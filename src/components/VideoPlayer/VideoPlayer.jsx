import './VideoPlayer.scss';
import sampleVideo1 from '../../assets/videos/sample-kids-video.mp4';

function VideoPlayer() {
    return (
        <section className="video-player">
            <video className="video-player__player" controls>
                <source src={sampleVideo1} type="video/mp4" />
            </video>
        </section>
    );
}

export default VideoPlayer;
