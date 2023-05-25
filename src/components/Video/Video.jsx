import './Video.scss';

import { Link } from 'react-router-dom';

function Video(props) {
    let { id, image, title, channel } = props.videoData;
    return (
        <li
            //className="video-list__item"
            id={id}
            // onClick={() => props.changeVideo(id)}
        >
            <Link to={`/video/${id}`} className="video-list__item">
                <img
                    src={image}
                    className="video-list__image"
                    alt=""
                />
                <div className="video-list__text-content">
                    <p className="video-list__item-title">{title}</p>
                    <p className="video-list__item-owner">
                        {channel}
                    </p>
                </div>
            </Link>
        </li>
    );
}

export default Video;
