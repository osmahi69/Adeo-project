<template>
  <div>
    <v-card outlined>
      <v-card-title class="title"> Store </v-card-title>
       <v-list-item>
        <v-list-item-content>
          <div class="displayFlex">
            <div>
              <v-list-item-title class="metaData" v-for="metaData in data" :key="metaData">
              {{metaData}}
              </v-list-item-title>
            </div>
          <div>
              <v-list-item-title class="data">
              {{selectedStore.id}}
              </v-list-item-title>
              <v-list-item-title class="data">
              {{selectedStore.storeNumber}}
              </v-list-item-title>
              <v-list-item-title class="data">
              {{selectedStore.effectiveDate}}
              </v-list-item-title>
              </div>
            </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Store',
  data () {
    return {
      data: ['id:', 'Store number:', 'Last update:']
    }
  },
  computed: {
    ...mapState((['stores'])),
    selectedStore () {
      const id = this.$route.params.storeId
      const selectedStore = this.stores.list.find((store) => store.id.toString() === id)
      return selectedStore
    }
  }
}
</script>
<style>
.displayFlex {
  display: flex;
}
.title {
  font-weight: 900;
  color:#053e1f;
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
</style>
