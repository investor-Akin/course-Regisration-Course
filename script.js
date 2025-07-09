let details = []
function upload(event) {
    event.preventDefault();

let name = studentName.value;
let dept = department.value;
let levelUser = level.value;
let semesterUser = semester.value;
let selectedRadio = outstandingInput.value;
let selectedOutstanding = outstandingInput.value;

// this checkboxes no too really clear i use Ai to make it clear and to write the code i no need to lie 
let allCourseCheckboxes = document.querySelectorAll('.course-checkbox');
let selectedCourses = [];
for (let checkbox of allCourseCheckboxes) {
    if (checkbox.checked) {
        selectedCourses.push(checkbox.value);
    }
}

let studentData = {
    name: name,
    dept: dept,
    level: levelUser,
    semester: semesterUser,
    // hasOutstanding: selectedRadio.value,
    hasOutstanding: selectedOutstanding, // Assuming this is a string "Yes" or "No"
    courses: selectedCourses,
};

    details.push(studentData);
    for (let index = 0; index < details.length; index++) {
        show.innerHTML += `
        <tr>
            <td>${details[index].name}</td>
            <td>${details[index].dept}</td>
            <td>${details[index].level}</td>
            <td>${details[index].semester}</td>
            <td>${details[index].hasOutstanding}</td>
            <td>${details[index].courses}</td>`
    }

    details = []
    // Clear the form after submission also used Ai buh i understand the code
    event.target.reset(); 
}