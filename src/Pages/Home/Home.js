import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import "./Home.css";

const Home =()=>{
	const [token, setToken] = useState(null); // Nouvel état pour stocker le jeton

	useEffect(() => {
		// Lorsque le composant est monté, vérifiez si l'utilisateur a un jeton valide
		// Si vous avez un moyen de stocker le jeton dans le composant parent (par exemple, App),
		// assurez-vous de le récupérer ici.

		// Exemple de récupération du jeton à partir de l'état local ou d'un contexte global
		const storedToken = localStorage.getItem('token'); // Vous devrez adapter cela à votre logique d'authentification

		if (storedToken) {
			setToken(storedToken);
		}
	}, []);

	return (<>
		{token ? (
				<>
					<h1>Vous êtes connecté</h1>
				</>
			) : (
				<>

				</>
			)}</>
	)
}

export default Home;