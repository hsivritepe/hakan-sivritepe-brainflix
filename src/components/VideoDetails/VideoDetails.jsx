import './VideoDetails.scss';
import imageViews from '../../assets/icons/views.svg';
import imageLikes from '../../assets/icons/likes.svg';

import utils from '../../utils';

// This component is used to create and display the video details on the page
function VideoDetails(props) {
    const {
        id,
        channel,
        description,
        likes,
        timestamp,
        title,
        views,
    } = props.activeVideoDetails;

    const increaseLike = () => {
        props.increaseLikesOfVideo(id);
    };

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
                        <img src={imageViews} alt="views" />
                        {utils.formatNumber(views)}
                    </p>
                    <p className="video-details__likes">
                        <img src={imageLikes} alt="likes" />
                        {utils.formatNumber(likes)}
                        <button onClick={increaseLike}>+</button>
                    </p>
                </div>
            </div>
            <p className="video-details__content">{description}</p>
        </section>
    );
}

export default VideoDetails;
