// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody= d3.select("tbody");
function newTable(data){
    tbody.html("");
    data.forEach((datarow)=>{
        var row =tbody.append("tr");
        Object.values(datarow).forEach((value)=>{
            var cell= row.append("td");
            cell.text(value);

        });
    });
}

newTable(tableData)

function dataFilter(){
    var date= d3.select("#datetime").property("value");
    var filterData= tableData;
    filterData = filterData.filter(row=>row.datetime==date);
    newTable(filterData);
}

d3.selectAll("#filter-btn").on("click", dataFilter);
