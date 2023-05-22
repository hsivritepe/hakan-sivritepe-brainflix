import './Comment.scss';
import greyBackground from '../../assets/images/grey-background.jpg';

function Comment(props) {
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
                </div>
            </div>
        </li>
    );
}

export default Comment;
