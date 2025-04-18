// script.js

document.addEventListener("DOMContentLoaded", function () {
  const uploadButton = document.querySelector("button");

  uploadButton.addEventListener("click", async () => {
    const resumeText = document.getElementById("resumeText").value;

    if (!resumeText.trim()) {
      alert("Please paste your resume content.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: resumeText })
      });

      if (!response.ok) {
        throw new Error("Error analyzing resume");
      }

      const data = await response.json();
      displayAnalysis(data);
    } catch (error) {
      console.error("Analysis failed:", error);
      alert("Something went wrong while analyzing your resume.");
    }
  });

  function displayAnalysis(data) {
    let output = `<h4>Analysis Result</h4>`;
    output += `<p><strong>ATS Score:</strong> ${data.ats_score}%</p>`;

    output += `<h5>Strengths:</h5><ul>`;
    data.strengths.forEach(item => output += `<li>${item}</li>`);
    output += `</ul>`;

    output += `<h5>Weaknesses:</h5><ul>`;
    data.weaknesses.forEach(item => output += `<li>${item}</li>`);
    output += `</ul>`;

    output += `<h5>Recommendations:</h5><ul>`;
    data.recommendations.forEach(item => output += `<li>${item}</li>`);
    output += `</ul>`;

    output += `<h5>Suggested Templates:</h5><ul>`;
    data.suggested_templates.forEach(template => output += `<li>${template}</li>`);
    output += `</ul>`;

    output += `<h5>Job Matches:</h5><ul>`;
    data.job_matches.forEach(job => {
      output += `<li>${job.title} at ${job.company} (${job.location})</li>`;
    });
    output += `</ul>`;

    const resultBox = document.createElement("div");
    resultBox.classList.add("result-box");
    resultBox.innerHTML = output;

    document.querySelector(".upload-section").appendChild(resultBox);
  }
});
