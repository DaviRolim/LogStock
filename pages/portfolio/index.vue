<template>
 <v-container>
   <v-layout row wrap>
     <v-flex xs12 sm6 offset-sm3>
        <v-select
          :items="symbols"
          item-text="name"
          item-value="symbol"
          v-model="acao"
          label="Search symbol"
          append-icon="search"
          autocomplete
        ></v-select>
        <p v-if="valor != 0">{{acao}} fechou o ultimo dia em: {{valor}}</p>
     </v-flex>
   </v-layout>
 </v-container> 
</template>

<script>
import lodash from 'lodash'
  export default {
    data () {
      return {
        acao: null
      }
    },
    computed: {
      symbols () {
        return this.$store.getters['stocks/ibrx']
      },
      valor () {
        return this.$store.getters['stocks/valor']
      }
    },
    watch: {
      async acao (value) {
        await this.$store.dispatch('stocks/setValue', {value: value})
      }
    }
  }
</script>
