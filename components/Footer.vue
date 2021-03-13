<template>
  <v-footer padless class="footer">
    <v-card flat tile width="100%" class="text-center">
      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} —
        <strong>{{$t("general.title")}}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>