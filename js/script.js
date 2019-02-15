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
    function locations(city, zipcode, address, image) {
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
    function places(city, zipcode, address, image) {
        return _super.call(this, city, zipcode, address, image) || this;
    }
    places.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"row\">\n\t\t<div class=\"col-lg-6 images\">\n\t\t<img src=\"" + this.image + "\">\n\t\t</div>\n\t\t<div class=\"col-lg-6 desciption\">\n\t\t<p>City: " + this.city + "</p>\n\t\t<p>ZIP-code: " + this.zipcode + "</p>\n\t\t<p>Address: " + this.address + "</p>";
    };
    return places;
}(locations));
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(city, zipcode, address, image, tel, type, website) {
        var _this = _super.call(this, city, zipcode, address, image, tel, type, website) || this;
        _this.tel = tel;
        _this.type = type;
        _this.website = website;
        return _this;
    }
    restaurant.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"row\">\n\t\t<div class=\"col-lg-6 images\">\n\t\t<img src=\"" + this.image + "\">\n\t\t</div>\n\t\t<div class=\"col-lg-6 desciption\">\n\t\t<p>City: " + this.city + "</p>\n\t\t<p>ZIP-code: " + this.zipcode + "</p>\n\t\t<p>Address: " + this.address + "</p>\n\t\t<p>Tel: " + this.tel + "</p>\n\t\t<p>Type: " + this.type + "</p>\n\t\t<p>Url:  " + this.website + "</p>\n\t\t</div>\n\t\t</div>\n\t\t";
    };
    return restaurant;
}(locations));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(city, zipcode, address, image, eventdate, ticketprice) {
        var _this = _super.call(this, city, zipcode, address, image, eventdate, ticketprice) || this;
        _this.eventdate = eventdate;
        _this.ticketprice = ticketprice;
        return _this;
    }
    events.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"row\">\n\t\t<div class=\"col-lg-6 images\">\n\t\t<img src=\"" + this.image + "\">\n\t\t</div>\n\t\t<div class=\"col-lg-6 desciption\">\n\t\t<p>City: " + this.city + "</p>\n\t\t<p>ZIP-code: " + this.zipcode + "</p>\n\t\t<p>Address: " + this.address + "</p>\n\t\t<p>Event Date: " + this.eventdate + "</p>\n\t\t<p>Ticket Price: " + this.ticketprice + "</p>\n\t\t</div>\n\t\t</div>\n\t\t";
    };
    return events;
}(locations));
// (city, zipcode, address, image)
var place1 = new places("Vienna", 1440, "Rathausplatz", "img/charles.jpg");
document.getElementById("places").innerHTML += place1.render();
var restaurant1 = new restaurant("Vienna", 1220, "Franzgasse", "img/charles.jpg", "0660007", "Chinese", "www.food.com");
document.getElementById("places").innerHTML += restaurant1.render();
var restaurant2 = new restaurant("Korneuburg", 1220, "Rathausplatz", "img/sixta.png", "08002222", "Austrian", "www.food.kbg");
document.getElementById("places").innerHTML += restaurant2.render();
var event1 = new events("Vienna", 1220, "Franzgasse", "img/kris.jpg", "10.11.2019", 200);
document.getElementById("places").innerHTML += event1.render();
