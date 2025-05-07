export default function GeneralSection({ name, email, tel }) {
    return (
        <div className="general-resume">
            <h2>{name}</h2>
            <hr />
            <div className="contact">
                <p>{email}</p>
                <p>{tel}</p>
            </div>
        </div>
    );
}
