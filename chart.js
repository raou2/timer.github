 const ctx = document.getElementById('myChart').getContext('2d');
//  Chart.defaults.global.width = 500; // set default width to 500 pixels
new Chart(ctx, {
    // Chart.defaults.global.barThickness = 10
    type: 'bar',
    data: {
      labels: [1, 2, 3, 4, 5, 6],
      datasets: [{
        label: '# of Votes',
        data: [[14,20], [8,11], [0,3], [3,7], [0,1], [4,6]],
        // data: [[0,14], [1,8], [3,10], [1,3], [1,4], 3],

        borderWidth: 0,
        barThickness: 5,
        backgroundColor:'tomato'
      },
      {
        label: '# of Votes',
        data: [[0,13], [1,7], [4,10], [1,2], [2,4], [0,4]],
        borderWidth: 0,
        barThickness: 5,
        backgroundColor:'dodgerblue'
      }
    ],
      
    },
    
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
