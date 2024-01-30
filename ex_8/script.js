const parentDiv = document.getElementById("parent").children;

for (const childDiv of parentDiv) {
  childDiv.addEventListener("click", (e) => {
    e.target.remove();
  });
}
