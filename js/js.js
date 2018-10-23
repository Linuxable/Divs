document.addEventListener("keydown",keyDownHandler,false);

const reload = ()=> document.location.reload();
//setInterval(reload, 1500);
let x = 0;
const showDiv = ()=>{
  x++;
  if(x === 1){
    document.getElementById('window').style.display = "block";
    document.getElementById('container').style.display = "block";
    console.log("showDiv");
  }else if(x === 2){
    document.getElementById('window').style.display = "none";
    document.getElementById('container').style.display = "none";
    console.log("delDiv");
    x = 0;
  }
}
let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
const getDate = (x)=>{
  switch (x) {
    case 1:
      return "January";
      break;
    case 2:
      return "February";
      break;
    case 3:
      return "March";
      break;
    case 4:
      return "April";
      break;
    case 5:
      return "May";
      break;
    case 6:
      return "June";
      break;
    case 7:
      return "July";
      break;
    case 8:
      return "August";
      break;
    case 9:
      return "September";
      break;
    case 10:
      return "October";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "December";
      break;
  }
}
console.log(m);
console.log(getDate(m));
let month = getDate(m);
const outputDate = ()=>{
  document.getElementById('dag').innerHTML = d;
  document.getElementById('maand').innerHTML = month;
}
outputDate();
//Enter voor de user input
let name;
let nameNum;

function getName(){
  name = document.getElementById("username").value;
  nameNum = name.length;
  if(nameNum === 0){
    window.alert("Please enter someting")
  }else{
    document.getElementById("name_show").innerHTML = name;
    document.getElementById("input").style.display = "none";
  }
}

function keyDownHandler(e){
	if(e.keyCode==13){
		getName();
	}
}
