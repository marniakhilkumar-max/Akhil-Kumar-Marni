const canvas = document.getElementById("agentMap");
const ctx = canvas.getContext("2d");
const routeLabel = document.getElementById("routeLabel");
const routeNames = ["parse_input", "route_tools", "retrieve_evidence", "evaluate_output", "finalize"];

let width = 0;
let height = 0;
let nodes = [];
let routeIndex = 0;

function resize() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.max(34, Math.floor(width / 30));
  nodes = Array.from({ length: count }, (_, index) => ({
    x: (index * 137) % width,
    y: (index * 91) % height,
    vx: Math.sin(index * 1.7) * 0.26 + 0.1,
    vy: Math.cos(index * 1.3) * 0.2 + 0.04,
    r: index % 5 === 0 ? 3.6 : 2.1,
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

      if (distance < 150) {
        ctx.globalAlpha = (150 - distance) / 360;
        ctx.strokeStyle = i % 3 === 0 ? "#d95d39" : "#006d77";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  ctx.globalAlpha = 0.62;
  for (const node of nodes) {
    ctx.fillStyle = node.r > 3 ? "#d95d39" : "#006d77";
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}

function rotateRoute() {
  routeIndex = (routeIndex + 1) % routeNames.length;
  routeLabel.textContent = routeNames[routeIndex];
  document.querySelectorAll(".route-node").forEach((node, index) => {
    node.classList.toggle("active", index === routeIndex % 4);
  });
}

const projectDetails = {
  roadsage: {
    kicker: "Agentic AI / Autonomous Safety",
    title: "RoadSage AI",
    summary:
      "A production-style autonomous driving safety reasoning agent that shows how I build controlled LLM systems with dynamic routing, tool calls, evaluation, and fallbacks.",
    built: [
      "Stateless LangGraph workflow where each scenario creates a fresh state.",
      "Ollama-powered router that selects the next allowed action.",
      "MCP-style safety tools for parsing, hazard extraction, evidence lookup, and summaries.",
      "Trace timeline, strict action validation, max-step protection, and deterministic fallback.",
    ],
    signal: [
      "Shows practical Agentic AI beyond a chatbot.",
      "Demonstrates safety thinking and controlled autonomy.",
      "Highlights LangGraph, LangChain, Ollama, MCP, Pydantic, Streamlit, and tests.",
    ],
    url: "https://github.com/marniakhilkumar-max/roadsage-ai",
  },
  cliniq: {
    kicker: "Medical AI / LLM Evaluation",
    title: "ClinIQ Nexus",
    summary:
      "A local medical report reasoning agent that routes between parsing, red-flag checks, specialist analysis, evidence retrieval, consensus, evaluation, and patient Q&A.",
    built: [
      "Dynamic LangGraph workflow replacing a fixed medical pipeline.",
      "Urgent red-flag escalation that cannot be suppressed by LLM output.",
      "MCP server exposing reusable medical report tools.",
      "Grounded patient-facing answers with safety disclaimers and tests.",
    ],
    signal: [
      "Shows domain-grounded agent design.",
      "Demonstrates safety, evaluation, and fallback thinking.",
      "Connects AI engineering with healthcare workflows and explainability.",
    ],
    url: "https://github.com/marniakhilkumar-max/cliniq-nexus",
  },
  equitod: {
    kicker: "Civic Analytics / Urban Planning",
    title: "EquiTOD Signal Lab",
    summary:
      "A transit-oriented development analytics dashboard that turns neighborhood, equity, housing, and access signals into practical planning intelligence.",
    built: [
      "Scoring workflow for neighborhood opportunity and development readiness.",
      "Readable civic analytics interface for planning and policy audiences.",
      "Data product framing around transit equity, affordability, and access.",
    ],
    signal: [
      "Shows data science applied to real civic decisions.",
      "Connects technical modeling with human impact.",
      "Proves dashboarding, analytics, and storytelling ability.",
    ],
    url: "https://github.com/marniakhilkumar-max/equitod-signal-lab",
  },
  agrishield: {
    kicker: "Climate Risk / Agriculture",
    title: "AgriShield StormGuard",
    summary:
      "A farm and garden storm-protection planning system that estimates risk, recommends cover strategies, calculates material needs, and creates action checklists.",
    built: [
      "Risk scoring based on crop type, field size, storm severity, and timing.",
      "Cover recommendations and material estimates for practical preparation.",
      "Validation tests for risk and recommendation logic.",
    ],
    signal: [
      "Shows applied AI thinking outside ordinary datasets.",
      "Demonstrates product sense for real-world constraints.",
      "Connects climate risk, agriculture, and decision support.",
    ],
    url: "https://github.com/marniakhilkumar-max/agrishield-stormguard",
  },
};

function setupFilters() {
  const chips = document.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll(".project-card");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      const filter = chip.dataset.filter;

      cards.forEach((card) => {
        const categories = card.dataset.category || "";
        const visible = filter === "all" || categories.includes(filter);
        card.classList.toggle("is-hidden", !visible);
      });
    });
  });
}

function setupDialog() {
  const dialog = document.getElementById("projectDialog");
  const close = dialog.querySelector(".dialog-close");

  function openProject(key) {
    const project = projectDetails[key];
    if (!project) return;

    document.getElementById("dialogKicker").textContent = project.kicker;
    document.getElementById("dialogTitle").textContent = project.title;
    document.getElementById("dialogSummary").textContent = project.summary;
    document.getElementById("dialogBuilt").innerHTML = project.built.map((item) => `<li>${item}</li>`).join("");
    document.getElementById("dialogSignal").innerHTML = project.signal.map((item) => `<li>${item}</li>`).join("");
    document.getElementById("dialogLink").href = project.url;

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      window.open(project.url, "_blank", "noreferrer");
    }
  }

  document.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openProject(button.dataset.open);
    });
  });

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openProject(card.dataset.project));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(card.dataset.project);
      }
    });
  });

  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function setupTabs() {
  const tabs = document.querySelectorAll(".skill-tab");
  const panels = document.querySelectorAll(".skill-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`[data-panel="${tab.dataset.tab}"]`).classList.add("active");
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

resize();
draw();
setupFilters();
setupDialog();
setupTabs();
setupReveal();

setInterval(rotateRoute, 1500);
window.addEventListener("resize", resize);
