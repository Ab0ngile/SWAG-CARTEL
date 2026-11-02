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
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop actual submission (front-end only)

    let popup = document.getElementById("popup");
    popup.style.display = "block";

    // hide after 3 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);

    console.log("Message has been sent successfully");
});

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const filter =
            searchInput.value.toLowerCase();

        const cards =
            document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const text =
                card.textContent.toLowerCase();

            if (text.includes(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

const accordions =
    document.querySelectorAll(".accordion");

accordions.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const panel =
            button.nextElementSibling;

        if (panel.style.display === "block") {

            panel.style.display = "none";

        } else {

            panel.style.display = "block";

        }

    });

    const accordions =
        document.querySelectorAll(".accordion");

    accordions.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("active");

            const panel =
                button.nextElementSibling;

            if (panel.style.display === "block") {

                panel.style.display = "none";

            } else {

                panel.style.display = "block";

            }

        });

    });
})