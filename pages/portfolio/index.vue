<template>
 <v-container>
   <v-layout row wrap v-if="!portfolio">
        <stocks buttonText="Adicionar primeira ação ao portfolio"></stocks>
   </v-layout>
   <v-layout row wrap v-else>
     <v-flex xs12 sm8 offset-sm2 d-flex class="mb-3">
       <stocks buttonText="Adicionar mais ações"></stocks>
     </v-flex>
     <v-flex xs12 sm6 class="mb-4 pr-3" v-for="(acao, index) in portfolio" :key="index">
       <v-card raised class="white--text">
        <v-card-title class="blue-grey darken-3">
          <h3>
            {{acao.nome}}
          </h3>
          <template>
            <v-layout>
              <v-flex offset-xs8 offset-md8 offset-lg8 offset-sm8>
                <v-btn flat small color="red darken-3" @click="deletePortfolio(acao)">
                <v-icon>close</v-icon>
              </v-btn>
              </v-flex>
            </v-layout>
          </template>
        </v-card-title>
        <v-card-text>
          <div class="mb-1">Quantidade: {{acao.quantidade}}</div>
          <div class="mb-1">Preço de compra: {{acao.valorDaCompra}}</div>
          <div class="mb-1">Valor atual da ação: {{acao.quantidade*acao.valorDaCompra}}</div>
          <div>Lucro total da operação: TODO (quando salvar no banco, esse valor será atualizado no getter de stocks)</div>
        </v-card-text>
        <v-card-actions>
          <v-btn flat>Comprar mais</v-btn>
      </v-card-actions>
      </v-card>
      <v-divider></v-divider>
     </v-flex>
   </v-layout>
 </v-container> 
</template>

<script>
import lodash from "lodash";
export default {
  data() {
    return {
      acao: null
    };
  },
  computed: {
    symbols() {
      return this.$store.getters["stocks/ibrx"];
    },
    valor() {
      return this.$store.getters["stocks/valor"];
    },
    portfolio() {
      return this.$store.getters["portfolio/portfolio"];
    }
  },
  watch: {
    async acao(value) {
      await this.$store.dispatch("stocks/setValue", { value: value });
    }
  },
  methods: {
    deletePortfolio(acao) {
      this.$store.dispatch("portfolio/deleteInPortfolio", {
        nome: acao.nome,
        user: acao.user
      });
    }
  }
};
</script>
