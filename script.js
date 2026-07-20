const canvas = document.getElementById("agentMap");
const ctx = canvas.getContext("2d");

let width = 0;
let height = 0;
let nodes = [];

function resize() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.max(26, Math.floor(width / 38));
  nodes = Array.from({ length: count }, (_, index) => ({
    x: (index * 137) % width,
    y: (index * 89) % height,
    vx: (Math.sin(index * 1.7) * 0.22) + 0.08,
    vy: (Math.cos(index * 1.3) * 0.18) + 0.04,
    r: index % 4 === 0 ? 3.4 : 2.3,
  }));
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  for (const node of nodes) {
    node.x += node.vx;
    node.y += node.vy;

    if (node.x > width + 20) node.x = -20;
    if (node.y > height + 20) node.y = -20;
  }

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const a = nodes[i];
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 160) {
        ctx.globalAlpha = (160 - distance) / 420;
        ctx.strokeStyle = "#006d77";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  ctx.globalAlpha = 0.55;
  for (const node of nodes) {
    ctx.fillStyle = node.r > 3 ? "#d95d39" : "#006d77";
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}

resize();
draw();

window.addEventListener("resize", resize);
