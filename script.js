const dropdown = document.querySelector('.drop-down-box');
const departure = document.querySelector('.departureChoice');
const departureDate = document.querySelector('.departureDate');
const destination = document.querySelector(".destinationChoice");
const returnDate = document.querySelector(".destinationDate");
const returnDateText = document.querySelector('.return-date-text');

const paragraph = document.querySelector('.showDeparture')
const paragraph2 = document.querySelector('.showDestination')
const paragraph3 = document.querySelector('.showDepartureDate')
const paragraph4 = document.querySelector('.showReturnDate')




function showWindow() {
    dropdown.classList.remove('hidden')
    console.log(destination.value)
    paragraph.innerText = "From: " + departure.value;
    paragraph2.innerText= "To: " + destination.value;
    paragraph3.innerText = "Departure date: " + departureDate.value;
    paragraph4.innerText = "Return date: " + returnDate.value;
}

function chooseOneWay() {
    returnDate.classList.add('hidden')
    returnDateText.classList.add('hidden')
}

function chooseReturn() {
    returnDate.classList.remove('hidden')
    returnDateText.classList.remove('hidden')
}