import NewProductForm from "./newProductForm";
function NewProduct(props) {
    function SavedFormData(data) {
        console.log("data in newProduct.js ",data);
        props.savedProductData(data);
    }
    return (<div className="newProduct">
        <NewProductForm SavedFormDataProp={SavedFormData}></NewProductForm>
    </div>)
}
export default NewProduct;