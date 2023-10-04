import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Spinner} from 'reactstrap';
import Carte from "../Carte/Carte";
import './Todos.css'

const ToDos = () => {
	const [todos, setTodos]=useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(()=>{
		const storedTodos = JSON.parse(localStorage.getItem('Todos'));

		if (storedTodos) {
			setTodos(storedTodos);
			console.log(storedTodos);
		}
		else {
		axios.get('https://dummyjson.com/todos')
			.then(res => {
				console.log(res);
				setTodos(res.data.todos);
				setIsLoading(false);
				localStorage.setItem(`todos`, JSON.stringify(res.data.todos));
			})
			.catch(function (error) {
				// en cas d’échec de la requête
				console.log("feur");
			})
		}
	},[])
	return(
		<>
			{isLoading ?(
				<>
					<Spinner>
						Loading...
					</Spinner>
				</>
			):(
				<>
					<div className={"glob-doc"}>
						{todos.map((todo,index)=>(
							<Carte key={index} title={todo.todo} id={todo.id}></Carte>
						))}
					</div>
				</>
			)}
		</>
	);
}

export default ToDos;