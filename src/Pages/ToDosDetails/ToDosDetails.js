import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import Comment from '../../Components/Comment/Comment';
import CommentForm from '../../Components/CommentForm/CommentForm'; // Ajout du nouveau composant
import './ToDosDetails.css';

const ToDosDetails = () => {
	const [todo, setTodo] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();


	useEffect(() => {
		axios
			.get(`https://dummyjson.com/todos/${id}`)
			.then((res) => {
				console.log(res);
				setTodo(res.data);
				setIsLoading(false);
			})
			.catch(function (error) {
				console.log('Erreur');
			});
	}, [id]);

	return (
		<>
			{isLoading ? (
				<>
					<Spinner>Loading...</Spinner>
				</>
			) : (
				<><a href="/todos">Revenir à la liste</a>
					<div className="center-content">
						<h1>{todo.todo}</h1>
						<h2>Commentaires :</h2>
						<CommentForm />
						<Comment />
					</div>
				</>
			)}
		</>
	);
};

export default ToDosDetails;
