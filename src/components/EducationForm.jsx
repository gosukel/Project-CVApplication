import EditButton from "./EditButton";
import { useState } from "react";

export default function EducationForm({
    details,
    updater,
    editState,
    updateEditState,
}) {
    return (
        <div className="education-form">
            <h2>Education</h2>
            <EditButton
                editState={editState}
                updater={updateEditState}
                section="education"
            />
            {!editState && (
                <>
                    <input
                        type="text"
                        value={details.school}
                        onChange={(e) => {
                            updater("school", e.target.value);
                        }}
                    ></input>
                    <input
                        type="text"
                        value={details.field}
                        onChange={(e) => {
                            updater("field", e.target.value);
                        }}
                    ></input>
                    <input
                        type="text"
                        value={details.studyDate}
                        onChange={(e) => {
                            updater("studyDate", e.target.value);
                        }}
                    ></input>
                </>
            )}
        </div>
    );
}
