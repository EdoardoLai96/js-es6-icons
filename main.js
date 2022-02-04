// array su cui dovrò lavorare con tutti i dati

const cards =[
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
		color: 'purple'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'purple'
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


// creo un nuovo array filtrando per tipo

let prova = cards[0];

console.log(prova)

// const filtrati = cards.filter((element) => {
// 	if(element.type == "user"){
// 		return true
// 	}else{
// 		return false
// 	}
// });

console.log(cards)

// creo la variabile per riferirmi al container 

const container = document.getElementById("container");

// la inizializzo a vuota
let content = "";

// creo un ciclo per inserire come incremento dentro container tutte le mie card 

function showCards(array){

	for(let i=0;i < cards.length; i++){
		let card = cards[i];
		
		container.innerHTML += `<div class="card ">
		<i class="color-${card.color} ${card.family} ${card.prefix}${card.name}"></i>
		<p>${card.name}</p>
		</div>`
	}
	console.log(container);
	return true
}



let filter_type = document.getElementById("filter-type");

const filtrati = cards.filter((element) => {
	if(element.type == filter_type.value){
		return true
	}else{
		return false
	}
}
);

filter_type.addEventListener("change" , function(){
	const filtrati = cards.filter((element) => {
		if(element.type == this.value){
			return true
		}else{
			return false
		}
	});
	showCards.filtrati;
}


)


