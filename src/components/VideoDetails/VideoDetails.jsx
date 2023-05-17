import './VideoDetails.scss';
import imageViews from '../../assets/icons/views.svg';
import imageLikes from '../../assets/icons/likes.svg';

function VideoDetails() {
    return (
        <section className="video-details">
            <div className="video-details__title">
                BMX Rampage: 2021 Highlights
            </div>
            <div className="video-details__info-container">
                <div className="video-details__left-column">
                    <p className="video-details__owner">
                        By Red Crow
                    </p>
                    <p className="video-details__date">07/11/2021</p>
                </div>
                <div className="video-details__right-column">
                    <p className="video-details__views">
                        <img src={imageViews} alt="" /> 1,001,023
                    </p>
                    <p className="video-details__likes">
                        <img src={imageLikes} alt="" /> 110,985
                    </p>
                </div>
            </div>
            <p className="video-details__content">
                On a gusty day in Southern Utah, a group of 25 daring
                mountain bikers blew the doors off what is possible on
                two wheels, unleashing some of the biggest moments the
                sport has ever seen. While mother nature only allowed
                for one full run before the conditions made it
                impossible to ride, that was all that was needed for
                event veteran Kyle Strait, who won the event for the
                second time -- eight years after his first Red Cow
                Rampage title
            </p>
        </section>
    );
}

export default VideoDetails;
