document.querySelectorAll(".toggle").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.classList.toggle("active");
  });
});
