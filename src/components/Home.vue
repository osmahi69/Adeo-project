<template>
<v-container>
      <v-row no-gutters class="header">
          <v-card-title class="title">
            {{ bu }}
          </v-card-title>
          <v-btn color="#452f85" @click="goToNewStore(1)">
            <v-icon color="white" class="pr-1"> add_circle_outline</v-icon>
            <span class="buttonTitle">
              Create store
            </span>
          </v-btn>
      </v-row>
        <StoreCard  :stores="stores"/>
</v-container>
</template>

<script>
import { mapState } from 'vuex'
import StoreCard from './StoreCard'

export default {
  name: 'Home',
  components: {
    StoreCard
  },
  data () {
    return {
      bu: 'LMFR'
    }
  },
  methods: {
    goToStore (storeId) {
      this.$router.push({ path: `/store/${storeId}` })
    },
    goToNewStore () {
      this.$router.push('/newStore')
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
  font-weight: 900 !important;
  line-height: 24px;
}

</style>
