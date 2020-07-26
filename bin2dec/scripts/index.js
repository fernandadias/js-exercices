let binContent = document.getElementById('bin');
let decContent = document.getElementById('dec');

let toDec = document.getElementById('toDec');
let toBin = document.getElementById('toBin');


function conversionToDecimal(binValue) {
  let newValue = 0;

  const binArray = Array.from(String(binValue), Number);
  let totalItens = binArray.length - 1;

  binArray.forEach((item, _) => {
    aux = item * Math.pow(2, totalItens);
    totalItens--;
    newValue += aux;
  })
  return newValue;
}

function conversionToBinary(decValue) {
  let newValue = 0;

  decValue = Number(decValue);
  binArray = [];
  while (decValue > 1) {
    binArray.push(decValue % 2);
    decValue = Math.floor(decValue / 2);
  }

  if (decValue > 0) binArray.push(1);

  newValue = String(binArray.reverse().join(''));

  return newValue;
}

toDec.onclick = () => {
  decContent.value = conversionToDecimal(binContent.value);
}

toBin.onclick = () => {
  binContent.value = conversionToBinary(decContent.value);
}
