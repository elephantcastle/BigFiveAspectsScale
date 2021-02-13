export const state = () => ({
  results: []
});

export const mutations = {
  updateAnswer(state, value) {
    state.results[value[0]] = value[1];
  }
};
