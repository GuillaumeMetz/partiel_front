import React, { useState } from 'react';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [token, setToken] = useState(null); // Nouvel état pour stocker le jeton

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const login = async () => {
		try {
			const response = await fetch('https://dummyjson.com/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: username,
					password: password,
				})
			});

			const data = await response.json();
			console.log('Login response:', data);
			if (response.ok) {
				localStorage.setItem('token', data.token);
				localStorage.setItem('email', data.email);
				// Stockez le jeton dans l'état local
				setToken(data.token);
				window.location.replace("/");
				console.log('Token:', data.token);
				// Vous pouvez rediriger l'utilisateur ou effectuer d'autres actions ici
			} else {
				// Gérez les erreurs d'authentification ici, par exemple afficher un message d'erreur à l'utilisateur
				console.error('Authentication failed:', data.message);
			}


			// Vous pouvez ajouter ici la logique pour gérer la réponse de l'API,
			// par exemple, vérifier si la connexion a réussi ou non.

		} catch (error) {
			console.error('Error during login:', error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		login();
		// Ajoutez ici la logique de connexion, par exemple une requête vers un backend
		console.log('Username:', username);
		console.log('Password:', password);
		// Réinitialisez les champs après la soumission
		setUsername('');
		setPassword('');
	};


	return (
		<div className="Login">
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Username:
					<input type="text" value={username} onChange={handleUsernameChange} />
				</label>
				<br />
				<label>
					Password:
					<input type="password" value={password} onChange={handlePasswordChange} />
				</label>
				<br />
				<button type="submit">Login</button>
			</form>

			{token && (
				<div>
					<h2>Token Information</h2>
					<p>Token: {token}</p>
				</div>
			)}
		</div>
	);
}

export default Login;
