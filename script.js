const display = document.getElementById('display');

    function appendValue(value) {
      if (display.textContent === '0') {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }

    function clearDisplay() {
      display.textContent = '0';
    }

    function calculateResult() {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = 'Error';
      }
    }

    // Optional: Allow keyboard input
    document.addEventListener('keydown', (e) => {
      if ((e.key >= '0' && e.key <= '9') || "+-*/().".includes(e.key)) {
        appendValue(e.key);
      } else if (e.key === 'Enter') {
        calculateResult();
      } else if (e.key === 'Backspace') {
        display.textContent = display.textContent.slice(0, -1) || '0';
      } else if (e.key === 'Escape') {
        clearDisplay();
      }
    });