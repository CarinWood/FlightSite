const dropdown = document.querySelector(".drop-down-box");
const departure = document.querySelector(".departureChoice");
const departureDate = document.querySelector(".departureDate");
const destination = document.querySelector(".destinationChoice");
const destinationOptions = document.querySelectorAll(
  ".destinationChoice option"
);
const returnDate = document.querySelector(".destinationDate");
const returnDateText = document.querySelector(".return-date-text");
const passengers = document.querySelector(".numberOfPassengers");
const passengerClass = document.querySelector(".ticketChoseClass");
const payButton = document.querySelector(".payButton");

const paragraph = document.querySelector(".showDeparture");
const paragraph2 = document.querySelector(".showDestination");
const paragraph3 = document.querySelector(".showDepartureDate");
const paragraph4 = document.querySelector(".showReturnDate");
const paragraph5 = document.querySelector(".tripDuration");
const paragraph6 = document.querySelector(".showPassengers");
const paragraph7 = document.querySelector(".showClass");
const paragraph8 = document.querySelector(".showPrice");

var price;

function showWindow() {
  if (passengers.value === "") {
    passengers.value = 1;
  }
  if (departure.value === "" || destination.value === "") {
    alert("You have not chosen destination or depature");
    return;
  } else if (departureDate.value === "") {
    alert("You have not chosen any departure date");
    return;
  }
  if (departure.value === destination.value) {
    alert("You can't go where you are!");
    return;
  }
  if (!returnDate.classList.contains("hidden") && returnDate.value === "") {
    alert("You have not chosen any return date");
    return;
  }

  if (returnDate.value === "") {
    paragraph4.classList.add("hidden");
    paragraph5.classList.add("hidden");
  } else {
    paragraph4.classList.remove("hidden");
    paragraph5.classList.remove("hidden");
  }

  if (departureDate.value > returnDate.value && returnDate.value != "") {
    alert("Return date can't be before departure date");
    return;
  }

  payButton.classList.remove("hidden");
  dropdown.classList.remove("hidden");
  dropdown.classList.add("slide-from-right");
  payButton.classList.add("tone-Out");

  paragraph.innerHTML = `<div><i>From: </i> ${departure.value}</div>`;
  paragraph2.innerHTML = "To: " + destination.value;
  paragraph3.innerText = "Departure date: " + departureDate.value;
  paragraph4.innerText = "Return date: " + returnDate.value;
  paragraph5.innerText =
    "Trip duration: " +
    (new Date(returnDate.value) - new Date(departureDate.value)) /
      1000 /
      24 /
      60 /
      60 +
    " days";
  paragraph6.innerText = "Number of passengers: " + passengers.value;
  paragraph7.innerText = "Travel class: " + passengerClass.value;
  createPrice();
  paragraph8.innerText = "Ticket Price: " + "$" + price;

  //Verification
}

function setDisabled() {
  var choice = departure.value;

  for (let opt of destinationOptions) {
    if (opt.value == choice && choice != "") {
      opt.disabled = true;
    } else {
      opt.disabled = false;
    }
  }
}

function chooseOneWay() {
  returnDate.classList.add("hidden");
  returnDateText.classList.add("hidden");
  paragraph4.classList.add("hidden");
  paragraph5.classList.add("hidden");
}

function chooseReturn() {
  if (!returnDate.value === "") {
    paragraph4.classList.remove("hidden");
  }
  returnDate.classList.remove("hidden");
  returnDateText.classList.remove("hidden");
}

function createPrice() {
  price = Math.floor(Math.random() * (500 - 200 + 1) + 200 * passengers.value);
  if (passengerClass.value === "Business Class") {
    price *= 2;
  }
  if (passengerClass.value === "First Class") {
    price *= 3;
  }
}

function payFunc() {
  alert(
    "$" +
      price +
      " has successfully been withdrawn from your bank account. \nThank you for your purchase!"
  );
}
