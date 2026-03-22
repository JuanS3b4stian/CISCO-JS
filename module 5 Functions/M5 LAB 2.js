let contacts = [
{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
},
{
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
},
{
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}
];

// Mostrar un contacto específico
function showContact(contacts, index) {
    // If contact is not an Array, error (exercise's requiremnt)
    if (!(contacts instanceof Array)) {
        console.log("Error: contacts is not an array");
        return;
    }

    if (index >= 0 && index < contacts.length) {
        let contact = contacts[index];
        console.log(contact.name + " / " + contact.phone + " / " + contact.email);
    } else {
        console.log("Error: Index out of bounds");
    }
}

// Mostrar todos los contactos
function showAllContacts(contacts) {
    // If contact is not an Array, error (exercise's requiremnt)
    if (!(contacts instanceof Array)) {
        console.log("Error: contacts is not an array");
        return;
    }

    for (let contact of contacts) {
        console.log(contact.name + " / " + contact.phone + " / " + contact.email);
    }
}

// Agregar un nuevo contacto
function addNewContact(contacts, name, phone, email) {
    // If contact is not an Array, error (exercise's requiremnt)
    if (!(contacts instanceof Array)) {
        console.log("Error: contacts is not an array");
        return;
    }

    if (name === "" || phone === "" || email === "") {
        console.log("Error: Incomplete Data");
        return;
    }

    contacts.push({
        name: name,
        phone: phone,
        email: email
    });
}

/* We will use the functions to add one more item of functionality. Arrays have a sort method that allows 
us to sort their elements. To this method, we pass a function which should compare two elements 
of the array and decide which one is smaller and which one is bigger. 
If the first element is smaller, the function returns a value less than zero, 
if they are equal it returns zero, and if the first is larger, it returns a value greater than zero. 
For example, the array: 

let numbers = [10, 50, 40, 20];

can be sorted in ascending order with a call:

numbers.sort(function (a, b) {
     let retVal = 0;
     if (a > b) {
      retVal = 1;
     } else {
      retVal = -1;
     }
     return retVal;
});

or more simply:

numbers.sort((a, b) => a - b);

Give the user the option to select a sort action from the list. When this option is selected, 
the user should be able to specify whether they want to sort the contacts by name, phone, or email.

*/

function sortContacts(contacts, sortOption) {
    if (!(contacts instanceof Array)) {
        console.log("Error: contacts is not an array");
        return;
    }

    if (!sortOption) {
        console.log("Error: Invalid criteria");
        return;
    }

    contacts.sort((a, b) => {
        let valA = a[sortOption].toLowerCase();
        let valB = b[sortOption].toLowerCase();

        if (valA > valB) return 1;
        if (valA < valB) return -1;
        return 0;
    });

    console.log(`Sorted by ${sortOption}`);
}

let option;

do {
    option = prompt("Choose option: show / showAll / add / sort / exit");

    switch(option) {

        case "show":
            let index = prompt("Enter contact index:");
            showContact(contacts, Number(index));
            break;

        case "showAll":
            showAllContacts(contacts);
            break;

        case "add":
            let name = prompt("Enter name:");
            let phone = prompt("Enter phone:");
            let email = prompt("Enter email:");
            addNewContact(contacts, name, phone, email);
            break;

        case "sort":
            let sortOption = prompt("Sort by: name / phone / email");

            if (sortOption === "name" || sortOption === "phone" || sortOption === "email") {
                sortContacts(contacts, sortOption);
                showAllContacts(contacts);
            } else {
                console.log("Invalid criteria");
            }
            break;

        case "exit":
            console.log("Program finished");
            break;

        default:
            console.log("Invalid option");
    }

} while (option !== "exit");