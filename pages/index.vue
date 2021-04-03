<template>
  <v-container class="middlealign">
    <h1>{{ $t("general.title") }}</h1>
    <h3 class="subtitle-app">{{ $t("general.subtitle") }}</h3>
    <p>
      The Big Five Aspect Scale is a comprehensive, open-source 100-item
      personality measure, which is scored so that you will receive information
      about five major personality traits and their ten aspects. This test is
      based on Jordan Peterson, Colin DeYoung, Lena Quilty, Jeremy Gray's
      research. The Big Five Aspect Scale come from the statistical study of
      responses to personality items, using a technique called factor analysis
      researchers can look at the responses of people to hundreds of personality
      items and ask the question "what is the best was to summarize an
      individual?". This has been done with many samples and the general result
      is that, while there seem to be unlimited personality variables, five
      stand out from the pack in terms of explaining a lot of a persons answers
      to questions about their personality: extraversion, neuroticism,
      agreeableness, conscientiousness and openness to experience.
    </p>

    <v-row class="container-main-options">
      <ul>
        <li>
          Scientific Validity: research included factor analysis to identify the
          5 traits and 10 aspects.
        </li>
        <li>Free: the set of items was developed as a public domain set.</li>
        <li>Translated: available in more languages</li>
      </ul>
    </v-row>
    <v-btn outlined text x-large elevation="2" class="button-style" to="/intro">
      Take the test
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "index",
};
</script>

<style>
</style>

