import "../styles/Resume.css";
import GeneralSection from "./GeneralSection";
import EducationSection from "./EducationSection";
import PracticalSection from "./PracticalSection";

export default function Resume({ details }) {
    return (
        <div className="resume">
            <GeneralSection
                name={details.name}
                email={details.email}
                tel={details.phone}
            />
            <EducationSection
                school={details.school}
                studyDate={details.studyDate}
                field={details.field}
            />
            <PracticalSection workExperience={details.workExperience} />
        </div>
    );
}
