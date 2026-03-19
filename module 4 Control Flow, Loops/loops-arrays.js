let names = [];
/*let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}*/
 
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
console.log(names);

let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
 
for (let key in user) {
    console.log(key); // -> name, surname, age, email
};

for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};