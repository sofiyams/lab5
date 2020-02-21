"use-strict";
const theForm = document.getElementById('the-form');
const theDate = document.querySelector('the-date');
const getDate = document.getElementById('datePicker');
const date = document.getElementById('date');
const template = date.innerText;

getDate.addEventListener('change', showDate);

function showDate() {
  const d = new Date(getDate.value);
  // update the h1 innerText here
  buildDate(d);
}

function buildDate(d) {
  date.innerText = `${template} ${d.toDateString()}`
}

// modify an interface elecment using a color input
const colorPicker = document.getElementById('color');
const value = document.getElementById('the-value');

function setColor() {
  // changes the background colour from the colour selected on colour picker
  value.style.backgroundColor = colorPicker.value;
  // changes the colour of the value 50
  value.style.color = "#eaeaea";
}

colorPicker.addEventListener('input', setColor);
setColor();

const theRange = document.getElementById('range');

function rangeAction() {
  value.innerText = `${theRange.value}`
  value.style.width = `${theRange.value}%`
}

theRange.addEventListener('input', rangeAction);
