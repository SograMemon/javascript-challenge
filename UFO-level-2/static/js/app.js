// from data.js
var tableData = data;
//get table reference
tbody= d3.select("tbody");

//make a function to show table rows
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

//make function to filter rows
function dataFilter(data, feild, value){
    var filteredData= data.filter(record => data[feild]==value);
    return filteredData;

}

//call show table
showTable(data);

//get refference to input
var input= d3.select("input");
//add event to input
input.on("change", function(){
    var inputDate=this.value;
    var filteredData=data.filter(data=> data["datetime"] == inputDate);
    //console.log(filteredData);
    //call show table on filtered data
    //showTable(filteredData);
    showTable(dataFilter(data, "datetime", inputDate));
});

//populate the city dropdown
//create list to store values for dropdown menus
var cities= [];
var countries=[];
var states=[];
var dates=[];
//loop through all records to check for unique values for each field
data.forEach(record => {
    //date
    if (!(record["date"] in dates)){
        cities.push(record["date"]);
    }
    //country
    //city
    if (!(record["city"] in cities)){
        cities.push(record["city"]);
    }
    //
});
console.log(cities);

