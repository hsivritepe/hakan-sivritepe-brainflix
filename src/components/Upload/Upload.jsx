import '../../App.scss';
import './Upload.scss';
import uploadIcon from '../../assets/icons/upload.svg';
import profileImage from '../../assets/images/Mohan-muruge.jpg';

function Upload() {
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
