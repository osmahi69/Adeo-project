<template>
      <v-row class="listCard">
        <div class="storeCard"  v-for="store in stores.list" :key="store.id" @click="goToStore(store.id)">
          <v-icon color="blue" large>house</v-icon>
          <v-card-title class="title">
            Store {{store.storeNumber}}
          </v-card-title>
          <v-card-subtitle class="subTitle">
            Last update: {{store.effectiveDate}}
          </v-card-subtitle>
          <v-icon class="trash" color="red">
            restore_from_trash
          </v-icon>
        </div>
      </v-row>
</template>

<script>

export default {
  name: 'StoreCard',
  props: {
    stores: Array
  },
  methods: {
    goToStore (storeId) {
      this.$router.push({ path: `/store/${storeId}` })
    }
  }
}
</script>
<style>
.trash {
  padding-left: 180px;

}
.subTitle {
    color: #929fb1;
    margin-top: 15px;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 0px;
}
.title {
  color: #452f85;
  padding: 0px;
  font-size: 18px;
  font-weight: 900 !important;
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
