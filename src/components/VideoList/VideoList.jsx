import './VideoList.scss';
import Video from '../Video/Video';
import videoImage from '../../assets/images/Mohan-muruge.jpg';

function VideoList(props) {
    console.log(props.videoData);
    return (
        <section className="video-list">
            <div className="video-list__title">NEXT VIDEOS</div>
            <ul className="video-list__container">
                <Video videoImage={videoImage} />
                <Video videoImage={videoImage} />
                <Video videoImage={videoImage} />
            </ul>
        </section>
    );
}

export default VideoList;
