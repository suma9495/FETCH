//createNode function
function createNode(element)
{
    return document.createElement(element);
}
//append function
function append(parent,el)
{
    return parent.appendChild(el);
}

 //adding data to row
 function addRow(emp){ 

    var x = Object.keys(emp);
    console.log(x);

    //emp = {name:"suma",age:"22",salary:"24000"};
    if(!emp.hasOwnProperty(x[0])) return;

    const tr = createNode('div');
    tr.className = "row";

    const td1 = createNode('div');
    td1.className = "col-sm-4";
    td1.innerHTML=emp.employee_name || ""; 
    append(tr,td1);
    
    const td2 = createNode('div');
    td2.className = "col-sm-4";
    td2.innerHTML=emp.employee_age || ""; 
    append(tr,td2);
    
    const td3 = createNode('div');
    td3.className = "col-sm-4";
    td3.innerHTML=emp.employee_salary || ""; 
    append(tr,td3);
    
    append(table,tr);
    }



//fetch
fetch('http://dummy.restapiexample.com/api/v1/employees')

.then(function(response) {
 return response.json();
 })

// creation of row and adding data to it.
.then(function(myJson) {
myJson.forEach(addRow);
console.log(myJson);//array of objects
})


//error function
.catch(function(error){
    console.log(JSON.stringify(error));
    const errorTable = document.getElementById("errorBlock");
    const err = createNode('div');
    err.innerHTML="API ERROR";
    append(errorTable,err);
})

//Declarations
const table = document.getElementById("output");









