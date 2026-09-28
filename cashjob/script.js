// Werkly Home - JavaScript

const searchInput = document.getElementById("search");
const jobs = [...document.querySelectorAll(".job")];
const noResults = document.getElementById("noResults");
const categories = document.querySelectorAll(".category");

let activeCategory = "Alles";

function updateJobs() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let visibleJobs = 0;

    jobs.forEach(job => {
        const searchData = job.dataset.search.toLowerCase();

        const matchesSearch = searchData.includes(searchTerm);

        const matchesCategory =
            activeCategory === "Alles" ||
            job.dataset.category === activeCategory;

        const showJob = matchesSearch && matchesCategory;

        job.style.display = showJob ? "grid" : "none";

        if (showJob) {
            visibleJobs++;
        }
    });

    noResults.style.display =
        visibleJobs === 0 ? "block" : "none";
}

searchInput.addEventListener("input", updateJobs);

categories.forEach(category => {
    category.addEventListener("click", () => {

        categories.forEach(button => {
            button.classList.remove("active");
        });

        category.classList.add("active");

        activeCategory = category.dataset.category;

        updateJobs();
    });
});

function toggleFavorite(button) {
    if (button.textContent.trim() === "♡") {
        button.textContent = "♥";
        button.classList.add("saved");
    } else {
        button.textContent = "♡";
        button.classList.remove("saved");
    }
}

function selectFilter(filter) {
    alert(filter + " filter wordt later gekoppeld.");
}

function showAllJobs() {
    alert("Hier komt straks de volledige vacaturepagina.");
}

function showNotification() {
    alert("Je hebt momenteel geen nieuwe meldingen.");
}

function navigate(page) {
    if (page === "home") {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        return;
    }

    alert(
        "De pagina '" +
        page +
        "' wordt door een ander teamlid gebouwd."
    );
}
