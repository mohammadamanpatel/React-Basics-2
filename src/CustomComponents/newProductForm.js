import { useState } from "react";

function NewProductForm(props) {
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');
    function ChangeHandlerTitle(events) {
        setTitle(events.target.value);
        // console.log(events.target.value);
    }
    function ChangeHandlerDate(events) {
        setDate(events.target.value);
        // console.log(events.target.value);
    }
    function submitHandler(events) {
        //Add waale button pe click krne pe wapas se sab reset na ho isliye ham uski default set ko prevent karenge
        events.preventDefault();
        const newProduct = {
            title: newTitle,
            date: newDate
        }
        // console.log(newProduct);
         props.SavedFormDataProp(newProduct)
        //newProduct value set hine ke baad unko input me se empty kar dena

        setTitle('');
        setDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new_title_div">
                <label>Title of Product:</label>
                <input type="text" value={newTitle} onChange={ChangeHandlerTitle}></input>
            </div>
            <div className="new_Date_div">
                <label>Date of msg</label>
                <input type="date" value={newDate} onChange={ChangeHandlerDate} min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div>
                <button type="submit">Add New Product</button>
            </div>
        </form>
    )
}
export default NewProductForm;