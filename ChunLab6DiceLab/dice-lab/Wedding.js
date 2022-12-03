var tables = prompt("How many tables do you want?");
var guests = prompt("How many guests will there be?");
var tGuests = Math.floor(guests/tables)
alert("Your " + guests + " guests will be seated as " + tGuests + " per table " + guests%tables + " guests remaining.")
