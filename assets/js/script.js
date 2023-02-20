//Wrapping the JS in a ready to function to ensure it loads after the html
$(document).ready(function () {
  //Establishing the variable for dayjs()
  var today = dayjs();
  //applying the current day, month, and year to the header
  $("#currentDay").text(today.format("dddd, MMMM, DD"));

  //Time function to change each block by class

  $(function currentTimeColor() {
    //Establishing the current hour in a variable to compare the time blocks by

    var currentTime = today.hour();
    //Targeting the universal class .time-block for each div to create a loop
    //Using parseInt to convert the hour id from a string to a number in order to compare it to the number that is the current hour
    //Using .attr() to extract the id from the div element
    //$(this) is in reference to the function .time-block.each
    //When the current hour is met, the class ,present will be applied to the time block
    //When the hour is less than that of the current hour, the class .past will be applied to the time block
    //When the hour is greater than that of the current hour, the class .future will be applied to the time block

    $(".time-block").each(function () {
      var time = parseInt($(this).attr("id"));
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

  //Saving to and loading from localStorage
  //When the save button is clicked, the text in the text area will be saved
  //If the values are deleted, the save button must be clicked again to remove the text
  //The key in named hourInDay and the  value is textArea
  //the key and value are then stored in local storage

  var saveButton = $(".saveBtn");

  saveButton.on("click", function () {
    var textArea = $(this).siblings(".description").val().trim();
    var hourInDay = $(this).parent().attr("id");
    localStorage.setItem(hourInDay, JSON.stringify(textArea));
  });

  //Variable declarations for each hour by id and class for the text area
  //In order to obtain the items in local storage when the page loads, DOM manipulation will be used to target each hour block and the values will be loaded by parsing them into the text area
  $("#9 .description").val(JSON.parse(localStorage.getItem("9")));
  $("#10 .description").val(JSON.parse(localStorage.getItem("10")));
  $("#11 .description").val(JSON.parse(localStorage.getItem("11")));
  $("#12 .description").val(JSON.parse(localStorage.getItem("12")));
  $("#13 .description").val(JSON.parse(localStorage.getItem("13")));
  $("#14 .description").val(JSON.parse(localStorage.getItem("14")));
  $("#15 .description").val(JSON.parse(localStorage.getItem("15")));
  $("#16 .description").val(JSON.parse(localStorage.getItem("16")));
  $("#17 .description").val(JSON.parse(localStorage.getItem("17")));
});
