import lodash from 'lodash'

export const state = () => ({
  ibrx: [
    { symbol: 'ABEV3.SA', name: 'ABEV3.SA - AMBEV S/A' },
    { symbol: 'ALSC3.SA', name: 'ALSC3.SA - ALIANSCE' },
    { symbol: 'ALUP11.SA', name: 'ALUP11.SA - ALUPAR' },
    { symbol: 'ARZZ3.SA', name: 'ARZZ3.SA - AREZZO CO' },
    { symbol: 'B3SA3.SA', name: 'B3SA3.SA - B3' },
    { symbol: 'BBAS3.SA', name: 'BBAS3.SA - BRASIL' },
    { symbol: 'BBDC3.SA', name: 'BBDC3.SA - BRADESCO' },
    { symbol: 'BBDC4.SA', name: 'BBDC4.SA - BRADESCO' },
    { symbol: 'BBSE3.SA', name: 'BBSE3.SA - BBSEGURIDADE' },
    { symbol: 'BEEF3.SA', name: 'BEEF3.SA - MINERVA' },
    { symbol: 'BRAP4.SA', name: 'BRAP4.SA - BRADESPAR' },
    { symbol: 'BRFS3.SA', name: 'BRFS3.SA - BRF SA' },
    { symbol: 'BRKM5.SA', name: 'BRKM5.SA - BRASKEM' },
    { symbol: 'BRML3.SA', name: 'BRML3.SA - BR MALLS PAR' },
    { symbol: 'BRSR6.SA', name: 'BRSR6.SA - BANRISUL' },
    { symbol: 'BTOW3.SA', name: 'BTOW3.SA - B2W DIGITAL' },
    { symbol: 'CCRO3.SA', name: 'CCRO3.SA - CCR SA' },
    { symbol: 'CESP6.SA', name: 'CESP6.SA - CESP' },
    { symbol: 'CIEL3.SA', name: 'CIEL3.SA - CIELO' },
    { symbol: 'CMIG4.SA', name: 'CMIG4.SA - CEMIG' },
    { symbol: 'CPFE3.SA', name: 'CPFE3.SA - CPFL ENERGIA' },
    { symbol: 'CPLE6.SA', name: 'CPLE6.SA - COPEL' },
    { symbol: 'CRFB3.SA', name: 'CRFB3.SA - CARREFOUR BR' },
    { symbol: 'CSAN3.SA', name: 'CSAN3.SA - COSAN' },
    { symbol: 'CSMG3.SA', name: 'CSMG3.SA - COPASA' },
    { symbol: 'CSNA3.SA', name: 'CSNA3.SA - SID NACIONAL' },
    { symbol: 'CVCB3.SA', name: 'CVCB3.SA - CVC BRASIL' },
    { symbol: 'CYRE3.SA', name: 'CYRE3.SA - CYRELA REALT' },
    { symbol: 'DTEX3.SA', name: 'DTEX3.SA - DURATEX' },
    { symbol: 'ECOR3.SA', name: 'ECOR3.SA - ECORODOVIAS' },
    { symbol: 'EGIE3.SA', name: 'EGIE3.SA - ENGIE BRASIL' },
    { symbol: 'ELET3.SA', name: 'ELET3.SA - ELETROBRAS' },
    { symbol: 'ELET6.SA', name: 'ELET6.SA - ELETROBRAS' },
    { symbol: 'ELPL3.SA', name: 'ELPL3.SA - ELETROPAULO' },
    { symbol: 'EMBR3.SA', name: 'EMBR3.SA - EMBRAER' },
    { symbol: 'ENBR3.SA', name: 'ENBR3.SA - ENERGIAS BR' },
    { symbol: 'ENGI11.SA', name: 'ENGI11.SA - ENERGISA' },
    { symbol: 'EQTL3.SA', name: 'EQTL3.SA - EQUATORIAL' },
    { symbol: 'ESTC3.SA', name: 'ESTC3.SA - ESTACIO PART' },
    { symbol: 'EZTC3.SA', name: 'EZTC3.SA - EZTEC' },
    { symbol: 'FIBR3.SA', name: 'FIBR3.SA - FIBRIA' },
    { symbol: 'FLRY3.SA', name: 'FLRY3.SA - FLEURY' },
    { symbol: 'GFSA3.SA', name: 'GFSA3.SA - GAFISA' },
    { symbol: 'GGBR4.SA', name: 'GGBR4.SA - GERDAU' },
    { symbol: 'GOAU4.SA', name: 'GOAU4.SA - GERDAU MET' },
    { symbol: 'GOLL4.SA', name: 'GOLL4.SA - GOL' },
    { symbol: 'HGTX3.SA', name: 'HGTX3.SA - CIA HERING' },
    { symbol: 'HYPE3.SA', name: 'HYPE3.SA - HYPERA' },
    { symbol: 'IGTA3.SA', name: 'IGTA3.SA - IGUATEMI' },
    { symbol: 'ITSA4.SA', name: 'ITSA4.SA - ITAUSA' },
    { symbol: 'ITUB4.SA', name: 'ITUB4.SA - ITAUUNIBANCO' },
    { symbol: 'JBSS3.SA', name: 'JBSS3.SA - JBS' },
    { symbol: 'KLBN11.SA', name: 'KLBN11.SA - KLABIN S/A' },
    { symbol: 'KROT3.SA', name: 'KROT3.SA - KROTON' },
    { symbol: 'LAME3.SA', name: 'LAME3.SA - LOJAS AMERIC' },
    { symbol: 'LAME4.SA', name: 'LAME4.SA - LOJAS AMERIC' },
    { symbol: 'LIGT3.SA', name: 'LIGT3.SA - LIGHT S/A' },
    { symbol: 'LINX3.SA', name: 'LINX3.SA - LINX' },
    { symbol: 'LREN3.SA', name: 'LREN3.SA - LOJAS RENNER' },
    { symbol: 'MDIA3.SA', name: 'MDIA3.SA - M.DIASBRANCO' },
    { symbol: 'MGLU3.SA', name: 'MGLU3.SA - MAGAZ LUIZA' },
    { symbol: 'MOVI3.SA', name: 'MOVI3.SA - MOVIDA' },
    { symbol: 'MPLU3.SA', name: 'MPLU3.SA - MULTIPLUS' },
    { symbol: 'MRFG3.SA', name: 'MRFG3.SA - MARFRIG' },
    { symbol: 'MRVE3.SA', name: 'MRVE3.SA - MRV' },
    { symbol: 'MULT3.SA', name: 'MULT3.SA - MULTIPLAN' },
    { symbol: 'MYPK3.SA', name: 'MYPK3.SA - IOCHP-MAXION' },
    { symbol: 'NATU3.SA', name: 'NATU3.SA - NATURA' },
    { symbol: 'ODPV3.SA', name: 'ODPV3.SA - ODONTOPREV' },
    { symbol: 'PCAR4.SA', name: 'PCAR4.SA - P.ACUCAR-CBD' },
    { symbol: 'PETR3.SA', name: 'PETR3.SA - PETROBRAS' },
    { symbol: 'PETR4.SA', name: 'PETR4.SA - PETROBRAS' },
    { symbol: 'POMO4.SA', name: 'POMO4.SA - MARCOPOLO' },
    { symbol: 'PSSA3.SA', name: 'PSSA3.SA - PORTO SEGURO' },
    { symbol: 'QUAL3.SA', name: 'QUAL3.SA - QUALICORP' },
    { symbol: 'RADL3.SA', name: 'RADL3.SA - RAIADROGASIL' },
    { symbol: 'RAIL3.SA', name: 'RAIL3.SA - RUMO S.A.' },
    { symbol: 'RAPT4.SA', name: 'RAPT4.SA - RANDON PART' },
    { symbol: 'RENT3.SA', name: 'RENT3.SA - LOCALIZA' },
    { symbol: 'SANB11.SA', name: 'SANB11.SA - SANTANDER BR' },
    { symbol: 'SAPR11.SA', name: 'SAPR11.SA - SANEPAR' },
    { symbol: 'SBSP3.SA', name: 'SBSP3.SA - SABESP' },
    { symbol: 'SEER3.SA', name: 'SEER3.SA - SER EDUCA' },
    { symbol: 'SMLS3.SA', name: 'SMLS3.SA - SMILES' },
    { symbol: 'SMTO3.SA', name: 'SMTO3.SA - SAO MARTINHO' },
    { symbol: 'SULA11.SA', name: 'SULA11.SA - SUL AMERICA' },
    { symbol: 'SUZB3.SA', name: 'SUZB3.SA - SUZANO PAPEL' },
    { symbol: 'TAEE11.SA', name: 'TAEE11.SA - TAESA' },
    { symbol: 'TIET11.SA', name: 'TIET11.SA - AES TIETE E' },
    { symbol: 'TIMP3.SA', name: 'TIMP3.SA - TIM PART S/A' },
    { symbol: 'TOTS3.SA', name: 'TOTS3.SA - TOTVS' },
    { symbol: 'TRPL4.SA', name: 'TRPL4.SA - TRAN PAULIST' },
    { symbol: 'UGPA3.SA', name: 'UGPA3.SA - ULTRAPAR' },
    { symbol: 'USIM5.SA', name: 'USIM5.SA - USIMINAS' },
    { symbol: 'VALE3.SA', name: 'VALE3.SA - VALE' },
    { symbol: 'VIVT4.SA', name: 'VIVT4.SA - TELEF BRASIL' },
    { symbol: 'VLID3.SA', name: 'VLID3.SA - VALID' },
    { symbol: 'VVAR11.SA', name: 'VVAR11.SA - VIAVAREJO' },
    { symbol: 'WEGE3.SA', name: 'WEGE3.SA - WEG' },
    { symbol: 'WIZS3.SA', name: 'WIZS3.SA - WIZ S.A.' }
  ],
  valor: 0
})
export const getters = {
  ibrx(state) {
    return state.ibrx
  },
  valor(state) {
    return state.valor
  }
}

export const mutations = {
  setValue(state, payload) {
    state.valor = payload.valor
  }

}

export const actions = {
  async setValue({ commit }, payload) {
    commit('setLoading', true, { root: true })
    await this.$axios.$get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${payload.value}&apikey=UZ17LQ6CIH0VI5DTr`)
      .then(res => {
        const data = res['Time Series (Daily)']
        let dados = []
        dados = lodash.map(data, (dados, index) => {
          dados.day = index
          return dados
        })
        const lastday = dados.splice(0, 1)[0]
        var close = +lastday['4. close']
        commit('setValue', { valor: close.toFixed(2) })
        commit('setLoading', false, { root: true })
      })
      .catch(err => {
        console.log(err)
        commit('setLoading', false, { root: true })
      })
  }
}

export const strict = false
