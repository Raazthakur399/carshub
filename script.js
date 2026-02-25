

function showMessage(num) {
    const info = document.querySelectorAll(".car-info");
    info[num].classList.toggle("hidden");
    
    const btn = document.querySelectorAll(".info-btn");
    if (info[num].classList.contains("hidden")) {
        btn[num].textContent = "Show Info";
    } else {
        btn[num].textContent = "Hide Info";
    }   
}

function togglecontact() {
    window.location.href = "contact.html";
}       
document.getElementById("contact-form").addEventListener("submit"), function(e){
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you shortly.");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    console.log("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
if(name === "" && email === "" && message === ""){
 successMsg.style.color = "red";
    successMsg.innertext="Please fill out all fields";
} else {
    successMsg.style.color = "green";
    successMsg.innertext="Your message has been sent successfully!";
    document.getElementById("contact-form").reset();
}
}

 loginbox

function handlecredentialresponse(response) {
    console.log("Google Token:" , response.credential);
   
    alert("Login Successful! with google");
}