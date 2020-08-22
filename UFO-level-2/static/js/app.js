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
// function to set intial filter when page is loaded
function intialFilter(data) {
    //create list to store values for dropdown menus
    var cities= [];
    var countries=[];
    var states=[];
    var dates=[];
    var shapes=[];
    //loop through data and get unique values
    data.forEach(record=>{
        //get unique dates
        if( !dates.includes(record["datetime"]) ){
            dates.push(record["datetime"]);
            console.log(record["datetime"]);
        }  
        //get unique countries
        if( !countries.includes(record["country"]) ){
            countries.push(record["country"]);
            
        }  
        //get unique states
        if( !states.includes(record["state"]) ){
            states.push(record["state"]);
            
        }  
        //get unique cities
        if( !cities.includes(record["city"]) ){
            cities.push(record["city"]);
           
        } 
        //get unique shapes
        if( !shapes.includes(record["shape"]) ){
            shapes.push(record["shape"]);
            
        } 

    });
    //append these options in the dropdown
    //find dropdown
    var date= d3.select("#date");
    var country=d3.select("#country");
    var state= d3.select("#state");
    var city=d3.select("#city");
    var shape= d3.select("#shape");
  
    //for each unique date add to drop down
    dates.forEach(dateVal=>{
        option=date.append("option").text(dateVal);
        option.attr("value", dateVal);
    });

    //for each unique country add to drop down
    countries.forEach(countryVal=>{
        option=country.append("option").text(countryVal);
        option.attr("value", countryVal);
    });

    //for each unique state add to drop down
    states.forEach(stateVal=>{
        option=state.append("option").text(stateVal);
        option.attr("value", stateVal);
    });

    //for each unique city add to drop down
    cities.forEach(cityVal=>{
        option=city.append("option").text(cityVal);
        option.attr("value", cityVal);
    });

    //for each unique shape add to drop down
    shapes.forEach(shapeVal=>{
        option=shape.append("option").text(shapeVal);
        option.attr("value", shapeVal);
    });

    


}



//call show table
showTable(data);
intialFilter(data);
//get refference to input
//var input= d3.select("input");
//add event to input
//input.on("change", function(){
    //var inputDate=this.value;
    //var filteredData=data.filter(data=> data["datetime"] == inputDate);
    //console.log(filteredData);
    //call show table on filtered data
    //showTable(filteredData);
    
//});


