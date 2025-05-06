import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import PracticalForm from "./PracticalForm";
import "../assets/resumeForm.css";

export default function ResumeForm({ details, updater }) {
    return (
        <div className="resume-form">
            <GeneralForm details={details} updater={updater} />
            <EducationForm details={details} updater={updater} />
            <PracticalForm details={details} updater={updater} />
            <div className="submit">
                <button>Submit</button>
            </div>
        </div>
    );
}
