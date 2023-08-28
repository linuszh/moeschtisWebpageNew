let dateList = [
  '08.09.2023 - 11.09.2023',
  '13.09.2024 - 15.09.2024',
  '18.09.2025 - 21.09.2025',
  '17.09.2026 - 20.09.2026',
  '16.09.2027 - 19.09.2027',
  '14.09.2028 - 17.09.2028'
];

let timerElement = document.getElementById('timer');

function startTimer() {
  let currentDate = new Date();
  let nextDate = getNextDate(currentDate);
  let countDownDate = new Date(nextDate.split(' - ')[0]).getTime();

  let timerInterval = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(timerInterval);
      timerElement.innerHTML = "EXPIRED";
      startTimer();
    }
  }, 1000);
}

function getNextDate(currentDate) {
  for (let i = 0; i < dateList.length; i++) {
    let dateRange = dateList[i].split(' - ');
    let startDate = new Date(dateRange[0]);
    let endDate = new Date(dateRange[1]);

    if (currentDate >= startDate && currentDate <= endDate) {
      return dateList[i];
    } else if (currentDate < startDate) {
      return dateList[i];
    }
  }
  return null;
}

startTimer();