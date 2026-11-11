
function calculateGrade() {

    let name = document.getElementById("studentName").value.trim();

    let subjects = [
        "english",
        "maths",
        "computer",
        "science",
        "economics"
    ];

    if (name === "") {
        alert("Please enter student name.");
        return;
    }

    let marks = [];

    for (let subject of subjects) {

        let value = document.getElementById(subject).value;

        if (value === "") {
            alert("Please enter all subject marks.");
            return;
        }

        let mark = Number(value);

        if (!Number.isFinite(mark) || mark < 0 || mark > 100) {
            alert("Marks must be between 0 and 100.");
            return;
        }

        marks.push(mark);
    }

    let total = marks.reduce((a, b) => a + b, 0);

    let percentage = total / 5;

    let passed = marks.every(mark => mark >= 33);

    let grade;

    if (!passed) {
        grade = "F";
    } else if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    let status = passed ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        "<h3>Student Result</h3>" +
        "Name: " + name.replace(/[&<>\"']/g, "") + "<br>" +
        "Total Marks: " + total + " / 500<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + status;

    document.getElementById("result").style.background =
        passed ? "#dcfce7" : "#fee2e2";

    document.getElementById("result").style.color =
        passed ? "#166534" : "#991b1b";
}
