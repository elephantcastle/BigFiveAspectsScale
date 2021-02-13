<template>
  <v-container>
    <h1>{{ $t("general.title") }} test</h1>
    <v-progress-linear :value="progress" height="25" rounded color="light-blue">
      <strong>{{ Math.ceil(progress) }}%</strong>
    </v-progress-linear>
    <v-card>
      <p>{{ $t('questions')[index] }}</p>
      <v-card
        v-for="(answer, i) in $t('answers')"
        :key="i"
        @click="setAnswer(i)"
      >
        {{ answer }}
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: "test",
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    progress() {
      return this.index/this.$t('questions').length*100;
    },
  },
  methods:{
    ...mapMutations(['updateAnswer']),
    setAnswer(value){
      this.updateAnswer([this.index, value])
      this.index++
    }
  }
};
</script>

<style>
</style>

