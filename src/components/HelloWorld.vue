<template>
  <v-container>
    <v-row class="justify-center pt-15">
      <v-card height="300" width="600">
        <v-row class="justify-center pt-5">
          <v-card-title>
            <h2>Login</h2>
          </v-card-title>
        </v-row>
        <v-row class="justify-center">
          <h3 class="pl-8 pt-5">usuario:</h3>
          <v-text-field
            color="deep-purple accent-3"
            loading
            class="pr-8 pl-5"
          ></v-text-field>
        </v-row>
        <v-row class="justify-center">
          <h3 class="pl-8 pt-5">Contraseña:</h3>
          <v-text-field
            color="deep-purple accent-3"
            loading
            class="pr-8 pl-5"
            type="password"
          ></v-text-field>
        </v-row>
        <v-row class="justify-center pt-10">
          <v-btn elevation="2" color="deep-purple accent-3" router-link to="/about">Ingresar</v-btn>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
