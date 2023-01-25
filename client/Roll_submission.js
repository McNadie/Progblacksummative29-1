const endpointRoot = 'http://127.0.0.1:8090/';

async function Load_Roll () {
     const RollResponse = await fetch(endpointRoot + 'Roll/Load');
     const RollAreaText = await RollResponse.text();
     const RollAreas = JSON.parse(RollAreaText);
     step = 1;
     sum=0;
     for (var item in RollAreas){
        if (item !== null && item !== ""){
            data = RollAreas[item]
            Table = document.getElementById("Roll_table");
            Table.rows[step].cells[1].innerHTML=data[0];
            Table.rows[step].cells[2].innerHTML=data[1];   
            step =step+1;
            var a = parseInt(data[0])
            if (Number.isInteger(a)){
            sum=sum+a;};
        }
        }
        document.getElementById("sum").innerHTML = ("Sum:" + sum);
      }




async function Clear_Roll () {
    try{
        const RollResponse = await fetch(endpointRoot + 'Roll/Clear');
    document.getElementById("result").innerHTML = "";
    document.getElementById("sum").innerHTML = ("Sum:0");
    for (let step = 1; step < 8; step++) {
        Table = document.getElementById("Roll_table");
        Table.rows[step].cells[1].innerHTML="";
        Table.rows[step].cells[2].innerHTML="";}}
        catch(error){alert("Server is down")}
      }





async function Roll_submit () {
const Roll = document.getElementById('response');
const HB = document.getElementById('result');
Roll.addEventListener('submit', async function (event) {
    try{
    event.preventDefault();
    if (document.getElementById("result").innerHTML !== ""){
    const data = new FormData(Roll);
    data.append("HB",result.innerHTML);
    const dataJSON = JSON.stringify(Object.fromEntries(data));
    const response = await fetch(endpointRoot + 'Roll/Submit',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: dataJSON,HB
    });
    console.log(response.body);
    document.getElementById("errormsg").innerHTML="";
    Load_Roll();
    Roll.reset();
}
else{
    document.getElementById("errormsg").innerHTML= "Houseblock needs to be selected";
}
    } catch(error){alert("Server is down")}
});
}

document.addEventListener('DOMContentLoaded', Load_Roll);
document.addEventListener('DOMContentLoaded', Roll_submit);
