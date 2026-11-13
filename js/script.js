const glassNav = document.querySelector(".Container1");

glassNav.addEventListener("mousemove", (e) => {
  const rect = glassNav.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  glassNav.style.setProperty("--x", `${x}px`);
  glassNav.style.setProperty("--y", `${y}px`);
});
