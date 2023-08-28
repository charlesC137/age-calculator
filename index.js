const inputDay = document.getElementById('input-day');
const inputMonth = document.getElementById('input-month');
const inputYear = document.getElementById('input-year');
const displayYear = document.getElementById('display-year');
const displayMonth = document.getElementById('display-month');
const displayDay = document.getElementById('display-day');
const calculateBtn = document.getElementById('calculate-btn');
const notification = document.querySelector('.notification');
const inputTags = document.querySelectorAll('#input-section p');

calculateBtn.addEventListener('click', () => {
   calculateAge();
});

console.log(inputTags);

function calculateAge(){
  const workingDay = parseInt(inputDay.value) - 1;
  const workingMonth = parseInt(inputMonth.value) - 1;
  const workingYear = parseInt(inputYear.value);
  const aYear = 31557600000;
  const aMonth = 2626600000;
  const aDay = 86400000;
  
  if((workingDay || workingDay === 0) 
      && (workingMonth || workingMonth === 0) 
      && workingYear &&
      workingMonth < 12 && workingDay < 31
    ){
    const currentDate = new Date().getTime();
    const inputDate = new Date(workingYear, workingMonth, workingDay).getTime();
    const age = currentDate - inputDate;
    removeErrorDisp();
    
    if( age > 0){
      const years = Math.floor(age / aYear);
      const months = Math.floor((age % aYear) / aMonth);
      const days = Math.floor((age % aMonth) / aDay);
      removeErrorDisp();

      displayDay.textContent = days;
      displayMonth.textContent = months;
      displayYear.textContent = years;
    } else{
      errorDisplay();
    }
  } else{
    errorDisplay();
  }
}

function errorDisplay(){
  notification.textContent = 'Invalid Input!'
  inputTags.forEach((inputTag) => {
    inputTag.style.color = 'rgb(231, 40, 40)';
  })
}

function removeErrorDisp(){
  notification.textContent = ''
  inputTags.forEach((inputTag) => {
    inputTag.style.color = '';
  })
}