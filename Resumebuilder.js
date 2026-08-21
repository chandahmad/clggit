// const root = document.getElementById("root");

// root.innerHTML = `
//     <h1>Resume Builder</h1>
//     <label>Name:</label>
//     <input type="text" id="name">
//     <br><br>
//     <label>Roll No:</label>
//     <input type="text" id="roll">
//     <br><br>
//     <label>City:</label>
//     <input type="text" id="city">
//     <br><br>
//     <button id="showResume">Show Resume</button>
//     <div id="resume"></div>
// `;
// const name = document.getElementById("name");
// const roll = document.getElementById("roll");
// const city = document.getElementById("city");
// const button = document.getElementById("showResume");
// const resume = document.getElementById("resume");
// button.addEventListener("click", function () {

//     resume.innerHTML = `
//         <hr>
//         <h2>My Resume</h2>

//         <h3>Name: ${name.value}</h3>
//         <h3>Roll No: ${roll.value}</h3>
//         <h3>City: ${city.value}</h3>
//     `;
// });


const root = document.getElementById("root");

// Show Resume button
const button = document.createElement("button");
button.innerText = "Show Resume";

button.style.fontSize = "15px";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#5238e6";
// button.style.color = "white";

button.style.borderRadius = "20px";
button.style.cursor = "pointer";

root.appendChild(button);


// Button click
button.addEventListener("click", function () {

    // Remove button
    root.removeChild(button);

    // Resume container
    const resume = document.createElement("div");

    resume.style.width = "700px";
    resume.style.margin = "30px auto";
    resume.style.padding = "30px";
    resume.style.border = "1px solid black";
    resume.style.fontFamily = "Arial";


    // Name
    const name = document.createElement("h1");
    name.innerText = "Chand Ahmad";
    name.style.textAlign = "center";

    resume.appendChild(name);


    // Contact
    const contact = document.createElement("p");
    contact.innerText =
        "Email: chand@gmail.com | Phone: 9876543210 | Ghaziabad";

    contact.style.textAlign = "center";

    resume.appendChild(contact);


    // Line
    resume.appendChild(document.createElement("hr"));


    // Career Objective
    const objectiveHeading = document.createElement("h2");
    objectiveHeading.innerText = "Career Objective";

    const objective = document.createElement("p");
    objective.innerText =
        "To obtain a challenging position where I can use my technical skills and grow professionally.";

    resume.appendChild(objectiveHeading);
    resume.appendChild(objective);


    // Education
    const educationHeading = document.createElement("h2");
    educationHeading.innerText = "Education";

    const education = document.createElement("p");
    education.innerText =
        "B.Tech in Computer Science\nABES Engineering College\n2023 - 2027";

    resume.appendChild(educationHeading);
    resume.appendChild(education);


    // Skills
    const skillsHeading = document.createElement("h2");
    skillsHeading.innerText = "Skills";

    const skills = document.createElement("p");
    skills.innerText =
        "Java, C++, JavaScript, HTML, CSS, SQL";

    resume.appendChild(skillsHeading);
    resume.appendChild(skills);


    // Projects
    const projectHeading = document.createElement("h2");
    projectHeading.innerText = "Projects";

    const projects = document.createElement("p");
    projects.innerText =
        "1. Resume Builder using JavaScript DOM\n" +
        "2. Forest Fire Prediction System";

    resume.appendChild(projectHeading);
    resume.appendChild(projects);


    // Experience
    const experienceHeading = document.createElement("h2");
    experienceHeading.innerText = "Experience";

    const experience = document.createElement("p");
    experience.innerText = "Fresher";

    resume.appendChild(experienceHeading);
    resume.appendChild(experience);


    // Hobbies
    const hobbiesHeading = document.createElement("h2");
    hobbiesHeading.innerText = "Hobbies";

    const hobbies = document.createElement("p");
    hobbies.innerText =
        "Coding, Cricket, Learning New Technologies";

    resume.appendChild(hobbiesHeading);
    resume.appendChild(hobbies);


    // Roll No
    const roll = document.createElement("p");
    roll.innerText = "Roll No: 101";

    resume.appendChild(roll);


    // Add resume to webpage
    root.appendChild(resume);
});