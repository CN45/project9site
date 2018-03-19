/* Functionality for the Message User widget
*/
var src = document.querySelector('.src-user');
var msg = document.querySelector('.message-user');
var buttonA = document.querySelector('.btn-bar');



buttonA.addEventListener('click', function() {
  if (src.value = "" && msg.value = "") {
    src.value = "Please enter a name";
  } else if (src.value = "" || msg.value = "") {
    src.value = "Please enter a name";
  } else {
    src.value = "Submitted";
}
});
//CHARTS

new Chart(document.getElementById("line-chart"), {
  type: 'line',

  data: {
    labels: ["16-22", "23-29", "30-35", "6-12", "13-19", "27-3", "4-10", "11-17", "18-24"],
    datasets: [{
      data: [700, 1300, 900, 1500, 2000, 1500, 1700, 2000, 1450, 1600, 2400, 2000],
      label: "Traffic",
      lineTension: 0,
      borderColor: "rgba(99, 99, 196, 0.8)",
      fill: true,
      backgroundColor: '#E6E6FA',
      pointBorderColor: 'rgba(99, 99, 196, 0.8)',
      pointBackgroundColor: 'white',
      backgroundColor: "rgba(188, 190, 235, 0.6)",
      pointRadius: 5,
      pointBorderWidth: 2

    }, ]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: 'TRAFFIC',
      fontColor: '#9B9AA1',
      position: "top"
    },

  }
});

var ctx = document.getElementById("firstChart").getContext('2d');
var firstChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: 'Daily Traffic',

      data: [65, 120, 175, 135, 240, 225, 110],
      hoverBackgroundColor: 'yellow',
      backgroundColor: [
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)'
      ],
      borderColor: [
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)',
        'rgba(99, 99, 196, 0.8)'

      ],
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Phones", "Tablet", "Desktop"],
    position: 'bottom',
    datasets: [{
      label: "Mobile Users",
      backgroundColor: ["#81D2A8", "#67ABB1", "rgba(99, 99, 196, 0.8)"],
      data: [600, 500, 2500, ],
      borderColor: "#80b6f4"

    }]
  },
  options: {

    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        boxHeight: 4,

      }
    },
    animation: {
      easing: "easeOutCirc"
    },
    title: {
      display: false,
      text: 'Mobile Users',
      verticalAlign: 'left',
      position: 'top',
      fontColor: 'grey',
      fontFamily: 'Roboto',
      fontSize: 16
    }
  }

});
