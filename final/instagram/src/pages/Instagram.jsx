import react, { useEffect, useState } from "react";
import axios from "axios";
import Divider from '@material-ui/core/Divider';
import LoggedUser from "../components/LoggedUser";
import Posts from "../components/Posts";

import antman from "../img/antman.png";
import aquaman from "../img/aquaman.png";
import batman from "../img/batman.png";
import blackWidow from "../img/blackWidow.png";
import captainAmerica from "../img/captainAmerica.png";
import captainMarvel from "../img/captainMarvel.png";
import greenLantern from "../img/greenLantern.png";
import ironMan from "../img/ironMan.png";
import spiderMan from "../img/spiderMan.png";
import superman from "../img/superman.png";
import thor from "../img/thor.png";
import wonderWoman from "../img/wonderWoman.png";

function Instagram() {
	const [loggedUser, setLoggedUser] = useState("superman");
	const [posts, setPosts] = useState([]);
	const [comments, setComments] = useState([]);
	const [likes, setLikes] = useState([]);
  const [bestFriends, setBestFriends] = useState([]);
  const photos = [
    { photo: antman, name: "antman" },
    { photo: aquaman, name: "aquaman" },
    { photo: superman, name: "superman" },
    { photo: batman, name: "batman" },
    { photo: blackWidow, name: "blackWidow" },
    { photo: captainAmerica, name: "captainAmerica" },
    { photo: captainMarvel, name: "captainMarvel" },
    { photo: greenLantern, name: "greenLantern" },
    { photo: ironMan, name: "ironMan" },
    { photo: spiderMan, name: "spiderMan" },
    { photo: thor, name: "thor" },
    { photo: wonderWoman, name: "wonderWoman" },
  ];

	useEffect(() => {
		getAllInforLoggedUser();
	}, []);

	const getAllInforLoggedUser = () => {
		const posts = axios.get("http://localhost:3001/posts");
		const comments = axios.get("http://localhost:3001/comments");
		const likes = axios.get("http://localhost:3001/likes");
    const bestFriends = axios.get("http://localhost:3001/bestFriends");

		Promise.all([posts, comments, likes, bestFriends]).then((result) => {
			setPosts(result[0].data);
			setComments(result[1].data);
			setLikes(result[2].data);
			setBestFriends(result[3].data);
		});
	};

	return (
		<div>
			<LoggedUser
				loggedUser={loggedUser}
				changeLoggedUser={(user) => setLoggedUser(user)}
				posts={posts}
				likes={likes}
        comments={comments}
        photos={photos}
			/>
      <Divider/>
			<Posts loggedUser={loggedUser}
				changeLoggedUser={(user) => setLoggedUser(user)}
				posts={posts}
				likes={likes}
				comments={comments}
        photos={photos}/>
		</div>
	);
}

export default Instagram;
