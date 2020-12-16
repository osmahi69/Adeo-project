<template>
  <section>
    <v-file-input
      v-model="file"
      @change="onChange"
      accept=".xlsx"
      type="file"
      class="fileInput"
      color="deep-purple accent-4"
      counter
      placeholder="Select your file"
      prepend-icon="mdi-paperclip"
      :show-size="1000"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
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
  </section>
</template>
<script>

export default {
  data() {
    return {
      file: null,
    };
  },
  methods: {
    onChange(event) {
      this.file = event.target.files ? event.target.files[0] : null;
    },
  },
};
</script>
