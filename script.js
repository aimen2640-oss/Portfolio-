// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form submit message
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});
