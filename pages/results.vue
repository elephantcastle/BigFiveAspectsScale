<template>
  <v-container>
    <h1 class="title-chart">Your Five Aspects Scale personality</h1>
    <apexchart
      class="primary-chart"
      :options="traitOptions"
      :series="[{ name: 'ocean-breakdown', data: graphData.traits }]"
    />

    <h2 class="title-chart">Trait Breakdown</h2>
    <h4 class="title-chart">Each individual trait can be further breakdown in 2 major Aspects</h4>
    <div v-for="trait in ['o', 'c', 'e', 'a', 'n']" :key="trait">
      <h3 class="title-chart">{{ $t(`traits.${trait.toUpperCase()}`) }}</h3>
      <apexchart
        class="secondary-chart"
        :options="aspectOptions(trait)"
        :series="[
          { name: 'ocean-breakdown', data: graphData.groupedFacets[trait] },
        ]"
      />
    </div>
  </v-container>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "results",
  data() {
    return {
      graphData: {
        traits: [57, 56, 53, 63, 59],
        groupedFacets: {
          o: [26, 31],
          c: [28, 28],
          e: [26, 27],
          a: [30, 33],
          n: [28, 31],
        },
      },
      options: {
        chart: {
          width: "75%",
          height: "100%",
          type: "bar"
        },
        legend: {
          show: false,
        },
        plotOptions: {
          bar: {
            distributed: true,
          },
        },
        xaxis: {},
        yaxis: {min:0, max:100},
        fill: {
          colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
        },
        responsive: [
          {
            breakpoint: 750,
            options: {
              chart: {
                height: 450,
              }
            }
          }
        ]
      },
    };
  },
  created() {},
  computed: {
    // ...mapState(['graphData']),
    traitOptions() {
      const options = JSON.parse(JSON.stringify(this.options));
      let traits = this.$t("traits");
      options["xaxis"]["categories"] = Object.values(traits).sort((a, b) =>
        "OCEAN".indexOf(a[0]) > "OCEAN".indexOf(b[0]) ? 1 : -1
      );
      return options;
    },
  },
  methods: {
    aspectOptions(trait) {
      const options = JSON.parse(JSON.stringify(this.options));
      options["xaxis"]["categories"] = this.$t("aspects")[trait];
      return options;
    },
  },
};
</script>

<style>
.title-chart{
  margin: 20px auto;
  text-align: center;
}
.primary-chart > div{
  margin: 0 auto;
}
.secondary-chart{
  max-width: 850px;
  margin: 0 auto;
}
.secondary-chart>div{ 
  margin: 0 auto;
} 
</style>


