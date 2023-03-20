function clearData() {
    window.localStorage.clear("dataObject");
}

let data = localStorage.getItem("dataObject");
let out = JSON.parse(data)

let fullName = (out.firstName + out.lastName)
let birthYear = out.birthDate.split("-")[0];

let age = 2023 - birthYear



function hobbiesMap(q){
    let hobbies = q.split(",").map((word) => word.trimStart()); 
    if(hobbies.length >1){
        return `My hobbies are ${hobbies.slice(
          0,
          hobbies.length - 1
        )} and ${hobbies.slice(-1)}.`;
    }
    else {
        return `My hobby is ${hobbies[0]}.`
    }
    ;
}

function capitalizeFirstChar(q) {
    let upperCase = q.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    return upperCase
}

setTimeout(function populateData() {
  document.getElementById("fullName").innerHTML = fullName.toUpperCase();
  document.getElementById("birthDate").innerHTML = out.birthDate;
  document.getElementById(
    "nameIs"
  ).innerHTML = `My name is ${capitalizeFirstChar(fullName)}.`;
  document.getElementById(
    "ageAndCourse"
  ).innerHTML = `I'm ${age} years old and I'm currently enrolled in ${out.courseEnrolled} course.`;
  document.getElementById(
    "district"
  ).innerHTML = `I'm coming from ${capitalizeFirstChar(
    out.district
  )} district of ${capitalizeFirstChar(out.state)}.`;
  document.getElementById("hobbies").innerHTML = `${hobbiesMap(out.hobby)}`;
  document.getElementById("end").innerHTML = `Thank You`;
},500);





console.log(out)

