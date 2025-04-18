<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hirexus - AI Resume Analyzer</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
</head>

<body>
  <header>
    <nav class="navbar">
      <div class="logo">Hirexus</div>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <section class="hero">
      <h1>Let AI Supercharge Your Resume</h1>
      <p>Upload your resume and get smart feedback to land your dream job.</p>
    </section>
  </header>

  <main>
    <section class="analyzer">
      <h2>Analyze Your Resume</h2>
      <form id="resumeForm">
        <textarea id="resumeText" placeholder="Paste your resume text here..."></textarea>
        <button type="submit">Analyze Resume</button>
      </form>
      <div id="loadingSpinner" style="display:none">Analyzing...</div>
      <div id="analysisOutput"></div>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Hirexus. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>

</html>
