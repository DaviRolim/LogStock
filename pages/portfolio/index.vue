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
        <p v-if="valor">{{acao}} fechou o ultimo dia em: {{valor}}</p>
     </v-flex>
   </v-layout>
 </v-container> 
</template>

<script>
import lodash from 'lodash'
  export default {
    data () {
      return {
        acao: null,
        dados: [],
        valor: null 
      }
    },
    computed: {
      symbols () {
        return this.$store.getters['stocks/ibrx']
      }
    },
    watch: {
      acao (value) {
        this.$axios.$get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${value}&apikey=UZ17LQ6CIH0VI5DTr`)
        .then(res => {
          console.log(res['Time Series (Daily)'])
          const data = res['Time Series (Daily)']
          this.dados = lodash.map(data, (dados, index) => {
            dados.day = index
            return dados
          })
          const lastday = this.dados.splice(0,1)[0]
          var close = +lastday['4. close']
          this.valor = close.toFixed(2)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
