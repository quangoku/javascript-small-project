const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// input for pen adjustment
let draw_color = "black";
let draw_width = 2;

// draw check
let check = false;

// arr for undo
let restore_arr = [];
let index = -1;

function draw(x, y) {
  const rect = canvas.getBoundingClientRect();
  const circle = new Path2D();
  circle.arc(x - rect.x, y - rect.y, draw_width, 0, Math.PI * 2);
  ctx.fillStyle = draw_color;
  ctx.fill(circle);
}

canvas.addEventListener("mousedown", (e) => {
  check = true;
});
canvas.addEventListener("mouseup", () => {
  check = false;
  restore_arr.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  index++;
});

canvas.addEventListener("mousemove", (e) => {
  if (check) {
    const { clientX, clientY } = e;
    draw(clientX, clientY);
  }
});

function clear() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
restore_arr = [];
index=-1;
}
document.querySelector("#clear").addEventListener("click", () => {
  clear();
});
document.querySelector("#undo").addEventListener("click", () => {
  if (index <= 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    index--;
    restore_arr.pop();
    ctx.putImageData(restore_arr[index], 0, 0 );
  }
});
