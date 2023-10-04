import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CommentForm.css'


const CommentForm = () => {
	const { id } = useParams();
	const [newComment, setNewComment] = useState('');
	const [comments, setComments] = useState([]);

	useEffect(() => {
		// Charger les commentaires existants depuis le local storage
		const storedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
		setComments(storedComments);
	}, [id]);

	const handleCommentChange = e => {
		setNewComment(e.target.value);
	};

	const handleCommentSubmit = e => {
		e.preventDefault();

		// Ajouter le nouveau commentaire à la liste des commentaires
		const updatedComments = [...comments, { body: newComment }];
		setComments(updatedComments);

		// Sauvegarder les commentaires dans le local storage
		localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));

		// Effacer le champ de commentaire après l'ajout
		setNewComment('');
	};

	return (
		<div className="comment-form">
			<form onSubmit={handleCommentSubmit}>
        <textarea
			placeholder="Ajouter un commentaire..."
			value={newComment}
			onChange={handleCommentChange}
		/>
				<button type="submit">Ajouter le commentaire</button>
			</form>
		</div>
	);
};

export default CommentForm;
