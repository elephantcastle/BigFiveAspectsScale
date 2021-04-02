const normalData = {
  traits: [
    { mean: 3.99, SD: 0.5 },
    { mean: 3.21, SD: 0.63 },
    { mean: 3.67, SD: 0.56 },
    { mean: 3.77, SD: 0.51 },
    { mean: 2.59, SD: 0.68 }
  ],
  groupedFacets: {
    o: [
      { mean: 3.92, SD: 0.6 },
      { mean: 4.07, SD: 0.62 }
    ],
    c: [
      { mean: 3.25, SD: 0.72 },
      { mean: 3.17, SD: 0.73 }
    ],
    e: [
      { mean: 3.67, SD: 0.66 },
      { mean: 3.68, SD: 0.66 }
    ],
    a: [
      { mean: 4.06, SD: 0.63 },
      { mean: 3.48, SD: 0.64 }
    ],
    n: [
      { mean: 2.55, SD: 0.78 },
      { mean: 2.63, SD: 0.72 }
    ]
  }
};

function GetZPercent(z) {
  //z == number of standard deviations from the mean

  //if z is greater than 6.5 standard deviations from the mean
  //the number of significant digits will be outside of a reasonable
  //range
  if (z < -6.5) return 0.0;
  if (z > 6.5) return 1.0;

  var factK = 1;
  var sum = 0;
  var term = 1;
  var k = 0;
  var loopStop = Math.exp(-23);
  while (Math.abs(term) > loopStop) {
    term =
      (((0.3989422804 * Math.pow(-1, k) * Math.pow(z, k)) /
        (2 * k + 1) /
        Math.pow(2, k)) *
        Math.pow(z, k + 1)) /
      factK;
    sum += term;
    k++;
    factK *= k;
  }
  sum += 0.5;
  return sum;
}

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
    groupedFacets: { o: [], c: [], e: [], a: [], n: [] }
  };

  traits.forEach((t, i) => {
    resultDictionary["traits"].push(
      traitsBreakdown.slice(i, i + 1)[0] +
        traitsBreakdown.slice(5 + i, 5 + i + 1)[0]
    );
    resultDictionary["groupedFacets"][t].push(
      traitsBreakdown.slice(i, i + 1)[0]
    );
    resultDictionary["groupedFacets"][t].push(
      traitsBreakdown.slice(5 + i, 5 + i + 1)[0]
    );
  });

  // Normalize the result based on N=189
  let normalDictionary = {
    traits: [],
    groupedFacets: { o: [], c: [], e: [], a: [], n: [] }
  };

  resultDictionary["traits"].forEach((result, index) => {
    normalDictionary["traits"][index] =
      Math.round(
        100 *
          100 *
          GetZPercent(
            (result / 20 - normalData["traits"][index].mean) /
              normalData["traits"][index].SD
          )
      ) / 100;
  });
  for (let trait in resultDictionary["groupedFacets"]) {
    resultDictionary["groupedFacets"][trait].forEach((result, index) => {
      normalDictionary["groupedFacets"][trait][index] =
        Math.round(
          100 *
            100 *
            GetZPercent(
              (result / 10 - normalData["groupedFacets"][trait][index].mean) /
                normalData["groupedFacets"][trait][index].SD
            )
        ) / 100;
    });
  }
  return normalDictionary;
};
