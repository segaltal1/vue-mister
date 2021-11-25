<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["data"],
  data() {

    this.style = {
      color: this.data.name.includes("Exchange") ? "#ABEBC6" : "#0000ff75",
      bColor: this.data.name.includes("Exchange") ? "#52BE80" : "#5DADE2",
    };
    return {
      chartData: {
        labels: this.data.values.map((v) =>
          new Date(v.x * 1000).toLocaleDateString()
        ),
        datasets: [
          {
            label: this.data.unit,
            data:[...this.data.values],
            fill: true,
            borderColor: this.style.color,
            backgroundColor: this.style.bColor,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: "white",
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: "white",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
        // maintainAspectRatio: false,
        
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
