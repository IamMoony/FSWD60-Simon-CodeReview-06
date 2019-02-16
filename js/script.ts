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
		<div class="media col-lg-3 col-md-6 col-sm-12">
  		<div class="media-left">
  		<hr>
    	<a href="#">
      	<img class="media-object" src="${this.image}">
    	</a>
    	<hr>
  		</div>
  		<div class="media-body col-lg-1 col-md-1 media-text">
    	<h4 class="media-heading media-text">${this.name}</h4>
    	<p><b>City:</b> ${this.city}</p>
    	<p><b>ZIP-Code:</b> ${this.zipcode}</p>
    	<p><b>Address:</b> <br>${this.address}</p>
    	<hr>
  		</div>
		</div>
		`
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
		<div class="media col-lg-3 col-md-5">
  		<div class="media-left ">
  		<hr>
    	<a href="${this.website}">
      	<img class="media-object" src="${this.image}" alt="...">
    	</a>
    	<hr>
  		</div>
  		<div class="media-body col-lg-1 col-md-1">
    	<h4 class="media-heading media-text">${this.name}</h4>
    	<p><b>City:</b> ${this.city}</p>
    	<p><b>ZIP-Code:</b> ${this.zipcode}</p>
    	<p><b>Address:</b> <br>${this.address}</p>
    	<p><b>Tel.:</b>${this.tel}</p>
    	<p><b>Type: </b>${this.type}</p>
    	<p><b>Website: </b><a href="${this.website}"$</a>${this.website}</p>
    	<hr>
  		</div>
		</div>
		`
	}

}

class events extends locations{
	eventdate : string;
	ticketprice : any;

	constructor(name, city, zipcode, address, image, eventdate, ticketprice){
		super(name, city, zipcode, address, image, eventdate, ticketprice);
		this.eventdate = eventdate;
		this.ticketprice = ticketprice;
	}

	render(){
		return `
		${super.render()}
		<div class="media col-lg-3 col-md-6">
  		<div class="media-left ">
  		<hr>
    	<a href="${this.website}">
      	<img class="media-object" src="${this.image}" alt="...">
    	</a>
    	<hr>
  		</div>
  		<div class="media-body col-lg-1 col-md-2">
    	<h4 class="media-heading media-text">${this.name}</h4>
    	<p><b>City:</b> ${this.city}</p>
    	<p><b>ZIP-Code:</b> ${this.zipcode}</p>
    	<p><b>Address:</b> <br>${this.address}</p>
    	<p><b>Date</b> ${this.eventdate}</p>
    	<p><b>Price:</b> ${this.ticketprice} $</p>
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
// (name, city, zipcode, address, image) --> 5 arguments
placesData[0] = new places("Eiffel Tower", "Paris",  75007, "5 avenue Anatole France", "img/eiffel.jpg")
placesData[1] = new places("St. Stephens Cathedral", "Vienna, Austria",  1010, "Stephansplatz 3, 1010 Wien", "img/stephansdom.jpg")
placesData[2] = new places("Chichen Itza", "Yucatán, Mexico",  "unknown", "unknown", "img/mayatemple.jpg")
placesData[3] = new places("Broadway Theatre", "New York City",  10036, "Theater District, Manhattan", "img/broadway.jpg")

var restaurantData = new Array();
// (name, city, zipcode, address, image, tel, type, website) --> 8 arugments
restaurantData[0] = new restaurant("DO & CO Restaurant", "Vienna, Austria", 1010, "Stephansplatz 12", "img/doco.jpg", "01 5353969", "Luxury", "www.docohotel.com")
restaurantData[1] = new restaurant("TGI Fridays", "Vienna, Austria", 1010, "Schubertring 13", "img/tgi.jpg", " 01 7148995", "Fast Food", "www.tgifridays.at/")
restaurantData[2] = new restaurant("La Rive", "Amsterdam, Netherlands", 1018, "Professor Tulpplein 1", "img/rive.jpg", "+31 20 520 3264", "Upper Class", "www.restaurantlarive.nl")
restaurantData[3] = new restaurant("Schweizerhaus", "Vienna, Austria", 1020, "Prater 116", "img/schweizerhaus.jpg", "01 7148995", "Traditional Austrian Food", "www.schweizerhaus.at")

var eventData = new Array();

// (name, city, zipcode, address, image, eventdate, ticketprice) --> 7 arguments
eventData[0] = new events("Lenny Kravitz", "Vienna, Austria", 1150, "Roland-Rainer-Platz 1", "img/lenny.jpg", "13th May, 2019", 60)
eventData[1] = new events("Tomorrowland", "Boom, Belgium", 2850, "Kapelstraat 83", "img/tomorrowland.jpg", "19th July - 28th July, 2019", 100)
eventData[2] = new events("Donauinselfest", "Vienna, Austria", 1220, "Donauinsel", "img/donauinselfest.jpg", "22th June - 24th June, 2019", 0)
eventData[3] = new events("Alpaka Expo", "Graz, Austria", 8010, "Messeturm, Messeplatz 1", "img/alpaka.png", "15th Feb - 17th Feb, 2019", 20)
// Data end

function drawContentPlaces() {
	for (let index in placesData) {
		document.getElementById("places").innerHTML += placesData[index].render();
	}
}

function drawContentRestaurants() {
	for (let index in restaurantData) {
		document.getElementById("restaurants").innerHTML += restaurantData[index].render();
	}
}

function drawContentEvents() {
	for (let index in eventData) {
		document.getElementById("events").innerHTML += eventData[index].render();
	}
}


document.addEventListener("DOMContentLoaded", function(){
	drawContentPlaces();
	drawContentRestaurants();
	drawContentEvents();

});




