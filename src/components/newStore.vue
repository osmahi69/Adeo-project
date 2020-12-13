<template>
  <v-container>
    <v-card class="newStore">
      <v-card-title> new Store </v-card-title>
      <v-card
        elevation="4"
        width="400"
        height="50"
        class="d-flex align-center mb-6 number"
      >
        {{randomNumber}}
      </v-card>
      <v-file-input
      v-model="files"
      color="deep-purple accent-4"
      counter
      label="File input"
      multiple
      placeholder="Select your files"
      prepend-icon="mdi-paperclip"
      outlined
      :show-size="1000"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip
          v-if="index < 2"
          color="deep-purple accent-4"
          dark
          label
          small
        >
          {{ text }}
        </v-chip>

        <span
          v-else-if="index === 2"
          class="overline grey--text text--darken-3 mx-2"
        >
          +{{ files.length - 2 }} File(s)
        </span>
      </template>
    </v-file-input>
        </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'newStore',
  data () {
    return {
      files: []
    }
  },
  computed: {
    randomNumber () {
      return Math.floor(Math.random() + 100)
    }
  }
}
</script>

<style>
.newStore {
  border: 1px solid #d5dde5;
}
.number {
  justify-content: center;
  margin: auto;
}
</style>
