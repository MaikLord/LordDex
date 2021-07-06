var pokemonimg = 1;
var Arrays = [];

const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";


for (var i = 1; i <= 160; i++) {
    var id = "00" + i;
    Arrays.push(url + id.substring(id.length, id.length - 3) + ".png");
};

function load() {
    document.getElementById("pokeball").style.visibility = "visible";
    document.getElementById("pokeball").style.transition = "0.3s";
};
function number() {
    document.getElementById("pokeid").innerHTML = pokemonimg;
    if (pokemonimg == 1) {
        document.getElementById("pokeid").innerHTML = "2";
    }
};
/* Function modified */
function next() {
    if (pokemonimg == Arrays.length) {
        pokemonimg = 1;
    }
    document.getElementById("poke1").src = Arrays[pokemonimg];
    pokemonimg++;
    let pokemon = getPokemons().filter((item) => {
        return item.img + 1 === pokemonimg;
    })[0];
    document.getElementById("name").innerHTML = pokemon.name;
    document.getElementById("inputnext").style.background = pokemon.color;
    document.getElementById("inputnext").style.transition = "1s ease-in";
    document.getElementById("type").style.background = pokemon.color;
    document.getElementById("type").innerHTML = pokemon.type;
    document.getElementById("type1").innerHTML = pokemon.weakness;
    document.getElementById("type2").innerHTML = pokemon.weakness2;
    document.getElementById("pokedesc").innerHTML = pokemon.info;
    if (pokemon.weakness == "Fire") { document.getElementById("type1").style.background = "tomato"; };
    if (pokemon.weakness2 == "Fire") { document.getElementById("type2").style.background = "tomato"; };
    if (pokemon.weakness == "Water") { document.getElementById("type1").style.background = "rgb(50,150,255)"; };
    if (pokemon.weakness2 == "Water") { document.getElementById("type2").style.background = "rgb(50,150,255)"; };
    if (pokemon.weakness == "Grass") { document.getElementById("type1").style.background = "rgb(40, 200, 80)"; };
    if (pokemon.weakness2 == "Grass") { document.getElementById("type2").style.background = "rgb(40, 200, 80)"; };
    if (pokemon.weakness == "Bug") { document.getElementById("type1").style.background = "tomato"; };
    if (pokemon.weakness2 == "Bug") { document.getElementById("type2").style.background = "tomato"; };
    if (pokemon.weakness == "Electric") { document.getElementById("type1").style.background = "#F8D030"; };
    if (pokemon.weakness2 == "Electric") { document.getElementById("type2").style.background = "#F8D030"; };
    if (pokemon.weakness == "Fighting") { document.getElementById("type1").style.background = "#C03028"; };
    if (pokemon.weakness2 == "Fighting") { document.getElementById("type2").style.background = "#C03028"; };
    if (pokemon.weakness == "Psychic") { document.getElementById("type1").style.background = "#F85888"; };
    if (pokemon.weakness2 == "Psychic") { document.getElementById("type2").style.background = "#F85888"; };
    if (pokemon.weakness == "Ground") { document.getElementById("type1").style.background = "#E0C068"; };
    if (pokemon.weakness2 == "Ground") { document.getElementById("type2").style.background = "#E0C068"; };
    if (pokemon.weakness == "Flying") { document.getElementById("type1").style.background = "tomato"; };
    if (pokemon.weakness2 == "Flying") { document.getElementById("type2").style.background = "#A890F0"; };
    if (pokemon.weakness == "Ice") { document.getElementById("type1").style.background = "rgb(50,150,255)"; };
    if (pokemon.weakness2 == "Ice") { document.getElementById("type2").style.background = "rgb(50,150,255)"; };
    if (pokemon.weakness == "None") { document.getElementById("type1").style.background = "rgb(180,180,180)"; };
    if (pokemon.weakness2 == "None") { document.getElementById("type2").style.background = "rgb(180,180,180)"; };
    if (pokemon.weakness == "Steel") { document.getElementById("type1").style.background = "rgb(180,180,180)"; };
    if (pokemon.weakness2 == "Steel") { document.getElementById("type2").style.background = "rgb(180,180,180)"; };
    if (pokemon.weakness == "Fairy") { document.getElementById("type1").style.background = "#EE99AC"; };
    if (pokemon.weakness2 == "Fairy") { document.getElementById("type2").style.background = "#EE99AC"; };
    if (pokemon.weakness == "Ghost") { document.getElementById("type1").style.background = "#705898"; };
    if (pokemon.weakness2 == "Ghost") { document.getElementById("type2").style.background = "#705898"; };
    if (pokemon.weakness == "Dragon") { document.getElementById("type1").style.background = "#7038F8"; };
    if (pokemon.weakness2 == "Dragon") { document.getElementById("type2").style.background = "#7038F8"; };
    if (pokemon.weakness == "Dragon") { document.getElementById("type").style.color = "White"; };
    if (pokemon.weakness2 == "Dragon") { document.getElementById("type").style.color = "White"; };
};
/* funtion called in search input on index.html */
function search(text) {
    let pokemon = getPokemons().filter((item) => {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) === 0;
    })[0];
    document.getElementById("poke1").src = Arrays[pokemon.img];
    document.getElementById("name").innerHTML = pokemon.name;
    document.getElementById("pokeid").innerHTML = pokemon.img + 1;
    document.getElementById("inputnext").style.background = pokemon.color;
    document.getElementById("type").style.background = pokemon.color;
    document.getElementById("type").innerHTML = pokemon.type;
    document.getElementById("type1").innerHTML = pokemon.weakness;
    document.getElementById("type2").innerHTML = pokemon.weakness2;
    document.getElementById("pokedesc").innerHTML = pokemon.info;
    if (pokemon.weakness == "Fire") { document.getElementById("type1").style.background = "tomato" };
    if (pokemon.weakness2 == "Fire") { document.getElementById("type2").style.background = "tomato" };
    if (pokemon.weakness == "Water") { document.getElementById("type1").style.background = "rgb(50,150,255)" };
    if (pokemon.weakness2 == "Water") { document.getElementById("type2").style.background = "rgb(50,150,255)" };
    if (pokemon.weakness == "Grass") { document.getElementById("type1").style.background = "rgb(40, 200, 80)" };
    if (pokemon.weakness2 == "Grass") { document.getElementById("type2").style.background = "rgb(40, 200, 80)" };
    if (pokemon.weakness == "Bug") { document.getElementById("type1").style.background = "tomato"; };
    if (pokemon.weakness2 == "Bug") { document.getElementById("type2").style.background = "tomato"; };
    if (pokemon.weakness == "Electric") { document.getElementById("type1").style.background = "#F8D030"; };
    if (pokemon.weakness2 == "Electric") { document.getElementById("type2").style.background = "#F8D030"; };
    if (pokemon.weakness == "Fighting") { document.getElementById("type1").style.background = "#C03028"; };
    if (pokemon.weakness2 == "Fighting") { document.getElementById("type2").style.background = "#C03028"; };
    if (pokemon.weakness == "Psychic") { document.getElementById("type1").style.background = "#F85888"; };
    if (pokemon.weakness2 == "Psychic") { document.getElementById("type2").style.background = "#F85888"; };
    if (pokemon.weakness == "Ground") { document.getElementById("type1").style.background = "#E0C068"; };
    if (pokemon.weakness2 == "Ground") { document.getElementById("type2").style.background = "#E0C068"; };
    if (pokemon.weakness == "Flying") { document.getElementById("type1").style.background = "tomato"; };
    if (pokemon.weakness2 == "Flying") { document.getElementById("type2").style.background = "#A890F0"; };
    if (pokemon.weakness == "Ice") { document.getElementById("type1").style.background = "rgb(50,150,255)"; };
    if (pokemon.weakness2 == "Ice") { document.getElementById("type2").style.background = "rgb(50,150,255)"; };
    if (pokemon.weakness == "None") { document.getElementById("type1").style.background = "rgb(180,180,180)"; };
    if (pokemon.weakness2 == "None") { document.getElementById("type2").style.background = "rgb(180,180,180)"; };
    if (pokemon.weakness == "Steel") { document.getElementById("type1").style.background = "rgb(180,180,180)"; };
    if (pokemon.weakness2 == "Steel") { document.getElementById("type2").style.background = "rgb(180,180,180)"; };
    if (pokemon.weakness == "Fairy") { document.getElementById("type1").style.background = "#EE99AC"; };
    if (pokemon.weakness2 == "Fairy") { document.getElementById("type2").style.background = "#EE99AC"; };
    if (pokemon.weakness == "Ghost") { document.getElementById("type1").style.background = "#705898"; };
    if (pokemon.weakness2 == "Ghost") { document.getElementById("type2").style.background = "#705898"; };
    if (pokemon.weakness == "Dragon") { document.getElementById("type1").style.background = "#7038F8"; };
    if (pokemon.weakness2 == "Dragon") { document.getElementById("type2").style.background = "#7038F8"; };
    if (pokemon.weakness == "Dragon") { document.getElementById("type1").style.color = "White"; };
    if (pokemon.weakness2 == "Dragon") { document.getElementById("type2").style.color = "White"; };
};
/* List of pokemons */
function getPokemons() {
    return [
        { img: 0, name: "Bulbasaur", info: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Psychic" },
        { img: 1, name: "Ivysaur", info: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Psychic" },
        { img: 2, name: "Venusaur", info: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Psychic" },
        { img: 3, name: "Charmander", info: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 4, name: "Charmeleon", info: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 5, name: "Charizard", info: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Electric" },
        { img: 6, name: "Squirtle", info: "When it retracts its long neck into its shell, it squirts out water with vigorous force.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 7, name: "Wartortle", info: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 8, name: "Blastoise", info: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 9, name: "Caterpie", info: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.", color: "#A8B820", type: "Bug", weakness: "Fire", weakness2: "Flying" },
        { img: 10, name: "Metapod", info: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.", color: "#A8B820", type: "Bug", weakness: "Fire", weakness2: "Flying" },
        { img: 11, name: "Butterfree", info: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.", color: "#A890F0", type: "Flying", weakness: "Fire", weakness2: "Electric" },
        { img: 12, name: "Weedle", info: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.", color: "#A040A0", type: "Bug", weakness: "Fire", weakness2: "Psychic" },
        { img: 13, name: "Kakuna", info: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.", color: "#A040A0", type: "Bug", weakness: "Fire", weakness2: "Psychic" },
        { img: 14, name: "Beedrill", info: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.", color: "#A040A0", type: "Bug", weakness: "Fire", weakness2: "Psychic" },
        { img: 15, name: "Pidgey", info: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.", color: "#A890F0", type: "Normal", weakness: "Electric", weakness2: "Ice" },
        { img: 16, name: "Pidgeotto", info: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.", color: "#A890F0", type: "Normal", weakness: "Electric", weakness2: "Ice" },
        { img: 17, name: "Pidgeot", info: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.", color: "#A890F0", type: "Normal", weakness: "Electric", weakness2: "Ice" },
        { img: 18, name: "Rattata", info: "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 19, name: "Raticate", info: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 20, name: "Spearow", info: "Inept at flying high. However, it can fly around very fast to protect its territory.", color: "#A890F0", type: "Normal", weakness: "Electric", weakness2: "Ice" },
        { img: 21, name: "Fearow", info: "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.", color: "#A890F0", type: "Normal", weakness: "Electric", weakness2: "Ice" },
        { img: 22, name: "Ekans", info: "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Ground" },
        { img: 23, name: "Arbok", info: "The frightening patterns on its belly have been studied. Six variations have been confirmed.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Ground" },
        { img: 24, name: "Pikachu", info: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.", color: "#F8D030", type: "Electric", weakness: "Ground", weakness2: "None" },
        { img: 25, name: "Raichu", info: "Its long tail serves as a ground to protect itself from its own high-voltage power.", color: "#F8D030", type: "Electric", weakness: "Ground", weakness2: "None" },
        { img: 26, name: "Sandshrew", info: "It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Grass" },
        { img: 27, name: "Sandslash", info: "The drier the area Sandslash lives in, the harder and smoother the Pokémon’s spikes will feel when touched.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Grass" },
        { img: 28, name: "Nidoran", info: "Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Ground" },
        { img: 29, name: "Nidorina", info: "The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Ground" },
        { img: 30, name: "Nidoqueen", info: "Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.", color: "#A040A0", type: "Poison", weakness: "Water", weakness2: "Psychic" },
        { img: 31, name: "Nidoran", info: "The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Ground" },
        { img: 32, name: "Nidorino", info: "With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Ground" },
        { img: 33, name: "Nidoking", info: "When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.", color: "#A040A0", type: "Poison", weakness: "Water", weakness2: "Psychic" },
        { img: 34, name: "Clefairy", info: "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.", color: "#EE99AC", type: "Fairy", weakness: "Steel", weakness2: "Poison" },
        { img: 35, name: "Clefable", info: "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.", color: "#EE99AC", type: "Fairy", weakness: "Steel", weakness2: "Poison" },
        { img: 36, name: "Vulpix", info: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 37, name: "Ninetales", info: "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 38, name: "Jigglypuff", info: "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.", color: "#EE99AC", type: "Fairy", weakness: "Steel", weakness2: "Poison" },
        { img: 39, name: "Wigglytuff", info: "The more air it takes in, the more it inflates. If opponents catch it in a bad mood, it will inflate itself to an enormous size to intimidate them.", color: "#EE99AC", type: "Fairy", weakness: "Steel", weakness2: "Poison" },
        { img: 40, name: "Zubat", info: "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Electric" },
        { img: 41, name: "Golbat", info: "It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Electric" },
        { img: 42, name: "Oddish", info: "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Psychic" },
        { img: 43, name: "Gloom", info: "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Psychic" },
        { img: 44, name: "Vileplume", info: "It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Psychic" },
        { img: 45, name: "Paras", info: "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.", color: "#A8B820", type: "Bug", weakness: "Fire", weakness2: "Flying" },
        { img: 46, name: "Parasect", info: "The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.", color: "#A8B820", type: "Bug", weakness: "Fire", weakness2: "Flying" },
        { img: 47, name: "Venonat", info: "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.", color: "#A8B820", type: "Bug", weakness: "Fire", weakness2: "Psychic" },
        { img: 48, name: "Venomoth", info: "The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.", color: "#A8B820", type: "Bug", weakness: "Fire", weakness2: "Psychic" },
        { img: 49, name: "Diglett", info: "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Grass" },
        { img: 50, name: "Dugtrio", info: "Uma equipe de trigêmeos Diglett. Ele desencadeia enormes terremotos escavando 60 milhas no subsolo.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Grass" },
        { img: 51, name: "Meowth", info: "It loves to collect shiny things. If it’s in a good mood, it might even let its Trainer have a look at its hoard of treasures.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 52, name: "Persian", info: "Getting this prideful Pokémon to warm up to you takes a lot of effort, and it will claw at you the moment it gets annoyed.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 53, name: "Psyduck", info: "Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 54, name: "Golduck", info: "This Pokémon lives in gently flowing rivers. It paddles through the water with its long limbs, putting its graceful swimming skills on display.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 55, name: "Mankey", info: "An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.", color: "#C03028", type: "Fighting", weakness: "Psychic", weakness2: "Flying" },
        { img: 56, name: "Primeape", info: "It stops being angry only when nobody else is around. To view this moment is very difficult.", color: "#C03028", type: "Fighting", weakness: "Psychic", weakness2: "Flying" },
        { img: 57, name: "Growlithe", info: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 58, name: "Arcanine", info: "The sight of it running over 6,200 miles in a single day and night has captivated many people.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 59, name: "Poliwag", info: "For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon’s innards showing through the skin.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 60, name: "Poliwhirl", info: "Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl’s has been used in place of lullabies to get children to go to sleep.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 61, name: "Poliwrath", info: "Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.", color: "rgb(50,150,255)", type: "Water", weakness: "Fairy", weakness2: "Grass" },
        { img: 62, name: "Abra", info: "This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.", color: "#F85888", type: "Psychic", weakness: "Ghost", weakness2: "None" },
        { img: 63, name: "Kadabra", info: "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.", color: "#F85888", type: "Psychic", weakness: "Ghost", weakness2: "None" },
        { img: 64, name: "Alakazam", info: "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.", color: "#F85888", type: "Psychic", weakness: "Ghost", weakness2: "None" },
        { img: 65, name: "Machop", info: "Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.", color: "#C03028", type: "Fighting", weakness: "Psychic", weakness2: "Flying" },
        { img: 66, name: "Machoke", info: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.", color: "#C03028", type: "Fighting", weakness: "Psychic", weakness2: "Flying" },
        { img: 67, name: "Machamp", info: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.", color: "#C03028", type: "Fighting", weakness: "Psychic", weakness2: "Flying" },
        { img: 68, name: "Bellsprout", info: "Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Psychic" },
        { img: 69, name: "Weepinbell", info: "When hungry, it swallows anything that moves. Its hapless prey is dissolved by strong acids.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Psychic" },
        { img: 70, name: "Victreebel", info: "Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Psychic" },
        { img: 71, name: "Tentacool", info: "Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.", color: "rgb(50,150,255)", type: "Water", weakness: "Psychic", weakness2: "Electric" },
        { img: 72, name: "Tentacruel", info: "When the red orbs on Tentacruel’s head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.", color: "rgb(50,150,255)", type: "Water", weakness: "Psychic", weakness2: "Electric" },
        { img: 73, name: "Geodude", info: "Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Steel" },
        { img: 74, name: "Graveler", info: "Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Steel" },
        { img: 75, name: "Golem", info: "Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it’s exposed to air.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Steel" },
        { img: 76, name: "Ponyta", info: "It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 77, name: "Rapidash", info: "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 78, name: "Slowpoke", info: "Slow-witted and oblivious, this Pokémon won’t feel any pain if its tail gets eaten. It won’t notice when its tail grows back, either.", color: "rgb(50,150,255)", type: "Water", weakness: "Ghost", weakness2: "Electric" },
        { img: 79, name: "Slowbro", info: "Slowpoke became Slowbro when a Shellder bit on to its tail. Sweet flavors seeping from the tail make the Shellder feel as if its life is a dream.", color: "rgb(50,150,255)", type: "Water", weakness: "Ghost", weakness2: "Electric" },
        { img: 80, name: "Magnemite", info: "At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it’ll start moving again.", color: "#F8D050", type: "Electric", weakness: "Ground", weakness2: "Fire" },
        { img: 81, name: "Magneton", info: "This Pokémon is three Magnemite that have linked together. Magneton sends out powerful radio waves to study its surroundings.", color: "#F8D030", type: "Electric", weakness: "Ground", weakness2: "Fire" },
        { img: 82, name: "Farfetch'd", info: "The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.", color: "#C03028", type: "Normal", weakness: "Electric", weakness2: "Ice" },
        { img: 83, name: "Doduo", info: "Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs.", color: "#A8A878", type: "Normal", weakness: "Electric", weakness2: "Ice" },
        { img: 84, name: "Dodrio", info: "One of Doduo’s two heads splits to form a unique species. It runs close to 40 mph in prairies.", color: "#A8A878", type: "Normal", weakness: "Electric", weakness2: "Ice" },
        { img: 85, name: "Seel", info: "Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 86, name: "Dewgong", info: "Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 87, name: "Grimer", info: "Made of congealed sludge. It smells too putrid to touch. Even weeds won’t grow in its path.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Ground" },
        { img: 88, name: "Muk", info: "Smells so awful, it can cause fainting. Through degeneration of its nose, it lost its sense of smell.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Ground" },
        { img: 89, name: "Shellder", info: "It swims facing backward by opening and closing its two-piece shell. It is surprisingly fast.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 90, name: "Cloyster", info: "Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 91, name: "Gastly", info: "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.", color: "#705898", type: "Ghost", weakness: "Ghost", weakness2: "Psychic" },
        { img: 92, name: "Haunter", info: "Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.", color: "#705898", type: "Ghost", weakness: "Ghost", weakness2: "Psychic" },
        { img: 93, name: "Gengar", info: "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar’s doing.", color: "#705898", type: "Ghost", weakness: "Ghost", weakness2: "Psychic" },
        { img: 94, name: "Onix", info: "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Steel" },
        { img: 95, name: "Drowzee", info: "If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.", color: "#F85888", type: "Psychic", weakness: "Ghost", weakness2: "Bug" },
        { img: 96, name: "Hypno", info: "Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.", color: "#F85888", type: "Psychic", weakness: "Ghost", weakness2: "Bug" },
        { img: 97, name: "Krabby", info: "It can be found near the sea. The large pincers grow back if they are torn out of their sockets.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 98, name: "Kingler", info: "Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 99, name: "Voltorb", info: "It is said to camouflage itself as a Poké Ball. It will self-destruct with very little stimulus.", color: "#F8D030", type: "Electric", weakness: "Ground", weakness2: "None" },
        { img: 100, name: "Electrode", info: "Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion.", color: "#F8D030", type: "Electric", weakness: "Ground", weakness2: "None" },
        { img: 101, name: "Exeggcute", info: "Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Ghost", weakness2: "Fire" },
        { img: 102, name: "Exeggutor", info: "Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Ghost", weakness2: "Fire" },
        { img: 103, name: "Cubone", info: "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Grass" },
        { img: 104, name: "Marowak", info: "This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Grass" },
        { img: 105, name: "Hitmonlee", info: "This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.", color: "#C03028", type: "Fighting", weakness: "Psychic", weakness2: "Flying" },
        { img: 106, name: "Hitmonchan", info: "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.", color: "#C03028", type: "Fighting", weakness: "Psychic", weakness2: "Flying" },
        { img: 107, name: "Lickitung", info: "If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 108, name: "Koffing", info: "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Ground" },
        { img: 109, name: "Weezing", info: "It mixes gases between its two bodies. It’s said that these Pokémon were seen all over the Galar region back in the day.", color: "#A040A0", type: "Poison", weakness: "Psychic", weakness2: "Ground" },
        { img: 110, name: "Rhyhorn", info: "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Grass" },
        { img: 111, name: "Rhydon", info: "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.", color: "#E0C068", type: "Ground", weakness: "Water", weakness2: "Grass" },
        { img: 112, name: "Chansey", info: "The egg Chansey carries is not only delicious but also packed with nutrition. It’s used as a high-class cooking ingredient.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 113, name: "Tangela", info: "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Flying" },
        { img: 114, name: "Kangaskhan", info: "Although it’s carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 115, name: "Horsea", info: "Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 116, name: "Seadra", info: "It’s the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 117, name: "Goldeen", info: "Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 118, name: "Seaking", info: "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 119, name: "Staryu", info: "If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 120, name: "Starmie", info: "This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.", color: "rgb(50,150,255)", type: "Water", weakness: "Ghost", weakness2: "Electric" },
        { img: 121, name: "Mr. Mime", info: "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.", color: "#F85888", type: "Psychic", weakness: "Ghost", weakness2: "Steel" },
        { img: 122, name: "Scyther", info: "As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree.", color: "#A8B820", type: "Bug", weakness: "Fire", weakness2: "Flying" },
        { img: 123, name: "Jynx", info: "In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice.", color: "#98D8D8", type: "Ice", weakness: "Steel", weakness2: "Fire" },
        { img: 124, name: "Electabuzz", info: "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.", color: "#F8D030", type: "Electric", weakness: "Ground", weakness2: "None" },
        { img: 125, name: "Magmar", info: "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 126, name: "Pinsir", info: "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.", color: "#A8B820", type: "Bug", weakness: "Fire", weakness2: "Flying" },
        { img: 127, name: "Tauros", info: "When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 128, name: "Magikarp", info: "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 129, name: "Gyarados", info: "It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.", color: "rgb(50,150,255)", type: "Water", weakness: "Electric", weakness2: "None" },
        { img: 130, name: "Lapras", info: "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 131, name: "Ditto", info: "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 132, name: "Eevee", info: "It has the ability to alter the composition of its body to suit its surrounding environment.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 133, name: "Vaporeon", info: "When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 134, name: "Jolteon", info: "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.", color: "#F8D030", type: "Electric", weakness: "Ground", weakness2: "None" },
        { img: 135, name: "Flareon", info: "Once it has stored up enough heat, this Pokémon’s body temperature can reach up to 1,700 degrees Fahrenheit.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 136, name: "Porygon", info: "State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 137, name: "Omanyte", info: "Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.", color: "#E0C068", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 138, name: "Omastar", info: "Weighed down by a large and heavy shell, Omastar couldn’t move very fast. Some say it went extinct because it was unable to catch food.", color: "#E0C068", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 139, name: "Kabuto", info: "This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.", color: "#E0C068", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 140, name: "Kabutops", info: "Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.", color: "#E0C068", type: "Ground", weakness: "Grass", weakness2: "Electric" },
        { img: 141, name: "Aerodactyl", info: "This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.", color: "#E0C068", type: "Flying", weakness: "Steel", weakness2: "Electric" },
        { img: 142, name: "Snorlax", info: "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.", color: "#A8A878", type: "Normal", weakness: "Fighting", weakness2: "None" },
        { img: 143, name: "Articuno", info: "It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.", color: "#98D8D8", type: "Ice", weakness: "Steel", weakness2: "Fire" },
        { img: 144, name: "Zapdos", info: "This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.", color: "#F8D030", type: "Electric", weakness: "Ice", weakness2: "Ground" },
        { img: 145, name: "Moltres", info: "It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Electric" },
        { img: 146, name: "Dratini", info: "Dratini dwells near bodies of rapidly flowing water, such as the plunge pools of waterfalls. As it grows, Dratini will shed its skin many times.", color: "#7038F8", type: "Dragon", weakness: "Fairy", weakness2: "Ice" },
        { img: 147, name: "Dragonair", info: "This Pokémon lives in pristine oceans and lakes. It can control the weather, and it uses this power to fly into the sky, riding on the wind.", color: "#7038F8", type: "Dragon", weakness: "Fairy", weakness2: "Ice" },
        { img: 148, name: "Dragonite", info: "It’s a kindhearted Pokémon. If it spots a drowning person or Pokémon, Dragonite simply must help them.", color: "#7038F8", type: "Dragon", weakness: "Fairy", weakness2: "Dragon" },
        { img: 149, name: "Mewtwo", info: "Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.", color: "#F85888", type: "Psychic", weakness: "Ghost", weakness2: "Bug" },
        { img: 150, name: "Mew", info: "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.", color: "#F85888", type: "Psychic", weakness: "Ghost", weakness2: "Bug" },
        { img: 151, name: "Chikorita", info: "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Flying" },
        { img: 152, name: "Bayleef", info: "Bayleef’s neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Flying" },
        { img: 153, name: "Meganium", info: "The fragrance of Meganium’s flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe’s fighting spirit.", color: "rgb(40, 200, 80)", type: "Grass", weakness: "Fire", weakness2: "Flying" },
        { img: 154, name: "Cyndaquil", info: "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 155, name: "Quilava", info: "Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pokémon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 156, name: "Typhlosion", info: "Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pokémon creates blazing explosive blasts that burn everything to cinders.", color: "tomato", type: "Fire", weakness: "Water", weakness2: "Ground" },
        { img: 157, name: "Totodile", info: "Despite the smallness of its body, Totodile’s jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 158, name: "Croconaw", info: "Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },
        { img: 159, name: "Feraligatr", info: "Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.", color: "rgb(50,150,255)", type: "Water", weakness: "Grass", weakness2: "Electric" },

    ];
};
function reset() {
    document.getElementById("pokeball").style.visibility = "hidden";
};
function ZoomIn() {
    document.getElementById("type").style.transform = "scale(1.2)";
};
function ZoomIn1() {
    document.getElementById("type1").style.transform = "scale(1.2)";
};
function ZoomIn2() {
    document.getElementById("type2").style.transform = "scale(1.2)";
};
function ZoomUp() {
    document.getElementById("type").style.transform = "scale(1)";
};
function ZoomUp1() {
    document.getElementById("type1").style.transform = "scale(1)";
};
function ZoomUp2() {
    document.getElementById("type2").style.transform = "scale(1)";
};

