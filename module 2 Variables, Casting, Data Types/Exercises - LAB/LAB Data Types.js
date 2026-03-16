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

/* At the end of the list declared in this way, add a new contact using the appropriate array method. 
The new contact is: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

Display the first and last contact, again in the format: name / phone / email. 
Use the length property of the array to determine the index of the last element. 
Remember that the array elements are indexed starting at 0. */

let newContact = {

    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
};

contacts.push(newContact);
console.log(contacts[0].name , contacts[0].phone , contacts[0].email);
console.log(contacts[3].name , contacts[3].phone , contacts[3].email);