import React, { useState } from "react";

let init: string[] = []

const Todo: React.FC = () => {
	const [todo, setTodo] = useState('')
	const [todoes, setTodoes] = useState(init)

	const addTodo = () => {
		setTodoes([...todoes, todo])
		setTodo("")
	}

	return (
		<div>
			<form onSubmit={(e) => {
				e.preventDefault()
				addTodo()
			}}>
				<input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
				{/* <button>submit</button> */}
			</form>
			<p>
				todo: {JSON.stringify(todo)}
			</p>
			{/* {JSON.stringify(todoes)} */}
			<ul>
				{todoes.map((i) => <li>{i}</li>)}
			</ul>
		</div>
	)
}

export default Todo