<template>
  <v-app>
    <Header />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: "default",
    middleware: 'route-guard',
};
</script>