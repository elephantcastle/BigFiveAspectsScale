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
  setId(state, id) {
    state._id = id;
  },
  setResults(state, results){
    state.results = Json.parse(Json.stringify(results));
  },
  calculateResults(state) {
    state.graphData = getGraphData(state.results)
  }
};

export const actions = {
  async updateResults({commit}, value) {
    commit('setAge', value.age)
    commit('setSex', value.sex)
    commit('setId', value._id)
    await commit('setResults', value.testdata)
    await commit('calculateResults')
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