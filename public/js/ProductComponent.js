const product = {
    props: ['product', 'img'],
    template: `
        <div class="prod_item">                
            <div class="img_item">
                <img :src="img" alt="Some img">
            </div>

            <div class="item">                    
                <div class="description">
                    <h4>{{product.product_name}}</h4>
                    <div class="price">
                        Цена: <span>{{product.price}}</span>$
                    </div>
                </div>
            </div>
                            
            <div class="sale">             
                <button class="buy-btn" @click="$root.$refs.basket.addProduct(product)">Купить</button>
            </div>       
        </div>         
    `
};

const products = {
    components: {product},
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
        .then(data => {
            for(let el of data){
                this.products.push(el);
            }
        });
        this.filtered = this.products
    },
    methods: {
        filterGoods(searchLine){
            const regexp = new RegExp(searchLine, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
           }
    },
    template: `<div class="products">
    <product v-for="item of filtered" 
    :key="item.id_product" 
    :img="item.img"
    :product="item"></product>
   </div>`
}
    