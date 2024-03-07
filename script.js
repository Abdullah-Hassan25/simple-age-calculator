const inputs = document.querySelectorAll(".card__input");
const dayElement = document.querySelector("#day");
const monthElement = document.querySelector("#month");
const yearElement = document.querySelector("#year");
let btn = document.querySelector(".card__button");
let output = document.querySelector(".card__resultValue");

const validateDay = (day) => {
  if (day && day > 0 && day <= 31) {
    return true;
  }
};
const validateMonth = (month) => {
  if (month && month > 0 && month <= 12) {
    return true;
  }
};
const validateYear = (year) => {
  const recentYear = new Date().getFullYear();
  if (year && year > 0 && year <= recentYear) {
    return true;
  }
};

const checkValidation = (dayElement, monthElement, yearElement) => {
  let arr = [false, false, false];
  if (!validateDay(dayElement.value)) {
    dayElement.classList.add("card__input--error");
  } else {
    arr[0] = true;
    dayElement.classList.remove("card__input--error");
  }

  if (!validateMonth(monthElement.value)) {
    monthElement.classList.add("card__input--error");
  } else {
    arr[1] = true;
    monthElement.classList.remove("card__input--error");
  }
  if (!validateYear(yearElement.value)) {
    yearElement.classList.add("card__input--error");
  } else {
    arr[2] = true;
    yearElement.classList.remove("card__input--error");
  }
  return arr.every((item) => item === true);
};
const calculateAge = function (year, month, day) {
  const today = new Date();
  const birthDay = new Date(year, month - 1, day);
  let monthDiff = today.getMonth() - birthDay.getMonth();
  let dayDiff = today.getDate() - birthDay.getDate();
  let age = today.getFullYear() - birthDay.getFullYear();
  // function result
  if (monthDiff < 0) {
    age--;
  } else if (monthDiff == 0 && dayDiff < 0) {
    age--;
  }
  return age;
};
const resultAge = function () {
  if (!checkValidation(dayElement, monthElement, yearElement)) {
    output.textContent = "--";
    return;
  }
  output.textContent = calculateAge(
    yearElement.value,
    monthElement.value,
    dayElement.value
  );
};
// enhancement
btn.addEventListener("click", resultAge);
inputs.forEach((element) => {
  element.addEventListener("keydown", (e) => e.key === "Enter" && resultAge());
});
