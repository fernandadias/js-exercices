let main = document.getElementById('main-rounded');
let radius_a = document.getElementById('ra');
let radius_b = document.getElementById('rb');
let radius_c = document.getElementById('rc');
let radius_d = document.getElementById('rd');

const inicialState = [20, 20, 20, 20];

function setInitialState() {
  radius_a.value = inicialState[0];
  radius_b.value = inicialState[1];
  radius_c.value = inicialState[2];
  radius_d.value = inicialState[3];

  setRadius();
}

function setRadius() {
  main.style.borderTopLeftRadius = radius_a.value + 'px';
  main.style.borderTopRightRadius = radius_b.value + 'px';
  main.style.borderBottomRightRadius = radius_c.value + 'px';
  main.style.borderBottomLeftRadius = radius_d.value + 'px';
}

setInitialState()