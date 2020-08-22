// from data.js
var tableData = data;
tbody= d3.select("tbody");

// YOUR CODE HERE!
data.forEach((record) => {
    var row = tbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });