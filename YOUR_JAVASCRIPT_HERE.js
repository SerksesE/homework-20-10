// Write your JS here
const canvas = document.getElementById("canvas").getContext("2d");

//trying to get something moving on the canvas
let heroIcon = {
    icon: "S",
    x: 10,
    spdX: 10,
    y: 5,
    spdY: 10,
};

//measurements of the canvas
const height = 500;
const width = 650;

const message = "Stop!"

//this runs the update code every 50ms = 0.05 seconds
setInterval(updateEntity, 500)

//this makes the icon/letter "S" move over the canvas
function updateEntity() {
    heroIcon.x += heroIcon.spdX;
    heroIcon.y += heroIcon.spdY;
    canvas.fillText(heroIcon.icon, heroIcon.x, heroIcon.y);


    if (heroIcon.x < 0 || heroIcon.x > width) {
        console.log(message);
        heroIcon.spdX = -heroIcon.spdX;
    }
    if (heroIcon.y < 0 || heroIcon.y > height) {
        console.log(message);
        heroIcon.spdY = -heroIcon.spdY;
    }
};


//The Assignment

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


//trying to make the inventory array empty to deal with the test weapon object
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

//the item object holds multiple weapons
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

//on clicking the bow icon the hero will pick up that bow
//and place it in its inventory
document.getElementById("bow").addEventListener("click", function () {
    pickUpItem(hero, item.bow);
    console.log(`${hero.name} picked up a ${item.bow.type} and put it in his inventory`)
});


function equipWeapon(name) {


    if (name.inventory.length === 0) {
        return `${name.name}'s inventory is empty!`
    }
    name["weapon"] = name.inventory[0];
};


document.getElementById("bag").addEventListener("click", function () {
    equipWeapon(hero);
    console.log(`${hero.name} equiped a new weapon!`)
});















