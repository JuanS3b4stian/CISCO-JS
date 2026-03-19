/* We can improve our contact list program a bit by using loops. 
You can now try to display not only the first or last contact, 
but all contacts in the list, regardless of their number.

Additionally, try to enclose the whole program in a loop so that the user is repeatedly 
asked what they want to do. The user can choose to:

display the first contact (first)
display the last contact (last)
display all contacts (all)
add a new contact (new)
exit the program (quit)
After executing the selected action, the program will give the opportunity to choose again. 
The program should end the actions only after the user gives a specified command, for example quit. */

let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }
    , 
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    }
    , 
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }  
];

let option;

do {
    console.log("---------- Welcome to the contacts list ----------");
    console.log("Display the first contact (first)");
    console.log("Display the last contact (last)");
    console.log("Display all the contacts (all)");
    console.log("Add a new contact (new)");
    console.log("Exit the program (quit)");

    option = prompt("Choose an option: ")
    switch (option) {
        case "first":
            let firstContact = contacts[0];
            console.log(`${firstContact.name} / ${firstContact.phone} / ${firstContact.email}`);
            break;

        case "last":
            let lastContact = contacts.length - 1;
            console.log(`${contacts[lastContact].name} / ${contacts[lastContact].phone} / ${contacts[lastContact].email}`);
            break;

        case "all":
            for (let contact of contacts) {
                console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
            }
            break;

        case "new":
            let newContactName = prompt("Write the name: ");
            let newContactPhone = prompt("Write the phone: ");
            let newContactEmail = prompt("Write the email: ");

            let newContact = {
                name: newContactName,
                phone: newContactPhone,
                email: newContactEmail
            };

            contacts.push(newContact);

            alert("New Contact added!");
            break;
        
        case "quit":
            alert("See you later!");
            break;

        default:
            alert("That's not an option, try it again!");
            break;

    }

} while (option != "quit");