Vue.component('basket', {
    props: ['basketItems'],
    template: `  

    <div id="openModal" class="modalDialog">
        <div>
            <a href="#close" title="Закрыть" class="close">X</a>
            <h2>Корзина</h2>
            <div class="basket">
                <basket-item v-for="item of basketItems" :key="item.id_product" :basket-item="item" >
                </basket-item>
            </div>
        </div>
    </div>
    `
});

Vue.component('basket-item', {
    props: ['basketItem'],
    template:`        
            <div class="prod_item">   
                <div class="description">
                    <h4>{{ basketItem.product_name }}</h4>
                    <div class="price">
                        Цена: <span>{{ basketItem.price }}</span>$                                        
                        <div class="basket_quantity">    
                            <button class="buy-btn" @click="$parent.$emit('add-product', basketItem)">+</button>
                            <span>{{ basketItem.quantity }}</span>шт.
                            <button class="decrease-btn" @click="$parent.$emit('delete-product', basketItem)">-</button>
                        </div>
                        Сумма по товару: <span>{{ basketItem.price * basketItem.quantity }}</span>$ 
                    </div>    
                </div>
            </div>   

`
})