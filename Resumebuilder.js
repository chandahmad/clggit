const root = document.getElementById("root");

root.innerHTML = `
    <h1>Resume Builder</h1>

    <label>Name:</label>
    <input type="text" id="name">
    <br><br>

    <label>Roll No:</label>
    <input type="text" id="roll">
    <br><br>

    <label>City:</label>
    <input type="text" id="city">
    <br><br>

    <button id="showResume">Show Resume</button>

    <div id="resume"></div>
`;

const name = document.getElementById("name");
const roll = document.getElementById("roll");
const city = document.getElementById("city");

const button = document.getElementById("showResume");
const resume = document.getElementById("resume");

button.addEventListener("click", function () {

    resume.innerHTML = `
        <hr>
        <h2>My Resume</h2>

        <h3>Name: ${name.value}</h3>
        <h3>Roll No: ${roll.value}</h3>
        <h3>City: ${city.value}</h3>
    `;
});