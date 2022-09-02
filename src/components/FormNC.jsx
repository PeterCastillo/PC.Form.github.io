import { useRef } from "react"

const FormNC = () => {

    const formulario = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const getData = new FormData(formulario.current)
        const data = Object.fromEntries([...getData.entries()])
        console.log(data)
    }
    return (
        <div>
            <form ref={formulario} onSubmit={handleSubmit} >
                <input 
                    type="text"
                    placeholder="Ingrese nombre de la tarea"
                    name="todoName"
                />
                <textarea name="todoDescripcion" placeholder="Ingrse descripcion de la tarea" id=""></textarea>
                <select name="toodEstado">
                    <option value={false}>Pendiente</option>
                    <option value={true}>Completada</option>
                </select>
                <button>Agregar tarea</button>
            </form>
        </div>
    )
}

export default FormNC