// Inputs
const inputName = document.getElementById("exampleInputName");
const inputLastName = document.getElementById("exampleInputLastname");
const inputEmail = document.getElementById("exampleInputEmail");
const inputCountry = document.getElementById("exampleInputCountry");
const inputOccupation = document.getElementById("exampleInputOccupation");
const inputDescription = document.getElementById("floatingTextarea");

const alertSuccess = document.querySelector(".alert-success");
const alertDanger= document.querySelector(".alert-danger");

const btnSubmit = document.getElementById("send-btn");

// Form functionality
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const userInfo = {
        nombre: inputName.value,
        apellido: inputLastName.value,
        email: inputEmail.value,
        pais: inputCountry.value,
        ocupacion: inputCountry.value,
        descripcion: inputDescription.value 
    }

    fetch("http://localhost:3000/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        alertSuccess.innerHTML = data.message;
        alertSuccess.classList.remove('d-none');
    })
})