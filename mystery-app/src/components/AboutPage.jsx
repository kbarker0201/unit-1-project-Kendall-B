import { Link } from 'react-router';
import { useState } from "react";

function AboutPage() {
    const [formData, setFormData] = useState({
        name: "",
        feedback: ""
    });
    // const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const maxCharacters = 300;
    const remainingCharacters = maxCharacters - formData.feedback.length;

    const isFormComplete = formData.name && formData.feedback;

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
    };

    return (
        <>
            <div className="topnav">
                <Link to="/">Home </Link>
                <Link to="/about">About </Link>
                <Link to="/contact">Contact </Link>
            </div>
            <h1>About the Game</h1>
            <div>
                <p className='about-text'>This game was created by Kendall Barker for the 2025 Launchcode Cohort.</p>
            </div>
            <div className="feedback-form-container">
                <h2>Please share your feedback below:</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text" 
                            id="name"
                            name="name"
                            value={formData.name} 
                            onChange={handleChange}
                            placeholder="Enter your name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="feedback">Feedback:</label>
                        <textarea
                            id="feedback"
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            placeholder="Please share your feedback (300 characters max)"
                            maxLength={maxCharacters}
                            rows={5}/>
                        <div className="character-counter">
                            {remainingCharacters} characters remaining
                        </div>
                    </div>
                    <button type="submit" disabled={!isFormComplete} className={isFormComplete
                        ? "btn-enabled" : "btn-disabled"} >Submit Feedback</button>
                </form>
                <div className="preview-container">
                    <h2>Preview</h2>
                    <div className="preview-content">
                        <p><strong>Name:</strong> {formData.name || '(Not provided)'}</p>
                        <p><strong>Feedback:</strong> {formData.feedback || '(Not provided)'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;