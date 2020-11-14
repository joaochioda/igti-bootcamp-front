import react from "react";

import '../styles/userCommentCss.css';

function UserPhotoComment({ image, comment, width, height,person }) {
	return (
		<div className="UserPhotoComment">
			<img
				src={image}
				alt=""
				height={height}
				width={width}
			/>
			<span>{person}</span>
            <span>{comment}</span>
		</div>
	);
}

export default UserPhotoComment;
