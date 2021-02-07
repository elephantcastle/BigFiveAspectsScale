<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon x-large v-bind="attrs" v-on="on">
          <i aria-hidden="true" class="notranslate menu-icon"></i>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item-group v-model="$nuxt.$route.path" color="primary">
          <v-list-item
            v-for="(item, i) in availableRoutes"
            :key="i"
            :to="item.path"
          >
            {{ item.name.toUpperCase() }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "NavigationMenu",
  computed: {
    availableRoutes() {
      return this.$router.options.routes.filter((i) => i.name !== "results" &&  i.name !== this.$nuxt.$route.name);
    },
  }
};
</script>