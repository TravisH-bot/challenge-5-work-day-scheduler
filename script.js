// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {});

//Establishing the variable for dayjs()
var today = dayjs();
//applying the current day, month, and year to the header
$("#currentDay").text(today.format("dddd, MMMM, DD"));

//Variable declarations for each hour by id
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour1 = $("#hour-1");
var hour2 = $("#hour-2");
var hour3 = $("#hour-3");
var hour4 = $("#hour-4");
var hour5 = $("#hour-5");

var saveButton = $("#saveBtn");

//Adding each hour id into an array
var hours = [hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5];

//Time function to change each block by class

$(function currentTimeColor() {
  //Establishing the current hour in a variable to compare the time blocks by

  var currentTime = today.hour();
  console.log(currentTime);
  //Targeting the universal class .time-block for each div
  //Using parseInt to convert the hour attached to the id to a number compare to it to the number that is the current hour
  //Using .attr() to extract the id from the div element and using .split to separate the number from the id in order to only use the unique number portion of the id for comparison.
  //$(this) is in reference to the function .time-block.each

  $(".time-block").each(function () {
    var time = parseInt($(this).attr("id").split("hour-")[1]);
    if (time === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else if (time < currentTime) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (time > currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
});
currentTimeColor();

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? ✔️
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page. ✔️
});

// function storeId() {
//   var className = document.getElementsByClassName("description");
//   var classNameCount = className.length;
//   var idStore = new Array();
//   for (var i = 0; i < classNameCount; i++) {
//     idStore.push(className[i].id);
//   }
// }
// storeId();
// console.log(className);

// $("#9-hour").text(today.format("hA"));

// for (let i = 0; i < hours.length; i++) {
//   var time = hours[i];
// }
