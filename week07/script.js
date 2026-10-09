const boxes_container = document.getElementById("boxes");

const size = 4;

for (let r = 0; r < size; r++) {
  for (let c = 0; c < size; c++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundPosition = `${-c * 125}px ${-r * 125}px`;
    boxes_container.appendChild(box);
  }
}

console.log("done add box");

document.getElementById("btn").addEventListener("click", () => {
  boxes_container.classList.toggle("big");
});
