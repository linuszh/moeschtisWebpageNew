```javascript
let dateList = [
  '08.09.2023 - 11.09.2023',
  '13.09.2024 - 15.09.2024',
  '18.09.2025 - 21.09.2025',
  '17.09.2026 - 20.09.2026',
  '16.09.2027 - 19.09.2027',
  '14.09.2028 - 17.09.2028'
];

window.onload = function() {
  startTimer();
  hidePastDates();
  displayGallery();
}

function hidePastDates() {
  let currentDate = new Date();
  let dateListElement = document.getElementById('dateList');
  dateList = dateList.filter(dateRange => {
    let endDate = new Date(dateRange.split(' - ')[1].split('.').reverse().join('-'));
    return endDate >= currentDate;
  });
  dateListElement.innerHTML = dateList.join('<br>');
}
```