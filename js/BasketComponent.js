const basketItem = {
    props: ['basket_item'],    
    template:`        
            <div class="prod_item">   
                <div class="description">
                    <h4>{{ basket_item.product_name }}</h4>
                    <div class="price">
                        Цена: <span>{{ basket_item.price }}</span>$                                        
                        <div class="basket_quantity">    
                            <button class="buy-btn" @click="$root.$refs.basket.addProduct(basket_item)">+</button>
                            <span>{{ basket_item.quantity }}</span>шт.
                            <button class="decrease-btn" @click="$root.$refs.basket.deleteProduct(basket_item)">-</button>
                        </div>
                        Сумма по товару: <span>{{ basket_item.price * basket_item.quantity }}</span>$ 
                    </div>    
                </div>
            </div>   

`
};

const basket = {
    components: {'basket-item': basketItem},

    data () {
        return {
            myBasket: {
                basketItems: [],
                basketTotalSum: 0
            },
            basketUrl: '/getBasket.json'
        }
    },

    methods:{
        addProduct(product){
            const basketCheck = this.myBasket.basketItems.find(good => good.id_product === product.id_product);
            if (basketCheck) {
                basketCheck.quantity++;
                this.myBasket.basketTotalSum += basketCheck.price
            } else {
                let prod = Object.assign ({quantity: 1}, product)
                this.myBasket.basketItems.push (prod)
                this.myBasket.basketTotalSum += product.price
            };
            console.log(this.myBasket.basketTotalSum)
        },

        deleteProduct(product){
            if (product.quantity>1) {
                product.quantity--;
                this.myBasket.basketTotalSum -= product.price
                
            } else {
                this.myBasket.basketItems.splice(this.myBasket.basketItems.indexOf(product), 1);
                this.myBasket.basketTotalSum -= product.price
                
            };
            console.log(this.myBasket.basketTotalSum)
        },
    },

    
    mounted () {
        this.$parent.getJson(`${API + this.basketUrl}`)
        .then(data => {            
            for(let el of data.contents){                
                this.myBasket.basketItems.push(el);
                this.myBasket.basketTotalSum += el.price
                
            }     
        })
    },
    

    template: `  
    <div id="openModal" class="modalDialog">
        <div>
            <a href="#close" title="Закрыть" class="close">X</a>
            <h2 class="product_sum">Корзина - {{ myBasket.basketTotalSum }} руб.</h2>
            <div class="basket">
                <basket-item v-for="item of myBasket.basketItems" 
                :key="item.id_product" 
                :basket_item="item" >
                </basket-item>
            </div>
        </div>
    </div>
    `
}
