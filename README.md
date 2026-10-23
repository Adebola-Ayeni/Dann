# Birthday Memory Website (HTML, CSS, JavaScript)

A multi-page birthday scrapbook made with plain HTML, CSS, and JavaScript. No React, Vite, npm, or build step is required.

## Pages
- `index.html` — landing page and welcome note
- `memories.html` — video cards and clickable photo scrapbook
- `letters.html` — interactive notes from friends and family
- `archive.html` — revealable inside jokes and unofficial awards
- `final.html` — final birthday letter and confetti celebration

## Run it locally
Open `index.html` in a browser. For a local server, VS Code's Live Server extension also works.

## Personalise the site
Open `script.js`. At the top, edit:
- `recipientName` and `senderName`
- `videos`: add your video titles and a YouTube embed URL, for example `https://www.youtube.com/embed/VIDEO_ID`
- `photos`: replace sample image URLs and captions
- `letters`: replace placeholder notes with the real messages
- `funFacts`: replace the sample inside jokes and awards

The current photos and text are placeholders. Replace them before sharing the finished gift.

## Deploy on Vercel
1. Upload/push this entire folder to a GitHub repository.
2. In Vercel, import that repository.
3. Since this is a static HTML project, no framework is required. Set Build Command to **Override → leave empty / None** and Output Directory to `.` if prompted. Alternatively, Vercel will often detect the static project automatically.
4. Deploy. Every push to the connected production branch will redeploy the same URL.

## Deploy on GitHub Pages
Push the project to your repository, open **Settings → Pages**, and choose the branch and root folder. Save. Since the pages are plain HTML, no build command is required.

## Notes
- Empty video URLs display a “coming soon” message until you add a YouTube embed URL.
- Anyone with the live link can potentially view the site. A private GitHub repository does not make a deployed site private.
- Ask permission before posting other people's photos, videos, or personal messages.
