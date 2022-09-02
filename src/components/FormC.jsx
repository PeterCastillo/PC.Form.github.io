import { useState } from "react"

const FormC = () => {
    const [todo , setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: ''
    })

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input 
                    type="text"
                    placeholder="Ingrese nombre de la tarea"
                    name="todoName"
                    onChange={handleChange}
                    value={todo.todoName}
                />
                <textarea 
                    name="todoDescripcion" 
                    placeholder="Ingrse descripcion de la tarea"
                    value={todo.todoDescripcion}>
                </textarea>
                <select 
                    name="todoEstado"
                    onChange={handleChange}
                    value={todo.todoEstado}>
                        <option value={false}>Pendiente</option>
                        <option value={true}>Completada</option>
                </select>
                <button type="submit">Agregar tarea</button>
            </form>
        </div>
    )
}

export default FormC