<template>
  <v-app>
    <v-navigation-drawer fixed app>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {}
</script>
