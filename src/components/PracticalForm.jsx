import { v4 as uuidv4 } from "uuid";
import EditButton from "./EditButton";
import { useState } from "react";

export default function PracticalForm({
    details,
    updater,
    editState,
    updateEditState,
}) {
    function prepData(id, property, value) {
        const curData = details.workExperience;
        const newData = curData.map((exp) => {
            if (exp.id === id) {
                return { ...exp, [property]: value };
            } else {
                return exp;
            }
        });
        updater("workExperience", newData);
    }

    function addExperience() {
        if (details.workExperience.length >= 3) return;
        let newExp = {
            id: uuidv4(),
            company: "Company Name",
            title: "Position Title",
            duties: "List of responsibilities",
        };
        let newData = details.workExperience;
        newData.push(newExp);
        updater("workExperience", newData);
    }

    function removeExperience(id) {
        let newData = details.workExperience.filter((exp) => exp.id !== id);
        updater("workExperience", newData);
    }

    let colNumber;
    if (navigator.userAgent.includes("Chrome")) {
        colNumber = "41";
    } else {
        colNumber = "28";
    }

    return (
        <div className="practical-form">
            <div className="practical-form-header">
                <h2>Practical</h2>
                <p onClick={() => addExperience()}>+</p>
            </div>
            <EditButton
                editState={editState}
                updater={updateEditState}
                section="practical"
            />
            {!editState && (
                <>
                    {details.workExperience.map((exp, idx) => {
                        return (
                            <div key={exp.id} className="practical-form-inputs">
                                {idx > 0 && (
                                    <p onClick={() => removeExperience(exp.id)}>
                                        X
                                    </p>
                                )}
                                <input
                                    type="text"
                                    value={exp.company}
                                    onChange={(e) => {
                                        prepData(
                                            exp.id,
                                            "company",
                                            e.target.value
                                        );
                                    }}
                                ></input>
                                <input
                                    type="text"
                                    value={exp.title}
                                    onChange={(e) => {
                                        prepData(
                                            exp.id,
                                            "title",
                                            e.target.value
                                        );
                                    }}
                                ></input>
                                <textarea
                                    rows="6"
                                    cols={colNumber}
                                    value={exp.duties}
                                    onChange={(e) => {
                                        prepData(
                                            exp.id,
                                            "duties",
                                            e.target.value
                                        );
                                    }}
                                ></textarea>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
}
