/* Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. 
Try to organize your program code by using functions. 
Define and call three functions in the appropriate places:

showContact: the function should take two arguments; the first is the list of contacts, 
and the second is the index number of the contact to display; inside the function, 
check if the correct arguments are passed, that is, 
if the contacts are an array (use the instanceofArray construction for this);
showAllContacts: the function should take one argument, the list of contacts; 
inside the function, check if the given argument is an array;
addNewContact: the function should take four arguments, a contact list and the data 
of the new contact, that is: name, phone, and number; before adding a new contact, 
check if the passed argument is an array and if the new contact data have any value. */

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

// Ejemplos de uso
showContact(contacts, 1);
showAllContacts(contacts);
addNewContact(contacts, "Juan Perez", "123456", "juan@mail.com");
showAllContacts(contacts);