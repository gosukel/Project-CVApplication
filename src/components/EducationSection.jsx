export default function EducationSection({ school, studyDate, field }) {
    return (
        <div className="education-resume">
            <h3>Education</h3>
            <hr />
            <div className="education-details">
                <p className="school-name">{school}</p>
                <p className="study-date">{studyDate}</p>
            </div>
            <p className="field">{field}</p>
        </div>
    );
}
