// from data.js
var tableData = data;
//get table reference
tbody= d3.select("tbody");

//make this a function
function showTable(data){
    //clear tbody
    tbody.html("");
    //define counter to store data len
    count=0;
    // displays all rows
    data.forEach((record) => {
        //add tr
        var row = tbody.append("tr");
        //increment count
        count+=1;
        //get key values for each record
        Object.entries(record).forEach(([key, value]) => {
        //add value to each cell
        var cell = row.append("td");
        cell.text(value);
        });
    });
    if(count==0){
        tbody.append("h1").text("No recods in the selected date found")
    }
}

//call show table
showTable(data);

//get refference to input
input= d3.select("input");
//get refference to button
button= d3.select("button");

//add event to button
button.on("click", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    var inputDate=input.property("value");

    var filteredData=data.filter(data=> data["datetime"] == inputDate);
    //console.log(filteredData);
    //call show table on filtered data
    showTable(filteredData);
});

//add event to input
input.on("keyup", function(){
    d3.event.preventDefault();
    console.log(d3.event.keyCode);
    var key=d3.event.keyCode;
    if(key===13){
        d3.event.preventDefault();
    }
}, false);