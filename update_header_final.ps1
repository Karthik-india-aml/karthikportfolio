$file = "index.html"
$content = Get-Content -Path $file -Raw

# Define the new nav content
$newNav = @'
      <nav class="nav container">
        <a href="#home" class="brand">Karthik Maguluri</a>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
        <div class="nav-actions">
          <button class="theme-toggle" aria-label="Toggle theme">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <a href="assets/Karthik_Resume (1).pdf" class="btn btn-resume" download>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            My Resume
          </a>
          <a href="#contact" class="btn btn-contact">Get in Touch</a>
        </div>
      </nav>
'@

# Replace using regex (non-greedy match)
$content = $content -replace '(?s)<nav class="nav container">.*?</nav>', $newNav

# Write back
Set-Content -Path $file -Value $content

Write-Host "Header updated successfully!"
