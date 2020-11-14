import react from "react";
import Card from "@material-ui/core/Card";

import '../styles/loggedUserCss.css';

function LoggedUser({ loggedUser, changeLoggedUser, posts, likes, comments, photos }) {
	

	const getPosts = () => {
		const total = posts.reduce((acc, post) => {
			if (post.user === loggedUser) {
				return acc + 1;
			} else return acc;
    }, 0);

		if (total > 0) {
			return total;
		} else return 0;
	};

	const getLikes = () => {
		const total = likes.reduce((acc, like) => {
			if (like.user === loggedUser) {
				return acc + 1;
			} else return acc;
		}, 0);
		if (total > 0) {
			return total;
		} else return 0;
	};

	const getComments = () => {
		const total = comments.reduce((acc, comment) => {
			if (comment.user === loggedUser) {
				return acc + 1;
			} else return acc;
    }, 0);
		if (total > 0) {
			return total;
		} else return 0;
	};

	const render = () => {
		if (!loggedUser || !posts) {
			return <div>loading</div>;
		} else {
			return (
				<div className="loggedUser">
					<Card variant="outlined" className="info-user-logged">
          <img
							src={photos.find((p) => p.name === loggedUser).photo}
							alt=""
							height="90"
							width="90"
						/>
            <div className="personal-infos">
            <span>{getPosts()} posts</span>
						<span>{getLikes()} curtidas</span>
						<span>{getComments()} comentários</span>
            </div>
						
						
					</Card>

					<Card variant="outlined" className="change-logged-user">
						<div className="title">Visualizar timeline com:</div>
            <div className="row">
						{photos.map((p, index) => {
							return (
								<div key={index} onClick={() => changeLoggedUser(p.name)} className={p.name === loggedUser ? "content active" : "content"}>
                  <img src={p.photo} alt="" height="48" width="48" />
									<span>{p.name}</span>
								</div>
							);
						})}
             </div>
					</Card>
				</div>
			);
		}
	};

	return <div>{render()}</div>;
}

export default LoggedUser;
