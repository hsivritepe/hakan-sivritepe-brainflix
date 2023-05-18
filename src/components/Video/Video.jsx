import './Video.scss';

function Video(props) {
    return (
        <li className="video-list__item">
            <img
                src={props.videoImage}
                className="video-list__image"
                alt=""
            />
            <div className="video-list__text-content">
                <p className="video-list__item-title">
                    Become A Travel Pro In One Easy Lesson
                </p>
                <p className="video-list__item-owner">Todd Welch</p>
            </div>
        </li>
    );
}

export default Video;
