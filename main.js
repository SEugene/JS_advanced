fetch("texttoreplace.txt")
.then(function(response) {
    return response.text().then(function(text) {
      mytext.innerHTML = text.split('\r\n');
    });
  });

let textToChange = document.getElementById('mytext');

document.getElementById("hw-1").addEventListener('click', () => {
    textToChange.textContent = textToChange.textContent.replace(/'/g, '"')
});

document.getElementById("hw-2").addEventListener('click', () => {
    textToChange.textContent = textToChange.textContent.replace(/\B'|'\B/g, '"')
});
