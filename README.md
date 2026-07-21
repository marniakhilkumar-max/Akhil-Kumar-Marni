# Akhil Kumar Marni

**Agentic AI Engineer | LLM Systems | LangGraph, LangChain, Ollama, MCP, RAG, LLMOps, Evaluation**

I build production-style AI agent systems that can reason over domain data, choose the next step dynamically, call tools, evaluate their own outputs, and fall back safely when an LLM is unavailable. My recent work focuses on practical agentic AI across healthcare, autonomous driving safety, civic planning, agriculture risk, and financial decision intelligence.

My strongest work sits at the intersection of:

- Agentic AI orchestration with stateless LangGraph workflows
- Local and open-weight LLM systems using Ollama
- Tool-using agents with MCP-style servers and structured actions
- RAG, evidence retrieval, grounding, traceability, and evaluation
- Python ML engineering, data pipelines, dashboards, cloud-aware deployment, and production safeguards

## Current Skill Signal

**Agentic AI Systems**

- LangGraph, LangChain, stateless graph workflows, router agents, tool-calling, MCP servers, multi-agent workflow patterns, guardrails, fallback routing, trace logging, and evaluation loops.

**LLM Engineering**

- Ollama, OpenAI-ready architecture, RAG, vector search, semantic retrieval, prompt engineering, structured JSON outputs, grounded Q&A, summarization, LLM evaluation, and response validation.

**Machine Learning**

- Python, Pandas, NumPy, Scikit-learn, XGBoost, PyTorch, TensorFlow, classification, regression, forecasting, anomaly detection, feature engineering, and model evaluation.

**Data Engineering**

- SQL, ETL/ELT pipelines, API ingestion, data validation, data quality checks, Spark, Kafka, Hadoop, Hive, DuckDB, Polars, PostgreSQL, NoSQL, vector databases, and semantic search.

**Cloud, MLOps, and Product Engineering**

- Azure, AWS, Docker, Kubernetes, CI/CD, GitHub, Linux, FastAPI, Streamlit, model deployment concepts, monitoring, reproducible workflows, testing, and documentation.

**Decision Intelligence Domains**

- Healthcare AI, autonomous safety, financial risk, credit intelligence, urban planning, climate resilience, agriculture risk, governance reporting, and enterprise analytics.

## Featured Agentic AI Projects

### RoadSage AI

**Autonomous driving safety reasoning agent**

RoadSage AI is a production-style local LLM agent for road-scene safety reasoning. The system uses a stateless LangGraph workflow where an Ollama-powered router decides the next action instead of following a fixed pipeline. It can parse driving scenarios, identify hazards, retrieve supporting evidence, evaluate safety, and produce grounded final recommendations.

**Highlights**

- Built a stateless LangGraph agent where each run starts from the current scenario input and config.
- Integrated Ollama with LangChain for local LLM routing, defaulting to `llama3.1:8b`.
- Added MCP-style tools for driving-scene parsing, hazard extraction, evidence lookup, and safety summarization.
- Implemented strict router validation, fallback routing, loop protection, and traceable decision history.
- Created a Streamlit interface for scenario analysis, agent trace review, safety reasoning, and evaluation output.

**Tech Stack:** Python, LangGraph, LangChain, Ollama, MCP, Pydantic, Streamlit, Pytest

Repository: [roadsage-ai](https://github.com/marniakhilkumar-max/roadsage-ai)

---

### ClinIQ Nexus

**Medical report reasoning and patient Q&A agent**

ClinIQ Nexus upgrades a medical-report demo into a production-style local LLM agent system. The agent reads medical reports, checks urgent red flags, routes to specialist analysis, retrieves evidence, builds consensus, evaluates completeness, and answers patient questions with safety disclaimers.

**Highlights**

- Replaced a deterministic medical pipeline with a dynamic LangGraph workflow.
- Built an Ollama router that chooses between parsing, safety checks, specialist reasoning, evidence retrieval, consensus, evaluation, Q&A, and finalization.
- Exposed focused medical utilities through a lightweight MCP server.
- Added safety-first behavior where urgent red-flag escalation cannot be suppressed by the LLM.
- Added tests for parsing, red flags, router validation, max-step handling, Q&A routing, fallback behavior, and MCP tools.

**Tech Stack:** Python, LangGraph, LangChain, Ollama, MCP, Pydantic, Streamlit, Pytest

Repository: [cliniq-nexus](https://github.com/marniakhilkumar-max/cliniq-nexus)

---

### EquiTOD Signal Lab

**Urban planning and transit-oriented development analytics**

EquiTOD Signal Lab analyzes neighborhood-level transit, equity, housing, and development signals to support smarter urban planning decisions. The project turns civic and planning data into interpretable indicators that can help compare areas, identify opportunity zones, and explain tradeoffs for equitable development.

**Highlights**

- Built a data science dashboard focused on urban planning, transit access, equity, and development readiness.
- Designed scoring logic that balances access, affordability, neighborhood need, and investment potential.
- Created clear visual outputs for decision-makers who need explainable planning evidence.
- Positioned the project around real civic analytics problems rather than generic dashboarding.

**Tech Stack:** Python, Pandas, Geo/Data Analytics, Streamlit, Plotting, Scoring Models

Repository: [equitod-signal-lab](https://github.com/marniakhilkumar-max/equitod-signal-lab)

---

### AgriShield StormGuard

**Agriculture storm-risk and crop protection planning system**

AgriShield StormGuard helps farmers and garden owners decide how to protect paddy fields, crops, and gardens from rain and storm damage. It estimates risk, recommends cover strategies, calculates materials, and provides action checklists before severe weather.

**Highlights**

- Built a practical decision-support system for crop and garden protection under storm conditions.
- Combined weather-risk reasoning, field/crop inputs, material estimation, and action planning.
- Designed the project around real-world usefulness: what to cover, when to cover, and what materials are needed.
- Added tests to validate planning logic and risk outputs.

**Tech Stack:** Python, Streamlit, Rule-Based Risk Logic, Data Validation, Pytest

Repository target: `agrishield-stormguard`

## What I Build Well

**Agentic AI Systems**

- Stateless LLM workflows using LangGraph
- Router agents that choose actions dynamically
- Tool-calling patterns with MCP-style servers
- Multi-step reasoning traces and audit-friendly outputs
- Deterministic fallback paths when LLMs fail
- Guardrails, max-step protection, validation, and agent evaluation

**LLM Engineering**

- Ollama-based local LLM integration
- LangChain orchestration
- Structured JSON routing and output validation
- RAG and evidence-grounded response generation
- Prompt safety, grounded Q&A, and domain disclaimers
- Vector search, semantic retrieval, summarization, and LLMOps-ready patterns

**ML and Data Engineering**

- Python-based data pipelines and analytics workflows
- Predictive modeling, classification, anomaly detection, and evaluation
- Dashboarding for healthcare, mobility, planning, agriculture, and finance use cases
- SQL, ETL/ELT, Spark, Kafka, DuckDB, Polars, Pandas, NumPy, Scikit-learn, XGBoost, PyTorch, and TensorFlow

**Production Thinking**

- Pydantic state models
- Unit and integration tests
- CI/CD-ready project structure
- Docker/Kubernetes/cloud-aware architecture
- Logging, traceability, validation, and failure handling
- Azure/AWS-aware architecture, FastAPI, Streamlit, reproducible workflows, and documentation

## Resume Positioning

**Agentic AI Engineer**

I design and build local-first LLM agent systems using LangGraph, LangChain, Ollama, and MCP-style tooling. My projects focus on practical reasoning workflows where agents parse inputs, decide the next step, retrieve evidence, call tools, evaluate outputs, and return grounded recommendations with clear traces and fallback behavior.

## Roles I Am Targeting

- Agentic AI Engineer
- LLM Engineer
- Applied AI Engineer
- AI/ML Engineer
- Machine Learning Platform Engineer
- Generative AI Engineer
- Data Scientist with LLM and ML Engineering focus
- Quant/Data Scientist roles involving Python, risk, modeling, and automation

## Contact

- LinkedIn: [akhil-kumar-marni](https://www.linkedin.com/in/akhil-kumar-marni/)
- GitHub: [marniakhilkumar-max](https://github.com/marniakhilkumar-max)
- Email: marniakhilkumar@gmail.com
