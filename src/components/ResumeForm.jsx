import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import PracticalForm from "./PracticalForm";
import "../styles/ResumeForm.css";
import { useState } from "react";

export default function ResumeForm({ details, updater }) {
    const [submitStatus, setSubmitStatus] = useState({
        general: false,
        education: false,
        practical: false,
    });

    function clickButton() {
        setSubmitStatus({ general: true, education: true, practical: true });
    }

    function clickEditButton(section) {
        let newObj = { ...submitStatus, [section]: !submitStatus[section] };
        setSubmitStatus(newObj);
    }

    return (
        <div className="resume-form">
            <GeneralForm
                details={details}
                updater={updater}
                editState={submitStatus.general}
                updateEditState={clickEditButton}
            />
            <EducationForm
                details={details}
                updater={updater}
                editState={submitStatus.education}
                updateEditState={clickEditButton}
            />
            <PracticalForm
                details={details}
                updater={updater}
                editState={submitStatus.practical}
                updateEditState={clickEditButton}
            />
            {Object.values(submitStatus).includes(false) && (
                <div className="submit">
                    <button onClick={() => clickButton()}>Submit</button>
                </div>
            )}
        </div>
    );
}
