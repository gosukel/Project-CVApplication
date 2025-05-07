import JobSection from "./JobSection";

export default function PracticalSection({ workExperience }) {
    return (
        <div className="practical-resume">
            <h3>Work Experience</h3>
            <hr />
            {workExperience.map((exp) => {
                return <JobSection key={exp.id} jobExp={exp} />;
            })}
        </div>
    );
}
