//https://github.com/cscan/vue-excel-editor
<template>
  <div id="app">
    <v-app class="app">
      <v-app-bar color="#F0F8FF">
        <v-avatar @click="goToHome()" class="avatar" >
          <v-img
            :src="require('./assets/Adeo_logo.jpg')"
            class="grey lighten-2 pl-6"
            width="0"
          />
        </v-avatar>
        <v-toolbar-title color="blue" class="ml-3 headerTitle"
          >HALLEY</v-toolbar-title
        >
        <v-spacer> </v-spacer>
        <div>
        <v-icon color="blue">person</v-icon>
        <span class="name"> {{user.list[0].name}}</span>
        </div>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab @click="goToHome()">HOME</v-tab>
            <v-tab @click="goToStore()">NEW STORE</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-container style="height: 1000px" class="container">
        <router-view></router-view>
      </v-container>
    </v-app>
  </div>
</template>
<script>
import stores from '@/assets/data/stores.json'
import store from '@/assets/data/store.json'
import user from '@/assets/data/user.json'
import { mapState } from 'vuex'

export default {
  name: 'App',
  methods: {
    goToHome () {
      this.$router.push('/')
    },
    goToStore () {
      this.$router.push('/newStore')
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted () {
    this.$store.dispatch('stores/setValue', { list: stores })
    this.$store.dispatch('store/setValue', { list: store })
    this.$store.dispatch('user/setValue', { list: user })
  }
}
</script>
<style>
.name {
  color:blue;
  padding-right: 10px;
  text-shadow: 0px 0px 5px red;
}
.avatar {
  cursor: pointer;
  text-shadow: 0px 0px 5px red;
}
.headerTitle {
  color: blue;
  font-family: Helvetica;
  text-shadow: 0px 0px 5px red;
}
</style>
