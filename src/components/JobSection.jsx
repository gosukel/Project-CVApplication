export default function JobSection({ jobExp }) {
    let duties = jobExp.duties.split(",");

    return (
        <div className="job-details">
            <p className="company-name">{jobExp.company}</p>
            <p className="title">{jobExp.title}</p>
            <ul className="duties">
                {duties.map((duty, idx) => {
                    return (
                        <li key={idx} className="duty">
                            {duty}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
