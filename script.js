// Save the current page HTML with edits as a downloadable file
document.getElementById('saveBtn').addEventListener('click', () => {
  const doctype = '<!DOCTYPE html>\n';
  // Get the full HTML of the page
  const html = document.documentElement.outerHTML;
  // Combine doctype + html
  const fullHtml = doctype + html;

  // Create a Blob with the full HTML content
  const blob = new Blob([fullHtml], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  // Create a temporary link element to download the file
  const a = document.createElement('a');
  a.href = url;
  a.download = 'real_managhat_volleyball_team.html';
  document.body.appendChild(a);
  a.click();

  // Clean up
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

nav {
  background: #0a7cff;
  padding: 15px;
  text-align: center;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

section {
  padding: 40px;
}

h1, h2 {
  color: #0a7cff;
}


