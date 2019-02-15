var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(name, city, zipcode, address, image) {
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.image = image;
    }
    locations.prototype.render = function () {
        return "";
    };
    return locations;
}());
var places = /** @class */ (function (_super) {
    __extends(places, _super);
    function places(name, city, zipcode, address, image) {
        return _super.call(this, name, city, zipcode, address, image) || this;
    }
    places.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"row\">\n\t\t<div class=\"col-lg-6 images\">\n\t\t<img src=\"" + this.image + "\">\n\t\t</div>\n\t\t<div class=\"col-lg-6 desciption\">\n\t\t<p>City: " + this.city + "</p>\n\t\t<p>ZIP-code: " + this.zipcode + "</p>\n\t\t<p>Address: " + this.address + "</p>";
    };
    return places;
}(locations));
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(name, city, zipcode, address, image, tel, type, website) {
        var _this = _super.call(this, name, city, zipcode, address, image, tel, type, website) || this;
        _this.tel = tel;
        _this.type = type;
        _this.website = website;
        return _this;
    }
    restaurant.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"row\">\n\t\t<div class=\"col-lg-6 images\">\n\t\t<h1>" + this.name + "</h1>\n\t\t<img src=\"" + this.image + "\">\n\t\t</div>\n\t\t<div class=\"col-lg-6 desciption\">\n\t\t<p>City: " + this.city + "</p>\n\t\t<p>ZIP-code: " + this.zipcode + "</p>\n\t\t<p>Address: " + this.address + "</p>\n\t\t<p>Tel: " + this.tel + "</p>\n\t\t<p>Type: " + this.type + "</p>\n\t\t<p>Url:  " + this.website + "</p>\n\t\t</div>\n\t\t</div>\n\t\t";
    };
    return restaurant;
}(locations));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, city, zipcode, address, image, eventdate, ticketprice) {
        var _this = _super.call(this, name, city, zipcode, address, image, eventdate, ticketprice) || this;
        _this.eventdate = eventdate;
        _this.ticketprice = ticketprice;
        return _this;
    }
    events.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"row\">\n\t\t<div class=\"col-lg-6 images\">\n\t\t<img src=\"" + this.image + "\">\n\t\t</div>\n\t\t<div class=\"col-lg-6 desciption\">\n\t\t<p>City: " + this.city + "</p>\n\t\t<p>ZIP-code: " + this.zipcode + "</p>\n\t\t<p>Address: " + this.address + "</p>\n\t\t<p>Event Date: " + this.eventdate + "</p>\n\t\t<p>Ticket Price: " + this.ticketprice + "</p>\n\t\t</div>\n\t\t</div>\n\t\t";
    };
    return events;
}(locations));
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
placesData[0] = new places("Eiffel Tower", "Paris", 75007, "5 avenue Anatole France", "img/eiffel.jpg");
placesData[1] = new places("St. Stephens Cathedral", "Vienna, Austria", 1010, "Stephansplatz 3, 1010 Wien", "img/stephansdom.jpg");
placesData[2] = new places("Chichen Itza", "Yucatán, Mexico", "unknown", "unknown", "img/mayatemple.jpg");
placesData[3] = new places("Broadway Theatre", "New York City", 10036, "Theater District, Manhattan", "img/broadway.jpg");
var restaurantData = new Array();
// name, city, zipcode, address, image, tel, type, website
restaurantData[0] = new restaurant("DO & CO Restaurant Stephansplatz", "Vienna, Austria", 1010, "Stephansplatz 12", "img/doco.jpg", "01 5353969", "Luxury", "https://www.docohotel.com/de/restaurant");
restaurantData[0] = new restaurant("TGI Fridays", "Vienna, Austria", 1010, "Schubertring 13", "img/tgi.jpg", " 01 7148995", "Fast Food", "http://tgifridays.at/");
restaurantData[0] = new restaurant("DO & CO Restaurant Stephansplatz", "Vienna, Austria", 1010, "Stephansplatz 12", "img/doco.jpg", "015353969", "Allround", "https://www.docohotel.com/de/restaurant");
restaurantData[0] = new restaurant("DO & CO Restaurant Stephansplatz", "Vienna, Austria", 1010, "Stephansplatz 12", "img/doco.jpg", "015353969", "Allround", "https://www.docohotel.com/de/restaurant");
var eventData = new Array();
// (name, city, zipcode, address, image, eventdate, ticketprice)
eventData[0] = new events("");
function drawContentPlaces() {
    for (var index in placesData) {
        document.getElementById("places").innerHTML += placesData[index].render();
    }
}
function drawContentRestaurants() {
}
drawContentPlaces();
