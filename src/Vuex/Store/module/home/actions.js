import {
  GET_HOME_DATA,
  GET_SEARCH_DATA,
  GET_SEARCH_RESULT
} from "./mutation-type"

import {MockHome, InitSearch, SearchResult} from '../../../../api'

export default {
  async getHomeData ({commit}) {
    const result = await MockHome();    // 发送ajax
    const homeData = result.data

    if (result.code === 0) {
      commit(GET_HOME_DATA, {homeData})    // 根据返回的数据调用 mutations 更改数据
    }
  },
  async getSearchData ({commit}) {
    const result = await InitSearch();    // 发送ajax
    const searchData = result.data
    if(result.code === "200"){
      commit(GET_SEARCH_DATA, {searchData})    // 根据返回的数据调用 mutations 更改数据
    }
  },
  async getSearchResult ({commit}, keywordPrefix) {
    const result = await SearchResult(keywordPrefix);    // 发送ajax
    const searchResult = result.data
    if(result.code === "200"){
      commit(GET_SEARCH_RESULT, {searchResult})    // 根据返回的数据调用 mutations 更改数据
    }
  }
}
