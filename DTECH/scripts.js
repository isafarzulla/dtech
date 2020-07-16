// Function expression to select elements

const selectElement = (s) => document.querySelector(s);

// Open Menu on the click

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

// Close Menu on the click

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});