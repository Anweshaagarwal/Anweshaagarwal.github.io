const lensButtons = document.querySelectorAll("[data-lens]");
const projects = document.querySelectorAll(".project");

lensButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lens = button.dataset.lens;
    lensButtons.forEach((item) => item.classList.toggle("active", item === button));
    projects.forEach((project) => {
      const relevant = project.dataset.tags.split(" ").includes(lens);
      project.dataset.priority = relevant ? "high" : "low";
    });
  });
});
