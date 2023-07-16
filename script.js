const inputText = document.getElementById('inputText');
const convertTo = document.getElementById('convertTo');
const convertBtn = document.getElementById('convertBtn');
const outputText = document.getElementById('outputText');

function convertText() {
  const text = inputText.value;
  const conversionType = convertTo.value;

  switch (conversionType) {
    case 'uppercase':
      outputText.value = text.toUpperCase();
      break;
    case 'lowercase':
      outputText.value = text.toLowerCase();
      break;
    case 'titlecase':
      outputText.value = text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      break;
    default:
      outputText.value = 'Invalid conversion type.';
  }
}

convertBtn.addEventListener('click', convertText);
