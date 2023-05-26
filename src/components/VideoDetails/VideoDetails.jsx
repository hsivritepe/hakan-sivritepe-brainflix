import './VideoDetails.scss';
import imageViews from '../../assets/icons/views.svg';
import imageLikes from '../../assets/icons/likes.svg';

// This component is used to create and display the video details on the page
function VideoDetails(props) {
    let {
        channel,
        comments,
        description,
        likes,
        timestamp,
        title,
        video,
        views,
    } = props.activeVideoDetails;
    const date = new Date(timestamp);
    return (
        <section className="video-details">
            <div className="video-details__title">{title}</div>
            <div className="video-details__info-container">
                <div className="video-details__left-column">
                    <p className="video-details__owner">
                        By {channel}
                    </p>
                    <p className="video-details__date">
                        {date.toLocaleDateString('en-US')}
                    </p>
                </div>
                <div className="video-details__right-column">
                    <p className="video-details__views">
                        <img src={imageViews} alt="" /> {views}
                    </p>
                    <p className="video-details__likes">
                        <img src={imageLikes} alt="" /> {likes}
                    </p>
                </div>
            </div>
            <p className="video-details__content">{description}</p>
        </section>
    );
}

export default VideoDetails;
