import React from 'react';
import {Card,CardBody,CardTitle,Button} from "reactstrap";
import {Link} from "react-router-dom";
import './Carte.css';

const Carte = ({title,id}) => {
	return (

		<Card>
			<CardBody>
				<CardTitle tag="h5">
					{title}
				</CardTitle>
				<Link to={`/todos/${id}`}>
					<Button>
						Voir les détails
					</Button>
				</Link>
			</CardBody>
		</Card>
	);
};

export default Carte;