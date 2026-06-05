function setGay(value) {
    localStorage.setItem('Gay', value);
    document.getElementById('Gayid').innerHTML = 'Текущее значение: <strong>' + value + '</strong>';
}

function updateStats() {
    const visitCount = Number(localStorage.getItem('visitCount') || 0);
    const spinCount = Number(localStorage.getItem('spinCount') || 0);
    const lastVisit = localStorage.getItem('lastVisit') || '—';

    document.getElementById('visitCount').textContent = visitCount;
    document.getElementById('spinCount').textContent = spinCount;
    document.getElementById('lastVisit').textContent = lastVisit;
    document.getElementById('statsUpdated').textContent = new Date().toLocaleString();
}

function countVisit() {
    const visits = Number(localStorage.getItem('visitCount') || 0) + 1;
    localStorage.setItem('visitCount', visits);
    localStorage.setItem('lastVisit', new Date().toLocaleString());
}

function trackSpin() {
    const count = Number(localStorage.getItem('spinCount') || 0) + 1;
    localStorage.setItem('spinCount', count);
}

window.addEventListener('DOMContentLoaded', () => {
    countVisit();
    const storedGay = localStorage.getItem('Gay') || '—';
    document.getElementById('Gayid').innerHTML = 'Текущее значение: <strong>' + storedGay + '</strong>';
    updateStats();

    const spinButton = document.getElementById('spinSlotsButton');
    if (spinButton) {
        spinButton.addEventListener('click', () => {
            trackSpin();
            window.location.href = '/bubkin007/tests/slots/index.html';
        });
    }
});
