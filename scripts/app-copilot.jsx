// app-copilot.jsx — entry point for the Construction Copilot case study.
const __palette = resolvePalette('ember', false);
ReactDOM.createRoot(document.getElementById('root')).render(
  <CopilotPage palette={__palette}/>
);
