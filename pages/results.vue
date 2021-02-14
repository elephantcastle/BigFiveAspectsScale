<template>
  <v-container>
    <h1>Your Five Aspects Scale personality</h1>
    <apexchart
      width="500"
      type="bar"
      :options="traitOptions"
      :series="[{ name: 'ocean-breakdown', data: graphData.traits }]"
    />

    <h3>Trait Breakdown</h3>
    <h5>Each individual trait can be further breakdown in 2 major Aspects</h5>
    <div v-for="trait in ['o', 'c', 'e', 'a', 'n']" :key="trait">
      <apexchart
        width="500"
        type="bar"
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
        legend: {
          show: false,
        },
        plotOptions: {
          bar: {
            distributed: true,
          },
        },
        xaxis: {},
        fill: {
          colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
        },
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
</style>


