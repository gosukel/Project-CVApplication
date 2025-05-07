export default function EditButton({ editState, section, updater }) {
    return (
        <button
            className={"edit-btn " + (editState ? "" : "no-display")}
            onClick={() => updater(section)}
        >
            Edit
        </button>
    );
}
