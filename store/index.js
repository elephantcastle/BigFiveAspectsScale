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
  },
  calculateResults(state) {
    state.graphData = getGraphData(state.results)
  }
};

export const getters = {
  getAge(state){
    return state.age
  },
  getSex(state){
    return state.sex
  }
};