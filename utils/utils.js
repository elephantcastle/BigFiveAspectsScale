export const getGraphData = results => {
  let traitsBreakdown = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let scoreAdjustments = [6, 6, 4, 6, 5, 6, 5, 4, 6, 6];
  results.forEach((element, index) => {
    const traitIndex = index % 10;
    traitsBreakdown[traitIndex] +=
      index / 10 < scoreAdjustments[traitIndex] ? element : 5 - element;
  });
  const traits = ["o", "c", "e", "a", "n"];

  let resultDictionary = {
    traits: [],
    groupedFacets: {"o":[], "c":[], "e":[], "a":[], "n":[]}
  };

  traits.forEach((t, i) => {
    resultDictionary['traits'].push(traitsBreakdown.slice(i, i + 1)[0] + traitsBreakdown.slice(5 + i, 5 + i + 1)[0]);
    resultDictionary['groupedFacets'][t].push(traitsBreakdown.slice(i, i + 1)[0]);
    resultDictionary['groupedFacets'][t].push(traitsBreakdown.slice(5 + i, 5 + i + 1)[0]);
  });
  return resultDictionary
};
