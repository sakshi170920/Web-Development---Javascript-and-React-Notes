const form = document.querySelector("form");
// function fetchcall() {
//   // (B1) GET FORM DATA
//   var data = new URLSearchParams();
//   data.append('name', document.getElementById("name").value);
//   data.append('email', document.getElementById("email").value);
 
//   // (B2) FETCH
//   fetch("0-dummy.php", {
//     method: 'post',
//     body: data
//   })
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (text) {
//     console.log(text);
//   })
//   .catch(function (error) {
//     console.log(error)
//   });
//   return false;
// }

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email = form.YourEmail.value;
    let name = form.yourName.value;
    let number = form.yourNumber.value;
    let msg = form.yourMessage.value;



    //console.log(email);
})