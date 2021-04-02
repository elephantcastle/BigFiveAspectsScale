export default {
  chart: {
    width: "75%",
    height: "100%",
    type: "bar"
  },
  legend: {
    show: false
  },
  plotOptions: {
    bar: {
      distributed: true
    }
  },
  xaxis: {},
  yaxis: {
    min: 0,
    max: 100
  },
  fill: {
    colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]
  },
  dataLabels: {
    style: {
      colors: ["#5A2A27"]
    }
  },
  responsive: [
    {
      breakpoint: 750,
      options: {
        chart: {
          height: 450
        }
      }
    }
  ]
};
