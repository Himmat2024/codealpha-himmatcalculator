const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');
    if (!key) return; 

    switch(key) {
      case 'C':
        display.value = '';
        break;
      case 'Backspace':
        display.value = display.value.slice(0, -1);
        break;
      case 'Enter':
        try {
          let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
          display.value = eval(expression);
        } catch {
          display.value = 'Error';
          setTimeout(() => display.value = '', 1500);
        }
        break;
      default:
        display.value += key;
    }
  });
});


window.addEventListener('keydown', e => {
  const allowedKeys = '0123456789+-/*.,'.split('');
  if (allowedKeys.includes(e.key)) {
    display.value += e.key;
  } else if (e.key === 'Enter') {
    try {
      let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
      display.value = eval(expression);
    } catch {
      display.value = 'Error';
      setTimeout(() => display.value = '', 1500);
    }
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === 'c') {
    display.value = '';
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".about-me h2");
  const text = "About Me";
  let i = 0;

  function type() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }

  target.textContent = "";
  type();
});


function sendEmail() {
  
  window.location.href = "mailto:h.himmat1000@gmail.com?subject=Calculator%20Feedback";
}
