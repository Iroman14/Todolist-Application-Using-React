import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";

function Home() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");
	const [show, setShow] = useState(null);

	const AddTask = () => {
		if (newTask !== "") {
			setTasks([...tasks, newTask]);
			setNewTask("");
		}
	};

	const RemoveTask = (index) => {
		setTasks(tasks.filter((_, remove) => remove !== index));
	};

	return (
		<div className="Container">
			<h1>To Do List</h1>
			<ul>
				<li>
					<input
						type="text"
						placeholder="Deseas agregar alguna nota?"
						onChange={(note) => setNewTask(note.target.value)}
						value={newTask}
						onKeyDown={(note) => {
							if (note.key === "Enter") {
								AddTask();
							}
						}}
						className="form-control">
					</input>
				</li>
				{tasks.length === 0 ? (
					<li> No hay tareas pendientes, añadir tareas nuevas </li>
				) : (
					tasks.map((note, index) => (
						<li onMouseEnter={() => setShow(index)} onMouseLeave={() => setShow(null)} key={index} className="d-flex justify-content-between align-items-center">
							{note}
							{show === index && (<button onClick={() => RemoveTask(index)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>)}
						</li>
					)
					))}
			</ul>
			<button onClick={AddTask} className="btn btn-dark"> Añadir Nota </button>
			<div className="Counter">{tasks.length} tasks</div>
		</div>
	)
}

export default Home;