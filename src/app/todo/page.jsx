"use client"
import React, { useEffect, useState } from 'react';
import TaskForm from '../../components/todo/TaskForm';
import TaskTable from '../../components/todo/taskTable';
import './styles.css';
import { FETCH_ROUTE } from '../../utils/consts';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({
        title: '',
        description: '',
        date: ''
    });
    const [update, setUpdate] = useState(true)
    useEffect(() => {
        console.log(FETCH_ROUTE)
        const fetchData = async () => {

            fetch(`${FETCH_ROUTE}/tasks`, { method: 'GET' })
                .then(response => response.json())
                .then(data => setTasks(data));
        }
        fetchData()
        console.log(tasks)
    }, [update])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (task.title.trim() === '') return;
        try {
            console.log(task)
            fetch(`${FETCH_ROUTE}/tasks`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    affair: task.title,
                    description: task.description,
                    date_completion: task.date
                })
            }).then(response => response.json())
                .then(data => console.log(data));
            setUpdate(!update)
            setTask({ title: '', description: '', date: '' });
        } catch (err) {
            console.log(err)
        }
    };

    const handleDelete = (id) => {
        try {
            console.log(task)
            fetch(`${FETCH_ROUTE}/tasks`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'DELETE',
                body: JSON.stringify({
                    id: id
                })
            }).then(response => response.json())
                .then(data => console.log(data));
            setUpdate(!update)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Gestor de Tareas</h1>
            </header>

            <main className="app-main">
                <TaskForm
                    task={task}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />

                <TaskTable
                    tasks={tasks}
                    onDelete={handleDelete}
                />
            </main>
        </div>
    );
};

export default App;