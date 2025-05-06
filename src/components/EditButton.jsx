export default function EditButton({ editState, updater }) {
    return (
        <button
            className={"edit-btn " + (editState ? "" : "no-display")}
            onClick={() => updater()}
        >
            Edit
        </button>
    );
}
