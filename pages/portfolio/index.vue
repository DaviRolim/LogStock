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
        symbols: [
        { symbol: 'ABEV3.SA', name: 'AMBEV S/A' },
        { symbol: 'ALSC3.SA', name: 'ALIANSCE' },
        { symbol: 'ALUP11.SA', name: 'ALUPAR' },
        { symbol: 'ARZZ3.SA', name: 'AREZZO CO' },
        { symbol: 'B3SA3.SA', name: 'B3' },
        { symbol: 'BBAS3.SA', name: 'BRASIL' },
        { symbol: 'BBDC3.SA', name: 'BRADESCO' },
        { symbol: 'BBDC4.SA', name: 'BRADESCO' },
        { symbol: 'BBSE3.SA', name: 'BBSEGURIDADE' },
        { symbol: 'BEEF3.SA', name: 'MINERVA' },
        { symbol: 'BRAP4.SA', name: 'BRADESPAR' },
        { symbol: 'BRFS3.SA', name: 'BRF SA' },
        { symbol: 'BRKM5.SA', name: 'BRASKEM' },
        { symbol: 'BRML3.SA', name: 'BR MALLS PAR' },
        { symbol: 'BRSR6.SA', name: 'BANRISUL' },
        { symbol: 'BTOW3.SA', name: 'B2W DIGITAL' },
        { symbol: 'CCRO3.SA', name: 'CCR SA' },
        { symbol: 'CESP6.SA', name: 'CESP' },
        { symbol: 'CIEL3.SA', name: 'CIELO' },
        { symbol: 'CMIG4.SA', name: 'CEMIG' },
        { symbol: 'CPFE3.SA', name: 'CPFL ENERGIA' },
        { symbol: 'CPLE6.SA', name: 'COPEL' },
        { symbol: 'CRFB3.SA', name: 'CARREFOUR BR' },
        { symbol: 'CSAN3.SA', name: 'COSAN' },
        { symbol: 'CSMG3.SA', name: 'COPASA' },
        { symbol: 'CSNA3.SA', name: 'SID NACIONAL' },
        { symbol: 'CVCB3.SA', name: 'CVC BRASIL' },
        { symbol: 'CYRE3.SA', name: 'CYRELA REALT' },
        { symbol: 'DTEX3.SA', name: 'DURATEX' },
        { symbol: 'ECOR3.SA', name: 'ECORODOVIAS' },
        { symbol: 'EGIE3.SA', name: 'ENGIE BRASIL' },
        { symbol: 'ELET3.SA', name: 'ELETROBRAS' },
        { symbol: 'ELET6.SA', name: 'ELETROBRAS' },
        { symbol: 'ELPL3.SA', name: 'ELETROPAULO' },
        { symbol: 'EMBR3.SA', name: 'EMBRAER' },
        { symbol: 'ENBR3.SA', name: 'ENERGIAS BR' },
        { symbol: 'ENGI11.SA', name: 'ENERGISA' },
        { symbol: 'EQTL3.SA', name: 'EQUATORIAL' },
        { symbol: 'ESTC3.SA', name: 'ESTACIO PART' },
        { symbol: 'EZTC3.SA', name: 'EZTEC' },
        { symbol: 'FIBR3.SA', name: 'FIBRIA' },
        { symbol: 'FLRY3.SA', name: 'FLEURY' },
        { symbol: 'GFSA3.SA', name: 'GAFISA' },
        { symbol: 'GGBR4.SA', name: 'GERDAU' },
        { symbol: 'GOAU4.SA', name: 'GERDAU MET' },
        { symbol: 'GOLL4.SA', name: 'GOL' },
        { symbol: 'HGTX3.SA', name: 'CIA HERING' },
        { symbol: 'HYPE3.SA', name: 'HYPERA' },
        { symbol: 'IGTA3.SA', name: 'IGUATEMI' },
        { symbol: 'ITSA4.SA', name: 'ITAUSA' },
        { symbol: 'ITUB4.SA', name: 'ITAUUNIBANCO' },
        { symbol: 'JBSS3.SA', name: 'JBS' },
        { symbol: 'KLBN11.SA', name: 'KLABIN S/A' },
        { symbol: 'KROT3.SA', name: 'KROTON' },
        { symbol: 'LAME3.SA', name: 'LOJAS AMERIC' },
        { symbol: 'LAME4.SA', name: 'LOJAS AMERIC' },
        { symbol: 'LIGT3.SA', name: 'LIGHT S/A' },
        { symbol: 'LINX3.SA', name: 'LINX' },
        { symbol: 'LREN3.SA', name: 'LOJAS RENNER' },
        { symbol: 'MDIA3.SA', name: 'M.DIASBRANCO' },
        { symbol: 'MGLU3.SA', name: 'MAGAZ LUIZA' },
        { symbol: 'MOVI3.SA', name: 'MOVIDA' },
        { symbol: 'MPLU3.SA', name: 'MULTIPLUS' },
        { symbol: 'MRFG3.SA', name: 'MARFRIG' },
        { symbol: 'MRVE3.SA', name: 'MRV' },
        { symbol: 'MULT3.SA', name: 'MULTIPLAN' },
        { symbol: 'MYPK3.SA', name: 'IOCHP-MAXION' },
        { symbol: 'NATU3.SA', name: 'NATURA' },
        { symbol: 'ODPV3.SA', name: 'ODONTOPREV' },
        { symbol: 'PCAR4.SA', name: 'P.ACUCAR-CBD' },
        { symbol: 'PETR3.SA', name: 'PETROBRAS' },
        { symbol: 'PETR4.SA', name: 'PETROBRAS' },
        { symbol: 'POMO4.SA', name: 'MARCOPOLO' },
        { symbol: 'PSSA3.SA', name: 'PORTO SEGURO' },
        { symbol: 'QUAL3.SA', name: 'QUALICORP' },
        { symbol: 'RADL3.SA', name: 'RAIADROGASIL' },
        { symbol: 'RAIL3.SA', name: 'RUMO S.A.' },
        { symbol: 'RAPT4.SA', name: 'RANDON PART' },
        { symbol: 'RENT3.SA', name: 'LOCALIZA' },
        { symbol: 'SANB11.SA', name: 'SANTANDER BR' },
        { symbol: 'SAPR11.SA', name: 'SANEPAR' },
        { symbol: 'SBSP3.SA', name: 'SABESP' },
        { symbol: 'SEER3.SA', name: 'SER EDUCA' },
        { symbol: 'SMLS3.SA', name: 'SMILES' },
        { symbol: 'SMTO3.SA', name: 'SAO MARTINHO' },
        { symbol: 'SULA11.SA', name: 'SUL AMERICA' },
        { symbol: 'SUZB3.SA', name: 'SUZANO PAPEL' },
        { symbol: 'TAEE11.SA', name: 'TAESA' },
        { symbol: 'TIET11.SA', name: 'AES TIETE E' },
        { symbol: 'TIMP3.SA', name: 'TIM PART S/A' },
        { symbol: 'TOTS3.SA', name: 'TOTVS' },
        { symbol: 'TRPL4.SA', name: 'TRAN PAULIST' },
        { symbol: 'UGPA3.SA', name: 'ULTRAPAR' },
        { symbol: 'USIM5.SA', name: 'USIMINAS' },
        { symbol: 'VALE3.SA', name: 'VALE' },
        { symbol: 'VIVT4.SA', name: 'TELEF BRASIL' },
        { symbol: 'VLID3.SA', name: 'VALID' },
        { symbol: 'VVAR11.SA', name: 'VIAVAREJO' },
        { symbol: 'WEGE3.SA', name: 'WEG' },
        { symbol: 'WIZS3.SA', name: 'WIZ S.A.' }
        ],
        dados: [],
        valor: null 
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
          this.valor = lastday['4. close']
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
