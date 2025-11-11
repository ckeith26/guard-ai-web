# GUARD-AI Web

A web interface for the GUARD-AI research project: **Governance and Untrusted Action Runtime Defense for AI Agents**.

## About

GUARD-AI is a two-stage detection system designed to reduce security risks in AI agent systems. The system utilizes a lightweight XGBoost model and a custom small language model (SLM) to balance speed and performance. GUARD-AI acts as an efficient bidirectional policy enforcement layer that mediates both ingress (inputs from users, external agents, tools, and web content) and egress (agent-initiated actions).

This website serves as the project's landing page, presenting the research abstract, methodology, and team contact information.

### Team

- **Cameron Keith** - Department of Computer Science, Dartmouth College
- **Ryan Rocha** - Department of Computer Science, Dartmouth College  
- **Vikram Chetnani** - Department of Computer Science, Dartmouth College

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **SCSS** - Styling
- **ESLint** - Code linting (Airbnb style guide)
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
guard-ai-web/
├── src/
│   ├── components/
│   │   ├── welcome.jsx    # Main landing page with abstract & sections
│   │   ├── header.jsx     # Page header component
│   │   ├── section.jsx    # Reusable section component
│   │   └── contact.jsx    # Team contact information
│   ├── img/               # Team member photos
│   ├── index.jsx          # Application entry point
│   ├── style.scss         # Global styles
│   └── vite.config.js     # Vite configuration
├── index.html             # HTML template
└── package.json           # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ckeith26/guard-ai.git
cd guard-ai-web
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Create a production build:
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Features

- **Responsive Design** - Mobile-friendly layout
- **Team Profiles** - Contact information and links for each team member
- **Research Abstract** - Detailed overview of the GUARD-AI system
- **GitHub Integration** - Direct link to the project repository
- **Modern UI** - Clean, academic presentation with Roboto font

## Links

- **GitHub Repository**: [https://github.com/ckeith26/guard-ai](https://github.com/ckeith26/guard-ai)
- **Paper**: Coming soon

## License

This project is part of academic research at Dartmouth College's Department of Computer Science.

## Course

CS69: Cybersecurity - Bleeding Edge  
Dartmouth College, Fall 2025
