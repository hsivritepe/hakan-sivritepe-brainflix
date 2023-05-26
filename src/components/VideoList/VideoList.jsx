import './VideoList.scss';
import Video from '../Video/Video';

function VideoList(props) {
    return (
        <section className="video-list">
            <div className="video-list__title">NEXT VIDEOS</div>
            <ul className="video-list__container">
                {props.videoData
                    .filter(
                        (video) => video.id !== props.activeVideoID
                    )
                    .map((video) => (
                        <Video key={video.id} videoData={video} />
                    ))}
            </ul>
        </section>
    );
}

export default VideoList;
