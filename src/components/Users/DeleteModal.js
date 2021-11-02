

function DeleteModal(props) {
    return(
        <>
        <button onClick={props.onDelete}>confirm</button>
        <button onClick={props.onCancel}>Cancel</button>
        </>
    )
}

export default DeleteModal;