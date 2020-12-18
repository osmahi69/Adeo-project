<template>
  <v-container class="storeDetails">
    <v-card-title class="title"> Details of store </v-card-title>
     <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
     </v-card-title>
    <v-data-table
      :headers="headers"
      :items="store.list"
      :search="search"
      sort-by="calories"
      class="elevation-1"
    >
    <template v-slot:item.Numero="props">
          <v-edit-dialog
            :return-value.sync="props.item.Numero"
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            {{ props.item.Numero }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.Numero"
                :rules="[max25chars]"
                label="Edit"
                single-line
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "StoreDetails",
  data() {
    return {
      search: '',
      headers: [
        {
          text: "Rayon",
          align: "start",
          sortable: false,
          value: "r",
        },
        { text: "Sous rayon", value: "sr" },
        { text: "Type", value: "t" },
        { text: "Libellé type", value: "Libelle" },
        { text: "Numéro d'allée", value: "Numero" },
      ],
    };
  },
  computed: {
    ...mapState(["store"]),
  },
};
</script>

<style>
.title {
  color:#053e1f;
  padding: 0px;
  font-size: 18px;
  font-weight: 900 !important;
  line-height: 24px;
  margin-bottom: 50px;
}
.storeDetails {
  padding: 32px;
  background-color: #fff;
  border: 8px solid #41a017;
  border-radius: 4px;
  margin-top: 30px;
}
</style>
