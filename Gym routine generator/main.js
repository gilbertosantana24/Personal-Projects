// Paso 1: Definir arrays // 
const chest = [
    "Bench press",
    "Dumbbell chest press",
    "Dumbbell Pec flies",
    "Cable crossover",
    "Inclined chest press",
    "Push ups",
    "Chest dips",
    "Pecdeck fly",
    "Dumbell incline fly",
    "Decline bench press",
    "Decline dumbbell press",
    "Dumbbell pull over"
];

const back = [
    "Lat pulldowns",
    "Close-grip lat pulldowns",
    "Seated row",
    "One arm row",
    "Bent over barbell row",
    "T-bar row",
    "Deadlift",
    "Back extension",
    "Upright rows",
    "Pull up",
    "Dumbell shrugs",
    "Straight arm lat pulldown"
];

const arms = [
    "Dumbbell curl",
    "Barbell curl",
    "Hammer curl",
    "Preacher curl",
    "Skull crushers",
    "Dumbbell tricep extension",
    "Tricep dips",
    "Close-grip push up",
    "Reverse barbell curl",
    "Dumbell kick back",
    "One-handed Cable tricep pulldown",
    "EZ bar rope tricep pull down"
];

const legs = [
    "Front squat",
    "Back squat",
    "Bulgarian split squat",
    "Barbell lunges",
    "Goblet squat",
    "Quad extension",
    "Hamstring curls",
    "Pulse squat",
    "Leg press",
    "Glute bridge",
    "Donkey kick",
    "Romanian deadlift"
];

const shoulders = [
    "Arnold press",
    "Dumbbell shoulder press",
    "Front delt raise",
    "Facepull",
    "Landmine shoulder press",
    "Military press",
    "Lateral raise",
    "Upright barbell row",
    "Rear delt raise",
    "Reverse cable crossover",
    "Rear deltoid machine",
    "Cuban press"
];

const core = [
    "Plank",
    "Side plank",
    "Bird dogs",
    "Crunches",
    "Knees to chest",
    "Reverse crunches",
    "Leg raises",
    "V-ups",
    "Sit-ups",
    "Hollow rock",
    "Wipers",
    "Dead bugs"
];

// Paso 2//
var chestDay = Math.floor(Math.random() * chest.length); 
var chestDay2 = Math.floor(Math.random() * chest.length); 
var backDay = Math.floor(Math.random() * back.length); 
var backDay2 = Math.floor(Math.random() * back.length); 
var armsDay = Math.floor(Math.random() * arms.length); 
var armsDay2 = Math.floor(Math.random() * arms.length); 
var legDay = Math.floor(Math.random() * legs.length); 
var legDay2 = Math.floor(Math.random() * legs.length); 
var shouldersDay = Math.floor(Math.random() * shoulders.length);
var shouldersDay2 = Math.floor(Math.random() * shoulders.length);  
var coreDay = Math.floor(Math.random() * core.length); 
var coreDay2 = Math.floor(Math.random() * core.length); 

var rutina = chest[chestDay] + "<br>" + chest[chestDay2] + "<br> " + back[backDay] + "<br> " + back[backDay2] + "<br> " + arms[armsDay] + "<br> " + arms[armsDay2] + "<br> " + legs[legDay] + "<br> " + legs[legDay2] + "<br> " + shoulders[shouldersDay] + "<br> " + shoulders[shouldersDay2] + "<br> " + core[coreDay] + "<br> " + core[coreDay2];

document.write(rutina);
