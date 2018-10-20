// Write your JS here

//Hero object


let hero = {
    name: "Hero",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "great sword",
        damage: 2,
    },
};

console.log(hero);

let thing = hero.inventory;
thing.splice(0, 1);
console.log(thing);

//the rest function restores health to everyone that invokes it 
function rest(name) {
    const object = "health";
    const value = 10;
    name[object] = value;

    return name;
}

//the player can use the heart icon to invoke the rest funcion
document.getElementById("inn").addEventListener("click", function () {
    rest(hero);
    console.log(`${hero.name} feels reinvigorated! His health is restored to ${hero.health}hp`)
});

//the pickUpItem function picks up an item and puts it as last item in the inventory 
//of everyone that invokes it
function pickUpItem(name, item) {
    name.inventory.push(item);
};

//the dagger item
let item = {
    dagger: {
        type: "dagger",
        damage: 2,
    },
    bow: {
        type: "bow",
        damage: 3,
    },
};

//on clicking the dagger icon the hero will pick up that dagger
//and place it in its inventory
document.getElementById("dagger").addEventListener("click", function () {
    pickUpItem(hero, item.dagger);
    console.log(`${hero.name} picked up a ${item.dagger.type} and put it in his inventory`)
});

document.getElementById("bow").addEventListener("click", function () {
    pickUpItem(hero, item.bow);
    console.log(`${hero.name} picked up a ${item.bow.type} and put it in his inventory`)
});


function equipWeapon(name) {
    name["weapon"] = name.inventory[0];

    if (name.inventory.length === 0 || []) {
        return `${name.name}'s inventory is empty!`
    };
};


document.getElementById("bag").addEventListener("click", function () {
    equipWeapon(hero);
    console.log(`${hero.name} equiped a new weapon!`)
});














