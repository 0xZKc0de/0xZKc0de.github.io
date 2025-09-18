# Terminal-style Portfolio

This is a simple static portfolio that looks like a Linux terminal. It includes commands: `help`, `about`, `projects`, `skills`, `contact`, `resume`, `blog`, `theme`, and `clear`.

To run locally, serve the folder with a static server. Example using Python 3 (Windows PowerShell):

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Files:
- `index.html` — main page
- `styles.css` — styling
- `script.js` — terminal logic

New features:
- Left sidebar with navigation that triggers terminal commands.
- Mouse playground with clickable icons.
- Command history (Up/Down), Tab completion, and Ctrl+L to clear.
- Project cards and richer HTML outputs.

You can customize `script.js` to add or change commands and content.
