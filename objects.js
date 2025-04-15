let mVakharia = {
    favourites: {
        'Foods': ['pizza', 'sushi', 'ice cream'],
        'Drinks': ['water', 'coffee', 'Dr Pepper'],
    },

    car: {
        make: 'Toyota',
        model: 'Prius',
        'Year of manufacture': 2007
    },

    backpack: {
        brand: 'The North Face',
    },

    tech: {
        phone: {
            brand: 'Xiaomi',
            model: 'Poco F6 Pro',
            'Year of release': 2024,
        },
        PC: {
            CPU: {
                make: 'AMD',
                model: 'Ryzen 7 3700X',
                'Year of release': 2019,
            },
            GPU: {
                make: 'NVIDIA',
                model: 'Geforce 1660 Super',
                VRAM: '6GB',
                'Year of release': 2019,
            }
        },
        mouse: {
            brand: 'Logitech',
            model: 'MX518 Legendary',
        },

        laptop: {
            brand: 'Lenovo',
            model: 'Legion 5P',
            'Year of release': 2021,

        },
        console: {
            brand: 'Xbox One',
            dateOfPurchase: '2016',
        },
        controller: {
            brand: 'Xbox One',
            dateOfPurchase: '2016',
        },
        headphones: {
            brand: 'AKG',
            model: 'K702',
            'Earphone Pad Color': 'crimson'
        },
    },

    oldTech: {
        'My old phones': ['Samsung Galaxy S2', 'Xperia Z2', 'iPhone 3G'],
        'My old CPUs': ['Intel Pentium Dual Core', 'AMD Phenom II X4'],
    },
}



function addCarColor() {
    console.log(mVakharia.car);

    //The 'color' property doesn't exist in 'mVakharia.car' before this line of code executes. 
    mVakharia.car.color = 'black';

    console.log(mVakharia.car);
}

addCarColor();

function addPhoneResolution() {
    console.log(mVakharia.tech.phone);

    mVakharia.tech.phone.resolution = '1440x3200';

    console.log(mVakharia.tech.phone);
}

addPhoneResolution();

function addCPUCoreInfo() {
    console.log(mVakharia.tech.PC.CPU);

    mVakharia.tech.PC.CPU.cores = 8;

    console.log(mVakharia.tech.PC.CPU);
}

addCPUCoreInfo();

function addGameConsoleColor() {
    console.log(mVakharia.tech.console);

    mVakharia.tech.console.color = 'black';

    console.log(mVakharia.tech.console);
}

addGameConsoleColor();

function addGameControllerCover() {
    console.log(mVakharia.tech.controller);

    mVakharia.tech.controller.color = 'black';

    console.log(mVakharia.tech.controller);
}

addGameControllerCover();

function addBackpackColor() {
    console.log(mVakharia.backpack);

    mVakharia.backpack.color = 'charcoal';

    console.log(mVakharia.backpack);
}

addBackpackColor();


/* How to access properties which have strings for names. */

console.log(mVakharia.car['Year of manufacture']);

console.log(myPhone['Year of release']);

console.log(myCPU['Year of release']);

/* Accessing properties of properties by index  */

console.log(favourites['Favourite foods'][0]);

console.log(favourites['Favourite foods'][1]);

console.log(myOldTech['My old phones'][2]);
console.log(myOldTech['My old CPUs'][1]);

console.log(favourites['Favourite drinks'][0]);


/* Changing a property of a property after accessing it by index */

myOldTech['My old phones'][3] = 'Samsung Galaxy S7';

console.log(myOldTech['My old phones']);

myOldTech['My old CPUs'][2] = 'FX 9370';

console.log(myOldTech['My old CPUs'][2]);

/* Deleting properties */

delete myOldTech['My old phones'];

console.log(myOldTech);

delete favourites['Favourite foods'];

console.log(favourites);

//Loop through the nested properties here using a for...in loop.
// You'll have to create multiple properties of the same type within your project,
// for example, multiple old phones and/or old CPUs, each with their own specs.

//You can also try using a for...in loop to iterate through properties with types that don't match. 
//It might cause unexpected behaviours, but that's the point.

//Avoid arrow functions when using the 'this' keyword.

//Adding a number to a string turns the number into a string and appends it to the first string.

//Add some getters and setters.

//Make a factory function like the hot garbage written below. 
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log("Beep Boop");
        },
    };
};

let hobbyBacklog = {
    'Video Games': {
        Steam: ['Stellaris'],
        GOG: ['Fallout: London', ],
        'Nintendo Switch': ['Splatoon 3', 'Retro games on Switch Online'],
        'EA Origin': ['Dragon Age: Origins', 'Dragon Age 2', 'Dragon Age: Inquisition'],
        'Modding': ['Fallout: Miami', 'Fallout: New Vegas (reinstall mods and reload save before Old World Blues)'],
    },
}