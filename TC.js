function startCounter() {
    let counterValue = sessionStorage.getItem('counterValue');
    if (!counterValue) {
        counterValue = 0;
    } else {
        counterValue = parseInt(counterValue);
    }

    const counterElement = document.getElementById('counter');

    function updateCounter() {
        counterValue++;
        counterElement.textContent = counterValue;
        sessionStorage.setItem('counterValue', counterValue);
    }

    
    setInterval(updateCounter, 1000);
}


startCounter();
