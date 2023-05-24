import '../../App.scss';
import './UploadPage.scss';
import uploadVideoImage from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg';

function UploadPage(props) {
    return (
        <>
            {props.header}
            <section className="upload-page">
                <form action="" className="upload-page__form">
                    <h1 className="upload-page__title">
                        Upload Video
                    </h1>
                    <div className="upload-page__middle-content">
                        <div className="upload-page__leftside">
                            <p className="upload-page__subtitle">
                                VIDEO THUMBNAIL
                            </p>
                            <img
                                src={uploadVideoImage}
                                className="upload-page__thumbnail"
                                alt=""
                            />
                        </div>
                        <div className="upload-page__rightside">
                            <p className="upload-page__subtitle">
                                TITLE YOUR VIDEO
                            </p>
                            <input
                                className="input-base"
                                type="text"
                                placeholder="Add a title to your video"
                            />
                            <p className="upload-page__subtitle">
                                ADD A VIDEO DESCRIPTION
                            </p>
                            <textarea
                                className="input-base upload-page__description"
                                type="text"
                                placeholder="Add a description to your video"
                            />
                        </div>
                    </div>
                    <div className="upload-page__button-container">
                        <a
                            href=""
                            type="submit"
                            className="button upload-page__button"
                        >
                            <img
                                src={publishIcon}
                                alt=""
                                className="button__button-image"
                            />
                            <span>PUBLISH</span>
                            <div className="button__button-spacer"></div>
                        </a>
                        <a
                            href=""
                            type="submit"
                            className="button button-as-text upload-page__button"
                        >
                            <span>CANCEL</span>
                        </a>
                    </div>
                </form>
            </section>
        </>
    );
}

export default UploadPage;
