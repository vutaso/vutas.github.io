document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", function() {
            const answer = item.querySelector(".faq-answer");
            const symbol = item.querySelector("span");
            
            if (answer.style.display === "block") {
                answer.style.display = "none";
                symbol.textContent = "+";
            } else {
                answer.style.display = "block";
                symbol.textContent = "-";
            }
        });
    });
});
