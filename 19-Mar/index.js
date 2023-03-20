function getData()  {
    let firstName = document.getElementById("FirstName").value;
    let lastName = document.getElementById("LastName").value;
    let birthDate = document.getElementById("birthDate").value;
    let district = document.getElementById("district").value;
    let state = document.getElementById("state").value;
    let hobby = document.getElementById("hobby").value;
    let courseEnrolled = document.getElementById("courseEnrolled").value;

    let dataObject = {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      district: district,
      state: state,
      hobby: hobby,
      courseEnrolled: courseEnrolled,
    };

    localStorage.setItem("dataObject", JSON.stringify(dataObject));
}