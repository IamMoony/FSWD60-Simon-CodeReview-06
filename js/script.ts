class locations{
	name : string;
	city : string;
	zipcode : any;
	address : string;
	image : any;

	constructor(name, city, zipcode, address, image){
		this.name = name;
		this.city = city;
		this.zipcode = zipcode;
		this.address = address;
		this.image = image;
	}

	render() { 
		return ``			

	}
}

class places extends locations {

	constructor(name, city, zipcode, address, image){
		super(name, city, zipcode, address, image);
	}
	render(){
		return `
		${super.render()}
		<div class="row">
		<div class="col-lg-6 images">
		<img src="${this.image}">
		</div>
		<div class="col-lg-6 desciption">
		<p>City: ${this.city}</p>
		<p>ZIP-code: ${this.zipcode}</p>
		<p>Address: ${this.address}</p>`
	}
}

class restaurant extends locations{
	tel : string;
	type : string;
	website : any;

	constructor(name, city, zipcode, address, image, tel, type, website){
		super(name, city, zipcode, address, image, tel, type, website);
		this.tel = tel;
		this.type = type;
		this.website = website;
}

	render(){
		return `
		${super.render()}
		<div class="row">
		<div class="col-lg-6 images">
		<h1>${this.name}</h1>
		<img src="${this.image}">
		</div>
		<div class="col-lg-6 desciption">
		<p>City: ${this.city}</p>
		<p>ZIP-code: ${this.zipcode}</p>
		<p>Address: ${this.address}</p>
		<p>Tel: ${this.tel}</p>
		<p>Type: ${this.type}</p>
		<p>Url:  ${this.website}</p>
		</div>
		</div>
		`
	}

}

class events extends locations{
	eventdate : string;
	ticketprice : number;

	constructor(name, city, zipcode, address, image, eventdate, ticketprice){
		super(name, city, zipcode, address, image, eventdate, ticketprice);
		this.eventdate = eventdate;
		this.ticketprice = ticketprice;
}

render(){
	return `
		${super.render()}
		<div class="row">
		<div class="col-lg-6 images">
		<img src="${this.image}">
		</div>
		<div class="col-lg-6 desciption">
		<p>City: ${this.city}</p>
		<p>ZIP-code: ${this.zipcode}</p>
		<p>Address: ${this.address}</p>
		<p>Event Date: ${this.eventdate}</p>
		<p>Ticket Price: ${this.ticketprice}</p>
		</div>
		</div>
		`
	}

}

//test start
// (city, zipcode, address, image)
// var place1 = new places("Eiffel Tower", "Vienna, Austria", 1440, "Rathausplatz", "img/charles.jpg")
// document.getElementById("places").innerHTML += place1.render();

// var restaurant1 = new restaurant("Vienna", 1220, "Franzgasse", "img/charles.jpg", "0660007", "Chinese", "www.food.com")
// document.getElementById("places").innerHTML += restaurant1.render();

// var restaurant2 = new restaurant("Korneuburg", 1220, "Rathausplatz", "img/sixta.png", "08002222", "Austrian", "www.food.kbg")
// document.getElementById("places").innerHTML += restaurant2.render();

// var event1 = new events("Vienna", 1220, "Franzgasse", "img/kris.jpg", "10.11.2019", 200);
// document.getElementById("places").innerHTML += event1.render();
// test end

//Data start
var placesData = new Array();
// name, city, zipcode, address, image
placesData[0] = new places("Eiffel Tower", "Paris",  75007, "5 avenue Anatole France", "img/eiffel.jpg")
placesData[1] = new places("St. Stephens Cathedral", "Vienna, Austria",  1010, "Stephansplatz 3, 1010 Wien", "img/stephansdom.jpg")
placesData[2] = new places("Chichen Itza", "Yucatán, Mexico",  "unknown", "unknown", "img/mayatemple.jpg")
placesData[3] = new places("Broadway Theatre", "New York City",  10036, "Theater District, Manhattan", "img/broadway.jpg")

var restaurantData = new Array();
// name, city, zipcode, address, image, tel, type, website
restaurantData[0] = new restaurant("DO & CO Restaurant Stephansplatz", "Vienna, Austria", 1010, "Stephansplatz 12", "img/doco.jpg", "01 5353969", "Luxury", "https://www.docohotel.com/de/restaurant")
restaurantData[0] = new restaurant("TGI Fridays", "Vienna, Austria", 1010, "Schubertring 13", "img/tgi.jpg", " 01 7148995", "Fast Food", "http://tgifridays.at/")
restaurantData[0] = new restaurant("DO & CO Restaurant Stephansplatz", "Vienna, Austria", 1010, "Stephansplatz 12", "img/doco.jpg", "015353969", "Allround", "https://www.docohotel.com/de/restaurant")
restaurantData[0] = new restaurant("DO & CO Restaurant Stephansplatz", "Vienna, Austria", 1010, "Stephansplatz 12", "img/doco.jpg", "015353969", "Allround", "https://www.docohotel.com/de/restaurant")

var eventData = new Array();

// (name, city, zipcode, address, image, eventdate, ticketprice)
eventData[0] = new events("")


function drawContentPlaces() {
	for (let index in placesData) {
	document.getElementById("places").innerHTML += placesData[index].render();
	}
}

function drawContentRestaurants () {

}

drawContentPlaces();




