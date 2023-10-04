import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import './Comment.css';


const Comment = ($id) => {
	const {id} = useParams();

	const [localComments, setLocalComments] = useState(JSON.parse(localStorage.getItem(`comments-${id}`))||[]);
	console.log(localComments);
	return (
		<div className="parentcomment">
			{localComments.map((comment,index) => (
				<div className="commentshow" key={index}>
					{comment.body}
					<button onClick="deleteItem()">Supprimer commentaire</button>
					<br/>
				</div>
			))}
		</div>
	);
};

export default Comment;