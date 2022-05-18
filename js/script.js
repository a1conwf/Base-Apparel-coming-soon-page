const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", e => {
    e.preventDefault();

    //Get input value
    const emailValue = email.value;

    if (emailValue != "") {
        if (!validateEmail(emailValue)) {
            form.classList.add("error")
        } else {
            form.classList.remove("error");
            alert("Thank you for providing an email address!");
        }
    } else {
        alert("Please provide an email address!");
    }
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
};