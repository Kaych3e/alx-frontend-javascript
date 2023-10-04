// define interface for object Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// create two students
const student1: Student = {
    firstName: "Nkechi",
    lastName: "Aduba",
    age: 20,
    location: "Abuja"
};

const student2: Student = {
    firstName: "Amaka",
    lastName: "West",
    age: 25,
    location: "Lagos"
};

// create array for the two students
const studentsList: Student[] = [student1, student2];

//render table for the elements in array
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const thread: HTMLTableSectionElement = document.createElement("thread");
const tr: HTMLTableRowElement = thread.insertRow(0);
const th1: HTMLTableCellElement = tr.insertCell(0);
const th2: HTMLTableCellElement = tr.insertCell(1);

th1.innerHTML = "firstName";
th2.innerHTML = "location";
table.appendChild(thread);

studentsList.forEach((student) => {
    const tr: HTMLTableRowElement = tbody.insertRow(0);
    const td1: HTMLTableCellElement = tr.insertCell(0);
    const td2: HTMLTableCellElement = tr.insertCell(1);

    td1.innerHTML = student.firstName;
    td2.innerHTML = student.location;
});

// append tbody to the table
table.appendChild(tbody);
document.body.appendChild(table);
