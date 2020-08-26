// from data.js
var tableData = data;
//get table reference
tbody= d3.select("tbody");

//make this a function
function showTable(data){
    //clear tbody
    tbody.html("");
    // displays all rows
    data.forEach((record) => {
        //add tr
        var row = tbody.append("tr");
        //get key values for each record
        Object.entries(record).forEach(([key, value]) => {
        //add value to each cell
        var cell = row.append("td");
        cell.text(value);
        });
    });
}

//call show table
showTable(data);

//get refference to input
input= d3.select("input");
//add event to input
input.on("change", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    var inputDate=this.value;
    var filteredData=data.filter(data=> data["datetime"] == inputDate);
    //console.log(filteredData);
    //call show table on filtered data
    showTable(filteredData);
})