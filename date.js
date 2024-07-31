// Funkcja formatująca datę
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Funkcja formatująca dzień tygodnia
function getDayOfWeek(date) {
    const options = { weekday: 'long' };
    return date.toLocaleDateString(undefined, options);
}

// Pobranie dzisiejszej daty
const today = new Date();

// Aktualizacja treści w HTML
document.getElementById('date').textContent = formatDate(today);
document.getElementById('day').textContent = getDayOfWeek(today);
