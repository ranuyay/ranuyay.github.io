const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

  // Fallback: after 500ms force-show anything already on screen
  setTimeout(() => {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 500);
} else {
  // No IntersectionObserver support — show everything immediately
  reveals.forEach(el => el.classList.add('visible'));
}
(function () {
  const user = "rania.hamid";
  const domain = "umail.umgc.edu";

  const email = `${user}@${domain}`;
  const link = document.getElementById("email-link");

  if (link) {
    link.setAttribute("href", `mailto:${email}`);
  }
})();
