import EditButton from "./EditButton";
import { useState } from "react";
export default function GeneralForm({
    details,
    updater,
    editState,
    updateEditState,
}) {
    return (
        <div className="general-form">
            <h2>General</h2>
            <EditButton
                editState={editState}
                updater={updateEditState}
                section="general"
            />
            {!editState && (
                <>
                    <input
                        type="text"
                        value={details.name}
                        onChange={(e) => {
                            updater("name", e.target.value);
                        }}
                    ></input>
                    <input
                        type="email"
                        value={details.email}
                        onChange={(e) => {
                            updater("email", e.target.value);
                        }}
                    ></input>
                    <input
                        type="tel"
                        value={details.phone}
                        onChange={(e) => {
                            updater("phone", e.target.value);
                        }}
                    ></input>
                </>
            )}
        </div>
    );
}
