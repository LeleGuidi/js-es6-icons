const icons = 	[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//Create variabili per container e template e della select
const container = document.querySelector(".container");
const template = document.querySelector(".template-box").content;
const userChoice = document.getElementById("tipo");
//Per ogni oggetto dell'arrray vado a ciclare in modo da ottenere il nome e prefisso di ognuno e inserirlo nel DOM
printBox(icons)

//A seconda del valore scelto, tramite tag select, verranno creati e stampate le icone contenenti il valore desiderato
userChoice.addEventListener(`change`, 
function() {
	//I box vengono rimossi
	const box = document.querySelectorAll(".box")
	box.forEach((e) => e.remove())

	switch (userChoice.value) {
		case "all":
			printBox(icons)
			break;
		case "animal":
			const animalIcons = choice("animal")
			printBox(animalIcons)
			break;
		case "user":
			const userIcons = choice("user")
			printBox(userIcons)
			break;
		case "vegetable":
			const vegetableIcons = choice("vegetable")
			printBox(vegetableIcons)
			break;
	}
})

/*---------------
	FUNZIONI
---------------*/
//Funzione per creare un array in base al tipo inserito come argomento
function choice(typeOfChoice) {
	return icons.filter((e) => (e.type === typeOfChoice))
}

// Funzione per stampare le box con il contenuto presente nell'array passato come argomento
function printBox(array) {
	for (let i = 0; i < array.length; i++){
		const tpl = template.cloneNode(true);
		const {prefix, name, color} = array[i];
	
		tpl.querySelector(".icon").className += ` ${prefix}${name}`;
		tpl.querySelector(".icon-name").innerHTML = name;
	
		//A seconda del colore che ha l'oggetto, si va ad aggiungere al DIV.BOX la classe del colore corrispondente
		if (color == "orange") {
			tpl.querySelector(".box").className += " clr-orange";
		} else if (color == "blue") {
			tpl.querySelector(".box").className += " clr-blue";
		} else {
			tpl.querySelector(".box").className += " clr-purple";
		}
	
		container.append(tpl);
	}
}
