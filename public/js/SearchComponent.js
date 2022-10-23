const search_element = {
    data () {
        return {
            searchLine: ''
        }
      },
      template: 
      `
        <form action="#" class="search-form" @submit.prevent='$parent.$refs.products.filterGoods(searchLine)'>
            <input type="text" class="search-field" v-model="searchLine">
            <button type="submit" class="btn-search">
                <i class="fas fa-search"></i>
            </button>
        </form>
      `
  }
