import React from 'react';
import './App.css';
import Todo from './Todo'

const App: React.FC = () => {
	return (
		<div className="App">
			<h1>TODO List</h1>
			<Todo />
		</div>
	)
}

export default App;
