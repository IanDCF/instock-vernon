import "./AddNewButton.scss"
const AddNewButton = ({ text }) => {
    return (
        <button className="add-new">+ { text }</button>
    )
}

export default AddNewButton