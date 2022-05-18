// Options
const options = {
  chart : {
  type: 'radar'
},
  series: [
    {
      name: "Vibe",
      data: [45, 52, 38, 24, 33, 10]
    },
    {
      name: "Not a Vibe",
      data: [26, 21, 20, 6, 8, 15]
    }
  ],
  labels : ['Passed', 'Kind of Passed', 'Netural', 'Staring to Fail', "Failed", "Non Existant"],
  // colors : ["#F44336", "#E91E63", "#9C27B0"]
  theme : {
    palette : "palettel3"
  },
//   fill: {
//   type: 'gradient',
//   gradient: {
//     shade: 'light',
//     type: "vertical",
//     shadeIntensity: 1,
//     gradientToColors: undefined,
//     inverseColors: true,
//     opacityFrom: 0,
//     opacityTo: 100,
//     colorStops: [1]
//   }
// }
    
};

// instantiate new chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// render chart
chart.render();




