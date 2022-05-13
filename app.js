function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metaData = data.metaData;
    // Filter the data
    var resultArray = metaData.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with ID
    var PANEL = d3.select("#sample-metaData");

    // Use html to clear metaData
    PANEL.html("");

    // Add each key and value pair to the panel
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

    // Gauge Chart
    buildGauge(result.wfreq);
  });
}

