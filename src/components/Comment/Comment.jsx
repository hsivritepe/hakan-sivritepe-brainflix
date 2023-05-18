import './Comment.scss';
import greyBackground from '../../assets/images/grey-background.jpg';

function Comment(props) {
    // console.log('hhhh');
    // console.log(props.commentData);
    // const data = props.commentData;
    // console.log(data.name);
    return (
        <li className="old-comments__container">
            <img
                className="old-comments__profile-icon"
                src={greyBackground}
            />
            <div className="old-comments__content">
                <div className="old-comments__top">
                    <p className="old-comments__name">
                        {props.commentData.name}
                    </p>
                    <p className="old-comments__date"></p>
                </div>
                <div className="old-comments__bottom">
                    <p className="old-comments__comment">
                        {props.commentData.comment}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default Comment;
