import '../../App.scss';
import './Upload.scss';
import uploadIcon from '../../assets/icons/upload.svg';
import profileImage from '../../assets/images/Mohan-muruge.jpg';

import { useNavigate } from 'react-router-dom';

// This component is used to create a upload form inside the header
function Upload() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/upload');
    };

    return (
        <section className="upload-form">
            <form
                action=""
                method="post"
                id="uploadVideoForm"
                className="upload-form__container"
            >
                <input
                    type="text"
                    name="searchField"
                    placeholder="Search"
                    className="input-base upload-form__search-field"
                />
                <img
                    src={profileImage}
                    className="upload-form__profile-image"
                    alt=""
                />
                <a
                    href=""
                    type="submit"
                    className="button upload-form__submit-button"
                    onClick={handleSubmit}
                >
                    <img
                        src={uploadIcon}
                        alt=""
                        className="button__button-image"
                    />
                    <span className="upload-form__button-text">
                        UPLOAD
                    </span>
                    <div className="button__button-spacer"></div>
                </a>
            </form>
        </section>
    );
}

export default Upload;
