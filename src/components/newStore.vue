<template>
  <div>
    <v-container class="newStore">
      <v-card-title class="title"> Create a new store </v-card-title>
      <v-list-item>
        <v-list-item-content>
          <div class="displayFlex">
            <div>
              <v-list-item-title
                class="metaData"
                v-for="metaData in data"
                :key="metaData"
              >
                {{ metaData }}
              </v-list-item-title>
            </div>
            <div>
              <v-list-item-title class="number">
                {{ randomNumber }}
              </v-list-item-title>
              <v-list-item-title class="fileInput">
                <v-file-input
                  v-model="files"
                  class="fileInput"
                  color="deep-purple accent-4"
                  counter
                  multiple
                  placeholder="Select your file"
                  prepend-icon="mdi-paperclip"
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
              </v-list-item-title>
              <v-list-item-title class="data">
              </v-list-item-title>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'newStore',
  data () {
    return {
      files: [],
      data: ['Number of your new store:', 'Add your excel field']
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
.displayFlex {
  display: flex
}
.number {
  margin-top: 24px;
  margin-left: 36px;
  color: grey;
}
.newStore {
  padding: 32px;
  background-color: #fff;
  border: 8px solid #7756fd;
  border-radius: 4px;
  margin-top: 30px;
}
.metaData {
  font-weight: 700;
  margin-top: 24px;
  color: black;
}
.data {
   margin-top: 24px;
  margin-left: 10px;
  color: grey;
}
.title {
 color: #452f85;
  padding: 0px;
  font-size: 18px;
  font-weight: 900 !important;
  line-height: 24px;
}
.fileInput {
  padding: 0px;
}
.newStoretitle {
  font-size: 1.25rem !important;
  font-weight: 500;
  letter-spacing: 0.0125em !important;
  margin: 24px;
}
</style>
