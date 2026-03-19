/* During the last modification of the program with the contact list, we allow the user to add a new 
contact with the data entered by the user while the program is executing. 
Let's go a step further – try to modify the program so that the user has a 
choice of what they want to do with the list. They will have a choice of:

showing the first contact (first)
showing the last contact (last)
adding a new contact (new)
When adding a new contact, check if the user has entered all the necessary data. 
If at least one of the three values is missing (name, phone, or email) don't add the contact. */

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

console.log("Show the first contact (1)");
console.log("Show the last contact (2)");
console.log("Add a new contact (3)");

let option = Number(prompt("Choose what do you want to do with the contact list: "));

if (!(Number.isNaN(option))) {

    switch (option){
    case 1:
        console.log("The first contact is: ");
        console.log(contacts[0]);
        break;
    case 2:
        let lastContact = contacts.length - 1;
        console.log("The last contact is: ");
        console.log(contacts[lastContact]);
        break;
    case 3:
        console.log("Write the information about the new contact to add: ");
        let nameByUser = prompt("Write the contact name: ");
        let phoneByUser = prompt("Write the contact phone: ");
        let emailByUser = prompt("Write the contact email: ");

        if (nameByUser == "" || phoneByUser == "" || emailByUser == "") {
            alert("You forgot to write the full information, try it again!");
        } else {
            let newContact = {
                name: nameByUser,
                phone: phoneByUser,
                email: emailByUser
            }

            contacts.push(newContact);
            alert("Printing the new contact information on the console: ");
            console.log(`Name: ${nameByUser} / Phone: ${phoneByUser} / Email: ${emailByUser}`);
        }
    }
} else if (option < 1 || option > 3) {
    alert("Non-existent option, try it again!");
} else {
    alert("Write a valid option please, try it again!");
}