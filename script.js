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
    if(departure.value === "" || destination.value === "") {
        alert("You have not chosen destination or depature")
        return
    } else if (departureDate.value === "") {
        alert("You have not chosen any departure date")
        return
    }
    if(!returnDate.classList.contains('hidden') && returnDate.value === "") {
        alert("You have not chosen any return date")
        return   
    }
    if(returnDate.value === "") {
        paragraph4.classList.add('hidden')
    } else {
        paragraph4.classList.remove('hidden')
    }

    if(departureDate.value > returnDate.value) {
        alert ("Return date can't be before departure date")
        return
    }

    dropdown.classList.remove('hidden')
    console.log(destination.value)
    paragraph.innerText = "From: " + departure.value;
    paragraph2.innerText= "To: " + destination.value;
    paragraph3.innerText = "Departure date: " + departureDate.value;
    paragraph4.innerText = "Return date: " + returnDate.value;

    //Verification
   
}

function chooseOneWay() {
    returnDate.classList.add('hidden')
    returnDateText.classList.add('hidden')
    paragraph4.classList.add('hidden')

    
}

function chooseReturn() {
    if(!returnDate.value === "") {
        paragraph4.classList.remove('hidden')
    }
    returnDate.classList.remove('hidden')
    returnDateText.classList.remove('hidden')

    

}