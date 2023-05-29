import '../../App.scss';
import './UploadPage.scss';
import uploadVideoImage from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function UploadPage(props) {
    const navigate = useNavigate();

    // Handle form submission by interrupting and alerting the status
    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert('Form submission is successful!');
        navigate('/');
    };

    const [videoTitle, setVideoTitle] = useState();
    const [videoDescription, setVideoDescription] = useState();

    const handleChangeVideoTitle = (event) => {
        setVideoTitle(event.target.value);
    };
    const handleChangeVideoDescription = (event) => {
        setVideoDescription(event.target.value);
    };

    // Validate title and description fields for input
    const isFormValid = () => {
        if (!videoTitle || !videoDescription) {
            return false;
        }
        return true;
    };

    return (
        <>
            {props.header}
            <section className="upload-page">
                <form
                    action="/"
                    className="upload-page__form"
                    onSubmit={handleFormSubmit}
                >
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
                                name="videoTitle"
                                onChange={handleChangeVideoTitle}
                            />
                            <p className="upload-page__subtitle">
                                ADD A VIDEO DESCRIPTION
                            </p>
                            <textarea
                                className="input-base upload-page__description"
                                type="text"
                                placeholder="Add a description to your video"
                                name="videoDescription"
                                onChange={
                                    handleChangeVideoDescription
                                }
                            />
                        </div>
                    </div>
                    <div className="upload-page__button-container">
                        <button
                            type="submit"
                            className="button upload-page__button"
                            disabled={!isFormValid()}
                        >
                            <img
                                src={publishIcon}
                                alt=""
                                className="button__button-image"
                            />
                            <span>PUBLISH</span>
                            <div className="button__button-spacer"></div>
                        </button>
                        <button className="button button-as-text upload-page__button">
                            CANCEL
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default UploadPage;
