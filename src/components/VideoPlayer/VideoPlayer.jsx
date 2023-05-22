import './VideoPlayer.scss';

function VideoPlayer(props) {
    return (
        <section className="video-player">
            <video className="video-player__player" controls>
                <source
                    src={props.activeVideoURL + '?api_key=fghfghf'}
                    type="video/mp4"
                />
            </video>
        </section>
    );
}

export default VideoPlayer;
