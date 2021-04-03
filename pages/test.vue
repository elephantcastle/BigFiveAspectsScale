<template>
  <v-container>
    <v-progress-linear :value="progress" height="25" rounded color="light-blue">
      <strong>{{ Math.ceil(progress) }}%</strong>
    </v-progress-linear>
    <div v-if="index<100">
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
    </div>
    <v-progress-circular
      class="loader"
      v-else
      :size="90"
      indeterminate
      color="primary"
    ></v-progress-circular>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "test",
  data() {
    return {
      index: 0
    };
  },
  computed: {
    ...mapState(["sex", "age", "results"]),
    progress() {
      return (this.index / this.$t("questions").length) * 100;
    },
  },
  methods: {
    ...mapMutations(["updateAnswer", "calculateResults"]),
    setAnswer(value) {
      if(this.index<100){
        this.updateAnswer([this.index, value + 1]);
        this.index++;
        if (this.index === 100) {
          this.processing = true;

          const payload = {};
          payload["testdata"] = JSON.parse(JSON.stringify(this.results));
          payload["sex"] = this.sex;
          payload["age"] = this.age;
          payload["language"] = this.$i18n.locale;
  
          const API =
            process.env.NODE_ENV === "production"
              ? "https://bigfiveaspectsapi.herokuapp.com"
              : "http://localhost:4000";

          axios
            .post(`${API}/results`, payload)
            .then((response) => {
              this.calculateResults();
              this.$router.push({ path: `/results` });
            })
            .catch((e) => {
              console.log(e);
              this.errors.push(e);
              this.$router.push("/crashpage");
            });
        }
      }
    },
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
.loader{
  position: absolute;
  top: 50%;
  left: calc(50% - 41px);
}
.answers {
  margin: 20px;
  padding: 15px;
  font-size: 20px;
  border-radius: 10px;
}
@media only screen and (min-width: 600px) {
  .answers {
    margin: 20px 70px;
    padding: 15px;
    font-size: 20px;
    border-radius: 10px;
  }
}
</style>

