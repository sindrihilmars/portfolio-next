// app-spark.jsx — entry point for the Team Spark case study.
const __palette = resolvePalette('moss', false);
ReactDOM.createRoot(document.getElementById('root')).render(
  <SparkPage palette={__palette}/>
);
