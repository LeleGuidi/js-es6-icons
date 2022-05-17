const icons = 	[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColor()
	}
];

//Create variabili per container e template e della select
const container = document.querySelector(".container");
const template = document.querySelector(".template-box").content;
const typeSelected = document.getElementById('tipo');
//Per ogni oggetto dell'arrray vado a ciclare in modo da ottenere il nome e prefisso di ognuno e inserirlo nel DOM
printBox(icons)

//Tramite un ciclo inserisco in un nuovo array tutte le tipologie delle icone, senza mettere doppioni.
const iconsType = []
icons.forEach((e) => {
	let type = e.type
	if (!iconsType.includes(type)) {
		iconsType.push(type)
	}
})

//Per ogni elemento dell'array, contenente le tipologie delle icone, vado a creare una nuova opzione all'interno del tag select
iconsType.forEach((e) => {
	typeSelected.options[typeSelected.options.length] = new Option(e, e);
})


//A seconda del valore scelto, tramite tag select, verranno creati e stampate le icone contenenti il valore desiderato
typeSelected.addEventListener(`change`, 
function() {
	//I box vengono rimossi
	const box = document.querySelectorAll(".box")
	box.forEach((e) => e.remove())

	switch (typeSelected.value) {
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
			tpl.querySelector(".box").style.color = color;
		} else if (color == "blue") {
			tpl.querySelector(".box").style.color = color;
		} else {
			tpl.querySelector(".box").style.color = color;
		}
	
		container.append(tpl);
	}
}

//Funzione per creare colori casualmente 
function randomColor() {
	let rundom = Math.floor(Math.random()*16777215).toString(16);
	let color = "#" + rundom
	return color
}



 