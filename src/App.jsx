import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import Resume from "./components/Resume";
import "./App.css";

const starterDetails = {
    name: "Full Name",
    email: "your_email@gmail.com",
    phone: "123-4567",
    school: "School Name",
    field: "Field of Study",
    studyDate: "Date of Study",
    workExperience: [
        {
            id: uuidv4(),
            company: "Company Name",
            title: "Position Title",
            duties: "List of responsibilities",
        },
    ],
};
function App() {
    const [resumeDetails, setResumeDetails] = useState(starterDetails);

    function updateResume(property, value) {
        const newResume = {
            ...resumeDetails,
            [property]: value,
        };
        setResumeDetails(newResume);
    }

    return (
        <>
            <ResumeForm details={resumeDetails} updater={updateResume} />
            <Resume details={resumeDetails} />
        </>
    );
}

export default App;
