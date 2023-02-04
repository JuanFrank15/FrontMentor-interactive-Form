
const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");
const inputCVC = document.querySelector("#input-cvc");

const cardTextName = document.querySelector(".card-name");
const cardTextNumber = document.querySelector(".card-number");
const cardTextMonth = document.querySelector(".card-MM");
const cardTextYear = document.querySelector(".card-YY");
const cardTextCVC = document.querySelector(".card-cvc");

const formContainer = document.querySelector(".formMain");
const confirmContainer = document.querySelector(".confirm-container");

const form = document.querySelector("#form");
const btnConfirm = document.querySelector("#submit");
const btnContinue = document.querySelector("#continue");

form.addEventListener("input", function (e) {
    if (e.target.id === "input-name") checkName();
    if (e.target.id === "input-number") checkNumber();
    if (e.target.id === "input-month") checkMonth();
    if (e.target.id === "input-year") checkYear();
    if (e.target.id === "input-cvc") checkCVC();
})

function checkName() {
    let checkValueName = false;
    const cardName = inputName.value;
    cardTextName.innerHTML = inputName.value;

    if (!inputText(cardName)) {
        showError(inputName, "Wrong format, text only");
    } else if (!inputEmpty(cardName)) {
        showError(inputName, "Can't be blank.");
        cardTextName.innerHTML = "Jane Appleseed"
    } else {
        showSuccess(inputName);
        checkValueName = true;
    }
    return checkValueName;
    console.log(checkValueName);
}

function checkNumber() {
    let checkValueNumber = false;
    const cardNumber = inputNumber.value;
    cardTextNumber.innerHTML = inputNumber.value;

    if (!inputEmpty(cardNumber)) {
        showError(inputNumber, "Can't be blank");
        cardTextNumber.innerHTML = "1234 5678 9123 0000"
    } else if (!inputN(cardNumber)) {
        showError(inputNumber, "Wrong format, Number only");
    } else {
        showSuccess(inputNumber);
        checkValueNumber = true;
    }
    return checkValueNumber;
    console.log(checkValueNumber);
}

function checkMonth() {
    let checkValueMonth = false;
    const cardMonth = inputMonth.value;
    cardTextMonth.innerHTML = inputMonth.value;
    if (!inputEmpty(cardMonth)) {
        showError(inputMonth, "Can't be blank");
        cardTextMonth.innerHTML = "MM"
    } else if (!inputN(cardMonth)) {
        showError(inputMonth, "Number only");
    } else {
        showSuccess(inputMonth);
        checkValueMonth = true;
    }
    return checkValueMonth;
    console.log(checkValueMonth);
}

function checkYear() {
    let checkValueYear = false;
    const cardYear = inputYear.value;
    cardTextYear.innerHTML = inputYear.value;
    if (!inputEmpty(cardYear)) {
        showError(inputYear, "Can't be blank");
        cardTextYear.innerHTML = "YY"
    } else if (!inputN(cardYear)) {
        showError(inputYear, "Number only");
    } else {
        showSuccess(inputYear);
        checkValueYear = true
    }
    return checkValueYear;
    console.log(checkValueYear);
}

function checkCVC() {
    let checkValueCVC = false;
    const cardCVC = inputCVC.value;
    cardTextCVC.innerHTML = inputCVC.value;
    if (!inputEmpty(cardCVC)) {
        showError(inputCVC, "Can't be blank");
        cardTextCVC.innerHTML = "CVC"
    } else if (!inputN(cardCVC)) {
        showError(inputCVC, "Wrong format, Number only");
    } else {
        showSuccess(inputCVC);
        checkValueCVC = true
    }
    return checkValueCVC;
    console.log(checkValueCVC);
}

function inputText(value) {
    const re = /^[a-zA-Z\s]*$/;
    return re.test(value);
}

function inputN(value) {
    const re = /^[0-9 ]+$/;
    return re.test(value);
}

function inputEmpty(value) {
    return (value === "" ? false : true);
}

function showError(value, newText) {
    const inputFail = value.nextElementSibling
    const borderError = value;
    inputFail.classList.remove("inactive");
    inputFail.classList.add("error");
    borderError.classList.add("redBorder");
    inputFail.innerHTML = newText;
}

function showSuccess(value) {
    const inputFail = value.nextElementSibling
    const borderError = value;
    inputFail.classList.add("inactive");
    inputFail.classList.remove("error");
    borderError.classList.remove("redBorder");
    inputFail.innerHTML = "";
}

btnConfirm.addEventListener("click", function (e) {
    e.preventDefault();
    let CheckNameTrue = checkName();
    let CheckNumberTrue = checkNumber();
    let CheckMonthTrue = checkMonth();
    let CheckYearTrue = checkYear();
    let CheckCVCTrue = checkCVC();

    let checkForm = CheckNameTrue && CheckNumberTrue && CheckMonthTrue && CheckYearTrue && CheckCVCTrue;

    if (checkForm) {
        formContainer.classList.add("inactive");
        confirmContainer.classList.remove("inactive")
    }
})

btnContinue.addEventListener("click", function (e) {
    formContainer.classList.remove("inactive");
    confirmContainer.classList.add("inactive");
    document.getElementById("form").reset();
    cardTextName.innerHTML = "Jane Appleseed"
    cardTextNumber.innerHTML = "1234 5678 9123 0000"
    cardTextMonth.innerHTML = "MM"
    cardTextYear.innerHTML = "YY"
    cardTextCVC.innerHTML = "CVC"
})


