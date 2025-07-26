import React from 'react';

const TaskForm = ({ task, onChange, onSubmit }) => {
    return (
        <form className="task-form" onSubmit={onSubmit}>
            <h2>Agregar Nueva Tarea</h2>

            <div className="form-group">
                <label>Título*</label>
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={onChange}
                    placeholder="Título"
                    required
                />
            </div>

            <div className="form-group">
                <label>Descripción</label>
                <input
                    type="text"
                    name="description"
                    value={task.description}
                    onChange={onChange}
                    placeholder="Breve descripción"
                />
            </div>

            <div className="form-group">
                <label>Fecha</label>
                <input
                    type="date"
                    name="date"
                    value={task.date}
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <button type="submit" className="submit-btn">
                    ＋ Agregar
                </button>
            </div>
        </form>
    );
};

export default TaskForm;