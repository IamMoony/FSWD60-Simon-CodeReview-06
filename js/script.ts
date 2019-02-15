class locations{

	city : string;
	zipcode : number;
	address : string;
	image : any;

	constructor(city, zipcode, address, image){
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

	constructor(city, zipcode, address, image){
		super(city, zipcode, address, image);
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

	constructor(city, zipcode, address, image, tel, type, website){
		super(city, zipcode, address, image, tel, type, website);
		this.tel = tel;
		this.type = type;
		this.website = website;
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

	constructor(city, zipcode, address, image, eventdate, ticketprice){
		super(city, zipcode, address, image, eventdate, ticketprice);
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
// (city, zipcode, address, image)
var place1 = new places("Vienna", 1440, "Rathausplatz", "img/charles.jpg")
document.getElementById("places").innerHTML += place1.render();

var restaurant1 = new restaurant("Vienna", 1220, "Franzgasse", "img/charles.jpg", "0660007", "Chinese", "www.food.com")
document.getElementById("places").innerHTML += restaurant1.render();

var restaurant2 = new restaurant("Korneuburg", 1220, "Rathausplatz", "img/sixta.png", "08002222", "Austrian", "www.food.kbg")
document.getElementById("places").innerHTML += restaurant2.render();

var event1 = new events("Vienna", 1220, "Franzgasse", "img/kris.jpg", "10.11.2019", 200);
document.getElementById("places").innerHTML += event1.render();

