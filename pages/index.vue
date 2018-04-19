<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12 sm4 class="mb-4">
      <v-card color="grey darken-2">
        <v-card-title>
          <h4 class="headline" v-if="user">{{user.name}}</h4>
        </v-card-title>
        <v-card-text>
          <div class="mb-2">
            <v-icon left>fas fa-money</v-icon>
            Patrimônio: R$ 7223.45
          </div>
          <div class="mb-2">
            <v-icon left>timeline</v-icon>
            <nuxt-link to="/inspire" tag="span" style="cursor: pointer">Ganho do dia: R$ 25.21 (1.2%)</nuxt-link>
          </div>
          <div class="mb-2" v-if="user">
            <v-icon left>timeline</v-icon>
            <nuxt-link to="/inspire" tag="span" style="cursor: pointer">Ganho Total: R$ {{user.lucro}} (?.??%)</nuxt-link>
          </div>
          <div>
            <v-icon left>attach_money</v-icon>
            <nuxt-link to="/inspire" tag="span" style="cursor: pointer">Portfólio: GGBR4(16.21), GOAU4(7.76)</nuxt-link>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm7 offset-sm1>
       <line-chart
        :data="chartData"
        :options="options"
        :width="400"
        :height="200"
        >
      </line-chart>
    </v-flex>
    <v-divider></v-divider>
    <v-flex xs12 sm12 class="text-xs-center mt-4">
      <v-card>
        <v-list expand three-line>
          <v-subheader>Evolução Semanal</v-subheader>
          <template v-for="(item, index) in items">
            <v-list-tile avatar :key="item.title">
              <v-list-tile-content>
                <v-list-tile-title>{{item.title}}</v-list-tile-title>
                <v-list-tile-sub-title :class="{'teal lighten-1': item.valor>0, 'red darken-4': item.valor<0}">
                  <span class="text--primary">{{item.subtitle}} {{item.valor}}</span>
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider :key="index"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import LineChart from '../components/charts/LineChart.js'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      items: [
          { title: '13/04/2018', subtitle: "GGBR4 0.35% (0.13) / GOAU4 0.78% (0.06) alteração do patromonio:  R$ ", valor: +15.21 },
          { title: '12/04/2018', subtitle: "GGBR4 2.85% (0.41) / GOAU4 3.24% (0.26) alteração do patromonio:  R$ ", valor: +93.03 },
          { title: '11/04/2018', subtitle: "GGBR4 -0.79% (-0.12) / GOAU4 0.43% (-0.03) alteração do patromonio: R$ ", valor: -21.57 },
          { title: '10/04/2018', subtitle: "GGBR4 2.35% (0.33) / GOAU4 2.88% (0.16) alteração do patromonio: R$ ", valor: +73.97 },
          { title: '09/04/2018', subtitle: "GGBR4 -1.35% (-0.20) / GOAU4 -0.95% (-0.07) alteração do patromonio: R$ ", valor:-47.12 }
        ],
      chartData: {
        labels: ['One', 'Two', 'Three','Four', 'Five'],
        datasets: [
          {
            label: 'Evolution last 5 days',
            backgroundColor: 'grey',
            data: [1000.25, 3300.10, 3120.56, 4600.29, 4324.91]
          }
        ]
      },
      options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
            // stepSize: 1,
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
            }
          }]
        }
      }
    }
  },
  async fetch ({ store, params, $axios }) {
    await store.dispatch('user/setUser')
  },
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
    }
  },

}
</script>