// script.js

// Initialize UI after DOM loads
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#resumeForm");
  const outputContainer = document.querySelector("#analysisOutput");
  const loadingSpinner = document.querySelector("#loadingSpinner");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const resumeText = document.getElementById("resumeText").value.trim();

    if (!resumeText) {
      alert("Please paste or upload your resume text.");
      return;
    }

    outputContainer.innerHTML = "";
    loadingSpinner.style.display = "block";

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: resumeText })
      });

      if (!response.ok) {
        throw new Error("Failed to analyze resume.");
      }

      const analysis = await response.json();
      renderAnalysis(analysis);
    } catch (error) {
      console.error("Error:", error);
      outputContainer.innerHTML = `<div class="error">An error occurred while analyzing your resume. Please try again later.</div>`;
    } finally {
      loadingSpinner.style.display = "none";
    }
  });

  function renderAnalysis(data) {
    const scoreHTML = `<div class="score-box"><strong>ATS Score:</strong> ${data.ats_score}%</div>`;

    const listSection = (title, items) => `
      <div class="section">
        <h4>${title}</h4>
        <ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
    `;

    const jobList = data.job_matches.map(job => `<li>${job.title} at ${job.company} — <em>${job.location}</em></li>`);

    outputContainer.innerHTML = `
      ${scoreHTML}
      ${listSection("Strengths", data.strengths)}
      ${listSection("Weaknesses", data.weaknesses)}
      ${listSection("Recommendations", data.recommendations)}
      ${listSection("Suggested Templates", data.suggested_templates)}
      <div class="section">
        <h4>Recommended Jobs</h4>
        <ul>${jobList.join("")}</ul>
      </div>
    `;
  }
});
