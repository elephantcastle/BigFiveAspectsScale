export const getGraphData = results => {
  let traitsBreakdown = [];
  let scoreAdjustments = [6, 6, 4, 6, 5, 6, 5, 4, 6, 6];
  results.forEach((element, index) => {
    const traitIndex = index % 10;
    traitsBreakdown[traitIndex] +=
      index / 10 < scoreAdjustments[traitIndex] ? element : 5 - element;
  });
  const traits = ["o", "c", "e", "a", "n"];

  let resultDictionary = {
    traits: {},
    groupedFacets: { a: {}, c: {}, e: {}, n: {}, o: {} }
  };

  traits.forEach((t, i) => {
    resultDictionary['traits'][t] =
      traitsBreakdown.slice(i, i + 1) + traitsBreakdown.slice(5 + i, 5 + i + 1);
    resultDictionary['groupedFacets'][t + 0] = traitsBreakdown.slice(i, i + 1);
    resultDictionary['groupedFacets'][t + 1] = traitsBreakdown.slice(5 + i, 5 + i + 1);
  });
  return traits
};
