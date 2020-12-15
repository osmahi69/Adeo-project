<template>
    <section>
      <input type="file" @change="onChange" />
      <xlsx-read :file="file">
        <xlsx-json :sheet="selectedSheet">
          <template #default="{collection}">
            <div>
              {{ collection }}
            </div>
          </template>
        </xlsx-json>
      </xlsx-read>
    </section>
</template>
<script>
import XlsxRead from './XlsxRead'
import XlsxJson from './XlsxJson'

export default {
  components: {
    XlsxRead,
    XlsxJson
  },
  data () {
    return {
      file: null
    }
  },
  methods: {
    onChange (event) {
      this.file = event.target.files ? event.target.files[0] : null
    }
  }
}
</script>
