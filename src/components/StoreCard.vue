<template>
      <v-row class="listCard">
        <div class="storeCard"  v-for="store in stores.list" :key="store.id" @click="goToStore(store.id)">
          <v-card-title>
            Store {{store.storeNumber}}
          </v-card-title>
          <v-card-subtitle>
            Created: {{store.effectiveDate}}
          </v-card-subtitle>
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
