// script.js

document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Show loading spinner
    document.getElementById("loadingSpinner").style.display = "block";

    // Get the resume text from the textarea
    const resumeText = document.getElementById("resumeText").value;

    // Prepare the data to send to the backend
    const data = {
        text: resumeText
    };

    // Send the POST request to the backend
    fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Hide loading spinner
        document.getElementById("loadingSpinner").style.display = "none";

        // Display the analysis results
        displayAnalysisResults(data);
    })
    .catch(error => {
        // Handle errors
        console.error("Error:", error);
        document.getElementById("loadingSpinner").style.display = "none";
        alert("Something went wrong. Please try again.");
    });
});

// Function to display analysis results
function displayAnalysisResults(data) {
    const analysisOutput = document.getElementById("analysisOutput");
    
    // Clear previous output
    analysisOutput.innerHTML = "";

    if (data.error) {
        analysisOutput.innerHTML = `<p>Error: ${data.error}</p>`;
        return;
    }

    // Create sections to display the results
    analysisOutput.innerHTML += `<h3>ATS Score: ${data.ats_score}</h3>`;
    
    analysisOutput.innerHTML += "<h4>Strengths:</h4><ul>";
    data.strengths.forEach(strength => {
        analysisOutput.innerHTML += `<li>${strength}</li>`;
    });
    analysisOutput.innerHTML += "</ul>";

    analysisOutput.innerHTML += "<h4>Weaknesses:</h4><ul>";
    data.weaknesses.forEach(weakness => {
        analysisOutput.innerHTML += `<li>${weakness}</li>`;
    });
    analysisOutput.innerHTML += "</ul>";

    analysisOutput.innerHTML += "<h4>Recommendations:</h4><ul>";
    data.recommendations.forEach(recommendation => {
        analysisOutput.innerHTML += `<li>${recommendation}</li>`;
    });
    analysisOutput.innerHTML += "</ul>";

    analysisOutput.innerHTML += "<h4>Suggested Templates:</h4><ul>";
    data.suggested_templates.forEach(template => {
        analysisOutput.innerHTML += `<li>${template}</li>`;
    });
    analysisOutput.innerHTML += "</ul>";

    analysisOutput.innerHTML += "<h4>Job Matches:</h4><ul>";
    data.job_matches.forEach(job => {
        analysisOutput.innerHTML += `<li>${job.title} at ${job.company} in ${job.location}</li>`;
    });
    analysisOutput.innerHTML += "</ul>";
}
