function saveName() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    if (name) {
        localStorage.setItem('savedName', name);
        document.getElementById('savedName').textContent = name;
    }
}
function removeName() {
    localStorage.removeItem('savedName');
    document.getElementById('savedName').textContent = '';
    document.getElementById('name').value = '';
}
const savedName = localStorage.getItem('savedName');
        if (savedName) {
            document.getElementById('savedName').textContent = savedName;
        }
        document.getElementById('saveBtn').addEventListener('click', saveName);
        document.getElementById('removeBtn').addEventListener('click', removeName);
        