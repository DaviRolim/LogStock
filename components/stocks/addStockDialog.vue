<template>
  <v-dialog persistent v-model="dialog">
    <v-btn slot="activator" large color="grey darken-1" block>
      {{buttonText}}
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6 offset-sm3>
            <v-card-title><h2>Adicionar no Portfolio</h2></v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
          <v-layout row wrap>
              <v-flex xs12 sm6 offset-sm3>
                <v-card-text>
                  <v-select
                    :items="symbols"
                    item-text="name"
                    item-value="symbol"
                    v-model="nome"
                    label="Procure uma ação"
                    append-icon="search"
                    autocomplete
                  ></v-select>
                  <v-text-field 
                    name="quantidade"
                    label="Lote"
                    id="quantidade"
                    :rules="[() => !isNaN(quantidade) || 'This field must be a number']"
                    v-model="quantidade"
                    required></v-text-field>
                    <v-text-field 
                    name="valorDaCompra"
                    label="Valor da ação no dia da compra"
                    id="valorDaCompra"
                    :rules="[() => !isNaN(valorDaCompra) || 'This field must be a number']"
                    v-model="valorDaCompra"
                    required></v-text-field>
                  </v-card-text>
              </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-actions>
                <v-btn flat class="blue--text darken-1" @click.native="dialog = false">CLOSE</v-btn>
                <v-btn flat class="blue--text darken-1" @click.native="onSaveChanges">SAVE</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['buttonText'],
  data () {
    return {
      nome: null,
      quantidade: 0,
      valorDaCompra: 0,
      user: 1,
      dialog: false
    } 
  },
  methods: {
    onSaveChanges () {
      if(this.quantidade.typeOf(Number) && this.valorDaCompra.typeOf(Number)) {
        this.dialog = false
        this.$store.dispatch('portfolio/setInPortfolio', 
        {nome: this.nome, 
        quantidade: this.quantidade, 
        valorDaCompra: this.valorDaCompra,
        user: this.user
        })
      } else {
        console.log('Não digitou número')
      }
    }
  },
  computed: {
      symbols () {
        return this.$store.getters['stocks/ibrx']
      }
  }
}
</script>

<style>
</style>