let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let btnSubmit = document.getElementById("btn_submit");
const remainCharSpan = document.getElementById("charCount");


const showRemainChar = () => {
    if (lastName.value.length > 0) {
        remainCharSpan.style.visibility = "visible";
        remainCharSpan.innerText = lastName.value.length + "/40";
    }
    else{
        remainCharSpan.style.visibility = "hidden";
    }
}
lastName.addEventListener("keyup", showRemainChar);

const validateEmail = () => {
    let errorSpan = document.getElementById("error_span");
    const regexPattern = /\S+\@+\S+\.+\S/;
    if (!regexPattern.test(email.value)) {
        errorSpan.innerHTML = "invalid email address!";
        errorSpan.style.color = "red";
    }
    else{
        errorSpan.innerHTML = "your email is valid";
        errorSpan.style.color = "green";
    }
}