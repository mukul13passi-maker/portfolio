const progress = document.getElementById("progress");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progress.style.width = `${(scrollTop / height) * 100}%`;
});

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("copyName").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("Mukul Passi");
    const btn = document.getElementById("copyName");
    const original = btn.textContent;
    btn.textContent = "Copied ✓";
    setTimeout(() => btn.textContent = original, 1400);
  } catch {
    alert("Mukul Passi");
  }
});
