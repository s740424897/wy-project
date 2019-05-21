import {
  GET_CATEGORY_DATA
} from './mutation-type'

import {MockCategory} from '../../../../api'

export default {
  async getCategoryData({commit}){
    const result = await MockCategory();
    const categoryData = result.data.categoryL1List

    if(result.code === 0){
      commit(GET_CATEGORY_DATA,{categoryData})
    }
  }
}
