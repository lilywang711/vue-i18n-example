<template>
  <div class="hello">
    <p>{{label}}</p>
    <button @click="switchLang">切换</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['lang']),
    label () {
      return this.$t('message.hello')
    }
  },
  methods: {
    switchLang () {
      let lang = ''
      if (this.lang === 'en') {
        lang = 'cn'
      } else {
        lang = 'en'
      }
      this.$store.commit('switchLang', lang)
    }
  }
}
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
