import './CommentList.scss';
import Comment from '../Comment/Comment';
import profileImage from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/icons/add_comment.svg';

function CommentList(props) {
    // console.log(props.activeVideoComments);
    // console.log(props.activeVideoData[0].comments);
    return (
        <section className="comments">
            <h2 className="comments__title-section-header">
                3 Comments
            </h2>
            <div className="new-comment">
                <img
                    src={profileImage}
                    alt="profile icons"
                    className="new-comment__profile-icon"
                />
                <form
                    action=""
                    className="new-comment__form-container"
                    id="new-comment-form"
                >
                    <label
                        htmlFor="formComment"
                        className="new-comment__form-label"
                    >
                        JOIN THE CONVERSATION
                    </label>
                    <textarea
                        name="formComment"
                        id="formComment"
                        cols="30"
                        rows="10"
                        className="new-comment__form-comment"
                        placeholder="Add a new comment"
                    ></textarea>
                    <a
                        href=""
                        type="submit"
                        className="submit"
                        className="button new-comment__form-button"
                    >
                        <img
                            src={commentIcon}
                            alt=""
                            className="upload-form__button-image"
                        />
                        <span className="upload-form__button-text">
                            UPLOAD
                        </span>
                    </a>
                </form>
            </div>
            <ul className="old-comments">
                {props.activeVideoComments.map((comment) => (
                    <Comment key={comment.id} commentData={comment} />
                ))}
            </ul>
        </section>
    );
}

export default CommentList;
