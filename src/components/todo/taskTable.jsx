import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const TaskTable = ({ tasks, onDelete }) => {
    console.log(tasks)
    return (
        <div className="task-table">
            <h2>Tus Tareas ({tasks.length})</h2>

            {tasks.length === 0 ? (
                <p className="no-tasks">No hay tareas registradas</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Fecha limite</th>
                            <th>Fecha de creacion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td>{task.affair}</td>
                                <td>{task.description || '--'}</td>
                                <td>{task.date_of_completion || 'Sin fecha'}</td>
                                <td>{task.date_of_creation || 'Sin fecha'}</td>
                                <td>
                                    <button
                                        onClick={() => onDelete(task.id)}
                                        className="delete-btn"
                                        aria-label="Eliminar"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TaskTable;