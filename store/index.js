import {getGraphData} from './../utils/utils'

export const state = () => ({
  results: [],
  age: undefined,
  sex: undefined,
  graphData: {}
});

export const mutations = {
  updateAnswer(state, value) {
    state.results[value[0]] = value[1];
  },
  setAge(state, age) {
    state.age = age;
  },
  setSex(state, sex) {
    state.sex = sex;
  }
};

export const actions = {
  calculateResults(state) {
    this.state.graphData = getGraphData(state.results)
  }
};
