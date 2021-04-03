<template>
  <v-app-bar app hide-on-scroll color="#F5F5F">
    <div class="d-flex align-center">
      <v-btn text plain rounded large to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 logo-image"
          contain
          transition="scale-transition"
          width="40"
        />
        <div class="hidden-sm-and-down">{{ $t("general.title") }}</div>
      </v-btn>
    </div>

    <v-spacer></v-spacer>
    <v-btn class="hidden-sm-and-down" text to="/retrieve">
      {{ $t("general.retrievereport") }}
    </v-btn>
    <LanguageMenu />
    <NavigationMenu />
  </v-app-bar>
</template>

<script>
import LanguageMenu from "@/components/LanguageMenu";
import NavigationMenu from "@/components/NavigationMenu";
export default {
  components: {
    LanguageMenu,
    NavigationMenu,
  },
};
</script>