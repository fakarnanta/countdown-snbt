const seconds = document.querySelector(".seconds .number");
const minutes = document.querySelector(".minutes .number");
const hours = document.querySelector(".hours .number");
const days = document.querySelector(".days .number");

const targetDate = new Date("2024-06-13T15:00:00");

const timeFunction = setInterval(() => {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  const remainingSeconds = Math.floor((timeDifference / 1000) % 60);
  const remainingMinutes = Math.floor((timeDifference / 1000 / 60) % 60);
  const remainingHours = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
  const remainingDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

  seconds.textContent = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  minutes.textContent = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
  hours.textContent = remainingHours < 10 ? `0${remainingHours}` : remainingHours;
  days.textContent = remainingDays < 10 ? `0${remainingDays}` : remainingDays;

  if (timeDifference <= 0) {
    clearInterval(timeFunction);

    document.body.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
        <h1 style="font-size: 40px; color: #ff0066; margin-bottom: 10px;">Congratulations!</h1>
        <p style="font-size: 20px; color: #fff; margin-top: 20px;">Congrats atas kerja kerasmu selama ini!</p>
      </div>
    `;

    return;
  }
}, 1000);
