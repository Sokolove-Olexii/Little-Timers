// Завдання 1

// Створити таймер, який буде починати відлік
// з 1 години та зменшувати час кожну хвилину.
// При досягненні 30 хвилин, таймер повинен
// відправляти повідомлення екран про те,
// що залишилось менше половини часу.

// Завдання 2

// Створити таймер, який буде
// починати відлік з 30 секунд
// та зменшувати час кожну мілісекунду.
// При досягненні 10 секунд,
// таймер повинен відтворювати якусь анімацію,
// а при досягненні 0 секунд — виконувати певну дію,
// наприклад, робити кнопку почати знову активною.

//Task 1
function startHourTimer() {
  let minutes = 60;
  const timerInterval = setInterval(() => {
    minutes--;
    console.log(`Залишилось: ${minutes} хвилин`);

    if (minutes === 30) {
      alert("Залишилось менше половини часу!");
    }

    if (minutes <= 0) {
      clearInterval(timerInterval);
      console.log("Час вийшов!");
    }
  }, 60000); // Одна хвилина = 60000мс
}

//Task 2
function startMillisecondTimer() {
  let milliseconds = 15000; //30000 не проблема поставити, але довго чекати
  const timerElement = document.getElementById("timer-display");
  const button = document.getElementById("restart-button");
  button.disabled = true;

  const timerInterval = setInterval(() => {
    milliseconds -= 10;
    timerElement.textContent = `Залишилось: ${(milliseconds / 1000).toFixed(
      2
    )} секунд`; //toFixed зберігає лише два останніх числа після коми

    if (milliseconds === 7000) {
      document.body.classList.add("animate");
    }

    if (milliseconds <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Час вийшов!";
      button.disabled = false;
      document.body.classList.add("animate-b");
      document.body.classList.remove("animate");
    }
  }, 10);
}
