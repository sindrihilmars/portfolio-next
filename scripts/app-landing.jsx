// app-landing.jsx — entry point for the landing page.
const __palette = resolvePalette('ember', false);
ReactDOM.createRoot(document.getElementById('root')).render(
  <BloomLanding palette={__palette} cardStyle="default"/>
);
