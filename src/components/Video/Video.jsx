import './Video.scss';

import { Link } from 'react-router-dom';

// This component is to create each video item
function Video({ videoData }) {
    let { id, image, title, channel } = videoData;
    return (
        <li key={id}>
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
