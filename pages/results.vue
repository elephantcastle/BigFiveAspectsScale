<template>
  <v-container>
    <h1 class="title-chart">Your Five Aspects Scale personality</h1>
    <h1 class="text-center id-text">Save this id to retrieve this report in the future: <b>{{_id}}</b></h1>
    <apexchart
      class="primary-chart"
      :options="traitOptions"
      :series="[{ name: 'ocean-breakdown', data: graphData.traits }]"
    />

    <h2 class="title-chart">Trait Breakdown</h2>
    <h4 class="title-chart">
      Each individual trait can be further breakdown in 2 major Aspects
    </h4>
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
import { mapState } from "vuex";
import config from "./../utils/chart-options"

export default {
  name: "results",
  data() {
    return {
      options: {
        ...config
      },
    };
  },
  computed: {
    ...mapState(["graphData", "_id"]),
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
.title-chart {
  margin: 10px auto;
  text-align: center;
}
.primary-chart > div {
  margin: 0 auto;
}
.secondary-chart {
  max-width: 850px;
  margin: 0 auto;
}
.secondary-chart > div {
  margin: 0 auto;
}
.id-text {
  font-size: 18px;
  margin: 10px 0 0px 0;
  user-select: text;
}
</style>


