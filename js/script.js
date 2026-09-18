//js/Script.js
// SWAG CARTEL
// Main JavaScript file

//console.log("SWAG CARTEL website loaded successfully.");

// js/script.js
// SWAG CARTEL
// Main JavaScript file
//<script src="js/script.js"></script>
//console.log("message as been sent successfully");

// js/script.js
// SWAG CARTEL
// Main JavaScript file

// Confirmation popup for contact form
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // stop actual submission (front-end only)

    let popup = document.getElementById("popup");
    popup.style.display = "block";

    // hide after 3 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);

    console.log("Message has been sent successfully");
});
