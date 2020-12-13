<template>
<v-container>
      <v-row no-gutters class="header">
          <v-card-title class="title">
            {{ bu }}
          </v-card-title>
          <v-btn color="#452f85">
            <v-img
            :src="require('../assets/Adeo_logo.jpg')"
            width=0
          />
            <span class="buttonTitle">
              Create store
            </span>
          </v-btn>
      </v-row>
      <v-row class="listCard">
        <div class="storeCard"  v-for="store in stores.list" :key="store.id">
          <v-card-title>
            Store {{store.storeNumber}}
          </v-card-title>
          <v-card-subtitle>
            Created: {{store.effectiveDate}}
          </v-card-subtitle>
        </div>
      </v-row>
</v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      bu: 'LMFR'
    }
  },
  computed: {
    ...mapState(['stores'])
  }
}
</script>
<style>
.header {
  margin: 0px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0;
    margin-bottom: 32px;
    border-bottom: 1px solid #d5dde5;
}
.buttonTitle {
  color: white;
}
.title {
  color: #452f85;
  padding: 0px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}
.storeCard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 3px 6px rgba(33,41,52,.15), 0 2px 4px rgba(33,41,52,.12);
    border-radius: 4px;
    background-color: #fff;
    border-left: 8px solid #F0F8FF;
    padding: 24px 24px 24px 16px;
    transition: border-left .1s ease-in-out;
    cursor: pointer;
}
.listCard {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    grid-auto-rows: minmax(200px,auto);
    grid-gap: 2em;
}
</style>
