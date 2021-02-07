<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon x-large v-bind="attrs" v-on="on">
          <v-icon :class="$i18n.localeProperties.name"></v-icon>
        </v-btn>
      </template>
      <v-card class="mx-auto" max-width="300" tile>
        <v-list dense>
          <v-subheader>Pick a language</v-subheader>
          <v-list-item-group v-model="$i18n.locale" color="primary">
            <v-list-item
              v-for="lang in availableLocales"
              :key="lang.code"
              @click="$i18n.setLocale(lang.code)"
            >
              <v-list-item-icon>
                <v-icon :class="lang.name"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{
                  lang.name.toUpperCase()
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "LanguageMenu",
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>