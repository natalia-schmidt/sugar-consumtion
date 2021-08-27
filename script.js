const putMessage = (message) => {
    const getDivResult = document.querySelector(".div-result")
    const newElement = document.createElement ("p");
    const newContent = document.createTextNode(message);

    newElement.appendChild(newContent);
    getDivResult.appendChild(newElement);

    return newElement;
};

const putError = (message) => {
    const messageElement = putMessage(message);
    messageElement.setAttribute("class", "error");
};

const submit = function () {
    const getMonth = parseFloat(document.getElementById("month").value);
    if (isNaN(getMonth) ||getMonth < 1 || getMonth > 12) {
        putError("Invalid number, please try again");
        return;
    } 

    const nameMonth = ["January", "February", "March", "April","May", "June", "July", "August","September","October","November","December"];
    const getNameMonth = nameMonth[getMonth-1];

    const sugar = getMonth*15;
    
    putMessage("In " + getNameMonth + " the population consumed an average of " + sugar + "g of sugar");
};