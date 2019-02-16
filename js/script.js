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
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"media col-lg-3\">\n  \t\t<div class=\"media-left\">\n    \t<a href=\"#\">\n      \t<img class=\"media-object\" src=\"" + this.image + "\" alt=\"...\">\n    \t</a>\n  \t\t</div>\n  \t\t<div class=\"media-body col-lg-3 media-text\">\n    \t<h4 class=\"media-heading media-text\">" + this.name + "</h4>\n    \t<p>City: " + this.city + "</p>\n    \t<p>ZIP-Code: " + this.zipcode + "</p>\n    \t<p>Address: <br>" + this.address + "</p>\n  \t\t</div>\n\t\t</div>\n\t\t";
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
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"media col-lg-3\">\n  \t\t<div class=\"media-left \">\n    \t<a href=\"#\">\n      \t<img class=\"media-object\" src=\"" + this.image + "\" alt=\"...\">\n    \t</a>\n  \t\t</div>\n  \t\t<div class=\"media-body col-lg-1\">\n    \t<h4 class=\"media-heading media-text\">" + this.name + "</h4>\n    \t<p>City: " + this.city + "</p>\n    \t<p>ZIP-Code: " + this.zipcode + "</p>\n    \t<p>Address: " + this.address + "</p>\n    \t<p>Tel.:" + this.tel + "</p>\n    \t<p>Type: " + this.type + "</p>\n    \t<p>Website: " + this.website + "</p>\n  \t\t</div>\n\t\t</div>\n\t\t";
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
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"media col-lg-3\">\n  \t\t<div class=\"media-left \">\n    \t<a href=\"#\">\n      \t<img class=\"media-object\" src=\"" + this.image + "\" alt=\"...\">\n    \t</a>\n  \t\t</div>\n  \t\t<div class=\"media-body col-lg-1\">\n    \t<h4 class=\"media-heading media-text\">" + this.name + "</h4>\n    \t<p>City: " + this.city + "</p>\n    \t<p>ZIP-Code: " + this.zipcode + "</p>\n    \t<p>Address: <br>" + this.address + "</p>\n    \t<p>Date: " + this.eventdate + "</p>\n    \t<p>Price: " + this.ticketprice + "</p>\n  \t\t</div>\n\t\t</div>\n\t\t";
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
// (name, city, zipcode, address, image) --> 5 arguments
placesData[0] = new places("Eiffel Tower", "Paris", 75007, "5 avenue Anatole France", "img/eiffel.jpg");
placesData[1] = new places("St. Stephens Cathedral", "Vienna, Austria", 1010, "Stephansplatz 3, 1010 Wien", "img/stephansdom.jpg");
placesData[2] = new places("Chichen Itza", "Yucatán, Mexico", "unknown", "unknown", "img/mayatemple.jpg");
placesData[3] = new places("Broadway Theatre", "New York City", 10036, "Theater District, Manhattan", "img/broadway.jpg");
var restaurantData = new Array();
// (name, city, zipcode, address, image, tel, type, website) --> 8 arugments
restaurantData[0] = new restaurant("DO & CO Restaurant", "Vienna, Austria", 1010, "Stephansplatz 12", "img/doco.jpg", "01 5353969", "Luxury", "www.docohotel.com/de/restaurant");
restaurantData[1] = new restaurant("TGI Fridays", "Vienna, Austria", 1010, "Schubertring 13", "img/tgi.jpg", " 01 7148995", "Fast Food", "www.tgifridays.at/");
restaurantData[2] = new restaurant("La Rive", "Amsterdam, Netherlands", 1018, "Professor Tulpplein 1", "img/rive.jpg", "+31 20 520 3264", "Upper Class", "www.restaurantlarive.nl");
restaurantData[3] = new restaurant("Schweizerhaus", "Vienna, Austria", 1020, "Prater 116", "img/schweizerhaus.jpg", "01 7148995", "Traditional Austrian Food", "www.schweizerhaus.at");
var eventData = new Array();
// (name, city, zipcode, address, image, eventdate, ticketprice) --> 7 arguments
eventData[0] = new events("Lenny Kravitz", "Vienna, Austria", 1150, "Roland-Rainer-Platz 1", "img/lenny.jpg", "13th May, 2019", 60);
eventData[1] = new events("Tomorrowland", "Boom, Belgium", 2850, "Kapelstraat 83", "img/tomorrowland.jpg", "19th July - 28th July, 2019", 100);
eventData[2] = new events("Donauinselfest", "Vienna, Austria", 1220, "Donauinsel", "img/donauinselfest.jpg", "22th June - 24th June, 2019", "Free");
eventData[3] = new events("Alpaka Expo", "Graz, Austria", 8010, "Messeturm, Messeplatz 1", "img/alpaka.png", "15th Feb - 17th Feb, 2019", 20);
function drawContentPlaces() {
    for (var index in placesData) {
        document.getElementById("places").innerHTML += placesData[index].render();
    }
}
function drawContentRestaurants() {
    for (var index in restaurantData) {
        document.getElementById("restaurants").innerHTML += restaurantData[index].render();
    }
}
function drawContentEvents() {
    for (var index in eventData) {
        document.getElementById("events").innerHTML += eventData[index].render();
    }
}
// function drawContentRestaurants () {
// }
drawContentPlaces();
drawContentRestaurants();
drawContentEvents();
