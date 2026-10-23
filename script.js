/*
  PERSONALISE THIS FILE:
  - Change recipientName and senderName.
  - Replace sample video URLs with YouTube embed URLs.
  - Replace photo URLs and captions with your own.
  - Edit letters and funFacts to use real messages and inside jokes.
*/
const recipientName = "NIEL";
const senderName = "JANET";

const videos = [
  {
    title: "A little something from your people",
    person: "Everyone who made this",
    group: "The birthday film",
    url: "",
    thumbnail: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85",
    description: "A collection of voices, wishes, and memories made just for you."
  },
  {
    title: "From the day ones",
    person: "Your friends",
    group: "The people who know too much",
    url: "",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
    description: "The people who have been there for the plot twists."
  },
  {
    title: "A message from home",
    person: "Your family",
    group: "With love",
    url: "",
    thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85",
    description: "A little reminder of the people who will always be in your corner."
  },
  {
    title: "One more thing...",
    person: "Someone special",
    group: "A little surprise",
    url: "",
    thumbnail: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85",
    description: "A message saved for this moment."
  }
];

const photos = [
  { image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85", caption: "The people who make the ordinary feel special.", date: "THE PEOPLE" },
  { image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85", caption: "The people who make the ordinary feel special.", date: "THE PEOPLE" },
  { image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=85", caption: "A reason to celebrate, and then some.", date: "A GOOD DAY" },
  { image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85", caption: "Proof that the best memories are rarely planned.", date: "THE MOMENTS" },
  { image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85", caption: "More chapters still to come.", date: "WHAT'S NEXT" },
  { image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85", caption: "Good people. Questionable decisions. Great stories.", date: "THE ARCHIVE" },
  { image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85", caption: "Keep this one somewhere in your memory.", date: "A LITTLE KEEPSAKE" }
];

const letters = [
  {
    category: "FROM HOME", author: "Your family", title: "A letter from home",
    teaser: "For all the things we don't say often enough.",
    body: "Happy birthday!\n\nToday is a good excuse to remind you how loved you are. We are proud of the person you are becoming, and we hope this next chapter brings you peace, joy, good health, and plenty of reasons to smile.\n\nNo matter where life takes you, remember that you have people in your corner. Keep growing, keep being yourself, and keep making room for the things that matter.\n\nWith all our love,",
    signature: "Your people, always", style: "pink"
  },
  {
    category: "FROM THE DAY ONES", author: "The crew", title: "A note from the group chat",
    teaser: "We tried to be serious. It lasted almost a minute.",
    body: "Happy birthday, legend.\n\nThanks for the laughs, the stories, the questionable plans, and the memories that somehow get funnier every time we retell them.\n\nMay this new year bring you bigger wins, better stories, and just enough common sense to keep the rest of us entertained.",
    signature: "The usual suspects", style: "yellow"
  },
  {
    category: "A PERSONAL NOTE", author: senderName, title: "Something I wanted you to know",
    teaser: "Some things deserve more than a quick text.",
    body: "Happy birthday, my guy.\n\nI'm glad life gave us a friendship worth celebrating. I appreciate the memories we've made, the conversations, the laughs, and all the little moments that probably didn't seem important at the time but became part of the story.\n\nI hope this next chapter brings you closer to the things you care about. I hope you find good people, meaningful opportunities, and plenty of reasons to be proud of how far you've come.\n\nThanks for being you. Here's to more life, more memories, and more chapters still to come.",
    signature: senderName, style: "pink"
  },
  {
    category: "FOR THE ROAD AHEAD", author: "A little reminder", title: "Read this when you need it",
    teaser: "A small reminder for some future day.",
    body: "You have made it through every strange, difficult, beautiful chapter that brought you here.\n\nGive yourself credit for the progress nobody else sees. Keep the people who genuinely care about you close, keep learning, and don't forget to enjoy the life you're working so hard to build.\n\nThere is still so much ahead of you.",
    signature: "Keep going", style: "yellow"
  }
];

const funFacts = [
  { label: "A scientifically questionable award", title: "Most likely to turn a simple plan into a whole story", detail: "Evidence has been collected. The group chat has declined to provide further comment." },
  { label: "Official group-chat record", title: "Has said 'I'm on my way' while still at home", detail: "Allegedly. The committee is still reviewing the timestamps." },
  { label: "Future prediction", title: "Will somehow have an even better story next year", detail: "This prediction is based on absolutely no scientific evidence and unreasonable confidence." }
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-sender]").forEach(el => el.textContent = senderName);
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.textContent = open ? "×" : "☰";
    });
  }

  const progress = document.querySelector(".scroll-progress");
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  document.querySelectorAll("[data-scroll-to]").forEach(btn => btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth" });
  }));

  renderVideos();
  renderPhotos();
  renderLetters();
  renderFacts();
  setupModals();
  setupFinalNote();
});

function renderVideos() {
  const grid = document.getElementById("video-grid");
  if (!grid) return;
  grid.innerHTML = videos.map((video, index) => `
    <button class="video-card" type="button" data-video="${index}" aria-label="Open ${escapeHTML(video.title)}">
      <div class="video-thumb"><img src="${escapeAttr(video.thumbnail)}" alt=""><span class="play-button">▶</span></div>
      <div class="video-info"><span class="mini-label">${escapeHTML(video.group)}</span><h3>${escapeHTML(video.title)}</h3><p>${escapeHTML(video.description)}</p></div>
    </button>`).join("");
  grid.querySelectorAll("[data-video]").forEach(button => button.addEventListener("click", () => {
    const video = videos[Number(button.dataset.video)];
    const content = document.getElementById("modal-content");
    if (video.url) {
      const safeUrl = video.url.startsWith("https://www.youtube.com/embed/") || video.url.startsWith("https://www.youtube-nocookie.com/embed/") ? video.url : "";
      content.innerHTML = safeUrl
        ? `<iframe class="modal-video" src="${escapeAttr(safeUrl)}" title="${escapeAttr(video.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><h2>${escapeHTML(video.title)}</h2><p>${escapeHTML(video.description)}</p>`
        : `<h2>${escapeHTML(video.title)}</h2><p>Add a valid YouTube embed URL to this video in <code>script.js</code>.</p>`;
    } else {
      content.innerHTML = `<img class="modal-image" src="${escapeAttr(video.thumbnail)}" alt="${escapeAttr(video.title)}"><h2>${escapeHTML(video.title)}</h2><p>${escapeHTML(video.description)}</p><p><strong>Video coming soon.</strong> Replace this item's empty <code>url</code> in <code>script.js</code> with a YouTube embed URL.</p>`;
    }
    openModal(document.getElementById("media-modal"));
  }));
}

function renderPhotos() {
  const grid = document.getElementById("photo-grid");
  if (!grid) return;
  grid.innerHTML = photos.map((photo, index) => `
    <button class="scrap-photo" type="button" data-photo="${index}" aria-label="View photo: ${escapeAttr(photo.caption)}">
      <img src="${escapeAttr(photo.image)}" alt="${escapeAttr(photo.caption)}" loading="lazy">
      <div class="photo-date">${escapeHTML(photo.date)}</div><p>${escapeHTML(photo.caption)}</p>
    </button>`).join("");
  grid.querySelectorAll("[data-photo]").forEach(button => button.addEventListener("click", () => {
    const photo = photos[Number(button.dataset.photo)];
    document.getElementById("modal-content").innerHTML = `<img class="modal-image" src="${escapeAttr(photo.image)}" alt="${escapeAttr(photo.caption)}"><p class="modal-caption">${escapeHTML(photo.caption)}</p>`;
    openModal(document.getElementById("media-modal"));
  }));
}

function renderLetters() {
  const grid = document.getElementById("letters-grid");
  if (!grid) return;
  grid.innerHTML = letters.map((letter, index) => `
    <button type="button" class="letter-card" data-letter="${index}">
      <span class="letter-category">${escapeHTML(letter.category)}</span>
      <h3>${escapeHTML(letter.title)}</h3><p>${escapeHTML(letter.teaser)}</p>
      <span class="letter-author">From ${escapeHTML(letter.author)}</span>
    </button>`).join("");
  grid.querySelectorAll("[data-letter]").forEach(button => button.addEventListener("click", () => {
    const letter = letters[Number(button.dataset.letter)];
    document.getElementById("letter-modal-content").innerHTML = `
      <span class="handwritten">${escapeHTML(letter.category)}</span><h2>${escapeHTML(letter.title)}</h2>
      <p>${escapeHTML(letter.body)}</p><p class="final-signature">${escapeHTML(letter.signature)} <span class="signature-heart">♥</span></p>`;
    openModal(document.getElementById("letter-modal"));
  }));
}

function renderFacts() {
  const grid = document.getElementById("facts-grid");
  if (!grid) return;
  grid.innerHTML = funFacts.map((fact, index) => `
    <button type="button" class="fact-card" data-fact="${index}" aria-expanded="false">
      <span class="fact-label">${escapeHTML(fact.label)}</span><span class="fact-number">FILE 00${index + 1}</span>
      <h3 class="fact-title">${escapeHTML(fact.title)}</h3><p class="fact-detail">${escapeHTML(fact.detail)}</p>
      <span class="fact-tap">Tap to reveal evidence ↗</span>
    </button>`).join("");
  grid.querySelectorAll("[data-fact]").forEach(button => button.addEventListener("click", () => {
    const revealed = button.classList.toggle("revealed");
    button.setAttribute("aria-expanded", String(revealed));
    button.querySelector(".fact-tap").textContent = revealed ? "Tap to hide evidence ↗" : "Tap to reveal evidence ↗";
  }));
}

function setupModals() {
  document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModals));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeModals(); });
}
function openModal(modal) {
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModals() {
  document.querySelectorAll(".modal.open").forEach(modal => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    const content = modal.querySelector("#modal-content");
    if (content) content.innerHTML = "";
  });
  document.body.style.overflow = "";
}
function setupFinalNote() {
  const reveal = document.getElementById("reveal-final");
  const letter = document.getElementById("final-letter");
  if (reveal && letter) reveal.addEventListener("click", () => {
    letter.hidden = false;
    letter.scrollIntoView({ behavior: "smooth", block: "start" });
    reveal.textContent = "The note is open ♥";
    reveal.disabled = true;
    burstConfetti(70);
  });
  document.getElementById("celebrate-button")?.addEventListener("click", () => burstConfetti(120));
}
function burstConfetti(amount) {
  const layer = document.querySelector(".confetti-layer");
  if (!layer) return;
  const colors = ["#ff4fa3", "#ffe45e", "#6ee7ff", "#b58aff", "#ff8bc7", "#fff0f7"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--fall-time", `${2 + Math.random() * 2.8}s`);
    piece.style.animationDelay = `${Math.random() * .7}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 6000);
  }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function escapeAttr(value) { return escapeHTML(value); }
