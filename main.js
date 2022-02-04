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



const container = document.getElementById("container");

// la inizializzo a vuota
let content = "";

// creo un ciclo per inserire come incremento dentro container tutte le mie card 

function showCards(array){

	for(let i=0;i < array.length; i++){
		let card = array[i];
		
		content += `<div class="card ">
					 <i class="color-${card.color} ${card.family} ${card.prefix}${card.name}"></i>
					 <p>${card.name}</p>
					</div>`
	}

	container.innerHTML = content;
	return true
}



let filter_type = document.getElementById("filter-type");

showCards(cards);
// const filtrati = cards.filter((element) => {
// 	if(element.type == filter_type.value){
// 		return true
// 	}else{
// 		return false
// 	}
// }
// );




filter_type.addEventListener("change" , function(){
	
	content = "";
	if (this.value != "all"){

		const filtrati = cards.filter((element) => {
			
			if(element.type == this.value){
				console.log(element);
				
				return true
			}
		});
		
		showCards(filtrati)
	}else{
		showCards(cards);
	}
}


)


