import './Comment.scss';
import greyBackground from '../../assets/images/grey-background.jpg';
import commentIcon from '../../assets/icons/add_comment.svg';

function Comment(props) {
    const handleCommentDelete = () => {
        props.deleteCommentWithAPI(props.selectedVideoId, props.id);
    };
    console.log(props);
    let { name, comment, timestamp } = props.commentData;
    const date = new Date(timestamp);
    return (
        <li className="old-comments__container">
            <img
                className="old-comments__profile-icon"
                src={greyBackground}
            />
            <div className="old-comments__content">
                <div className="old-comments__top">
                    <p className="old-comments__name">{name}</p>
                    <p className="old-comments__date">
                        {date.toLocaleDateString('en-US')}
                    </p>
                </div>
                <div className="old-comments__bottom">
                    <p className="old-comments__comment">{comment}</p>
                    <button
                        type="submit"
                        className="button old-comments__button"
                        onClick={handleCommentDelete}
                    >
                        <img
                            src={commentIcon}
                            alt=""
                            className="button__button-image"
                        />
                        <span className="upload-form__button-text">
                            DELETE
                        </span>
                        <div className="button__button-spacer"></div>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Comment;
