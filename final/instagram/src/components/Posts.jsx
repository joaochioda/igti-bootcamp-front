import react from "react";
import Card from "@material-ui/core/Card";
import CommentIcon from "@material-ui/icons/Comment";
import FavoriteIcon from "@material-ui/icons/Favorite";

import UserPhotoComment from "./UserComment";

import "../styles/postCss.css";

function Posts({
	loggedUser,
	changeLoggedUser,
	posts,
	likes,
	comments,
	photos,
}) {
	const myPosts = posts.filter((post) => post.user === loggedUser);

	const peopleWhoLikedMyPost = (postId) => {
		return likes.reduce((prev, curr) => {
			if (curr.postId === postId) {
				return prev + 1;
			} else return prev;
		}, 0);
	};

	const getPeopleLiked = (postId) => {
		return likes.filter((like) => like.postId === postId).map(filtered => filtered.user);
	}

	const peopleWhoCommentedMyPost = (postId) => {
		return comments.reduce((prev, curr) => {
			if (curr.postId === postId) {
				return prev + 1;
			} else return prev;
		}, 0);
	};

	const getCommentsMyPost = (postId) => {
		return comments.filter((comment) => comment.postId === postId);
	};

	const render = () => {
		if (!loggedUser || !posts || !myPosts) {
			return <div>loading</div>;
		} else {
			return (
				<div>
					<div className="post">
						{myPosts.map((post, idx) => {
							return (
								<Card key={idx} className="card-70">
									<div className="card-by-post">
										<img src={post.picture} alt="" height="600" width="400" />
										<div className="content-user-post">
											<UserPhotoComment
												image={photos.find((p) => p.name === loggedUser).photo}
												comment={post.title}
												width={90}
												height={90}
												person={loggedUser}
											/>
											<div className="icons">
												
												<CommentIcon />
												{peopleWhoCommentedMyPost(post.id)}
												<div title={getPeopleLiked(post.id)}>
												<FavoriteIcon />
												</div>
												{peopleWhoLikedMyPost(post.id)}
											</div>
											<div className="comments">
												{getCommentsMyPost(post.id).map((comment, idx) => {
													return (
														<Card key={idx}>
															<UserPhotoComment
																image={
																	photos.find((p) => p.name === comment.user)
																		.photo
																}
																comment={comment.comment}
																width={48}
																height={48}
																person={comment.user}
															/>
														</Card>
													);
												})}
											</div>
										</div>
									</div>
								</Card>
							);
						})}
					</div>
				</div>
			);
		}
	};

	return <div>{render()}</div>;
}

export default Posts;
