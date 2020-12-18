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
                <InputFile :file="file"/>
              </v-list-item-title>
              <v-list-item-title class="data"> </v-list-item-title>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
      <div class="btn" v-if="file">
      <v-btn  @click="goToStoreDetails" large color="#78be20" >  Store details </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import InputFile from "./InputFile";
export default {
  name: "newStore",
  components: {
    InputFile,
  },
  data() {
    return {
      data: ["Number of your new store:", "Add your excel field"],
      file: []
    };
  },
  methods: {
    goToStoreDetails () {
    this.$router.push('/newStore/details')
    }
  },
  computed: {
    randomNumber() {
      return Math.floor(Math.random() + 100);
    },
  },
};
</script>

<style>
.displayFlex {
  display: flex;
}
.number {
  margin-top: 24px;
  margin-left: 36px;
  color: grey;
}
.btn {
  text-align: center;
}
.newStore {
  padding: 32px;
  background-color: #fff;
  border: 8px solid #41a017;
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
  color:#053e1f;
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
