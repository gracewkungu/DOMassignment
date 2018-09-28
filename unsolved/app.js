
function displayemployees (){
      for (let i=0; i<employeeList.length; i++){
        
        $('#employees').append(`<p>${employeeList[i].name}</p>`);
        console.log(employeeList[i].name);
       
      }
    };
$("#view").on("click", displayemployees)

function add (){
 const name= prompt("What is your name?");
 const phoneNum = prompt("What is your phone number?");
 const officeNum = prompt("What is your office number?");
  
employeeList.push({name:name, phoneNum:phoneNum,officeNum:officeNum});
}
$("#verify").on("click", add)


function verify(){
  const name= prompt("What is your name?");
  for (let i=0; i<employeeList.length; i++){
    if (name === employeeList[i].name) {
      alert ('Yes, your name is in the addressbook.');}
      else{
        alert ('Sorry, you are not in the addressbook.');
    }
  }

}
$("#verify").on("click", verify)


function update(){
  const name= prompt("What is your name?");
  const phoneNum = prompt("What is your phone number?");
  const officeNum = prompt("What is your office number?");
 
  for (let i=0; i<employeeList.length; i++){ 
  if(name ===employeeList[i]){
    employeeList[i].push({name:name, phoneNum:phoneNum,officeNum:officeNum});
    prompt("your information has been updated in the addressbook");
  }
else{
  
} 
 $("#verify").on("click", update)
}


function nomore(){
  const name= prompt("What is your name?");
  
  for (let i=0; i<employeeList.length; i++){ 
  if(name ===employeeList[i]){
    prompt("your number will be deleted the addressbook");
    delete employeeList[i];
  }
else{
   prompt ('No changes to your information')
} 
 $("#verify").on("click", nomore)
}
}}