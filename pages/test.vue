<template>
  <v-container>
    <v-progress-linear :value="progress" height="25" rounded color="light-blue">
      <strong>{{ Math.ceil(progress) }}%</strong>
    </v-progress-linear>
    <v-card class="question">
      {{ $t("questions")[index] }}
    </v-card>
    <div class="answers-container">
      <v-card
        class="answers"
        v-for="(answer, i) in $t('answers')"
        :key="i"
        @click="setAnswer(i)"
      >
        {{ answer }}
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "test",
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    progress() {
      return (this.index / this.$t("questions").length) * 100;
    },
  },
  methods: {
    ...mapMutations(["updateAnswer", "calculateResults"]),
    setAnswer(value) {
      if (this.index === 100) {
        this.calculateResults();
        this.$router.push({ path: `/results` });
      } else {
        this.updateAnswer([this.index, value]);
        this.index++;
      }
    }
  },
};
</script>

<style>
.question {
  margin: 15px 0;
  padding: 20px;
  font-size: 30px;
  border-radius: 10px;
}
.answers {
  margin: 20px 70px;
  padding: 15px;
  font-size: 20px;
  border-radius: 10px;
}
</style>

