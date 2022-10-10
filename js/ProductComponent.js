Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="products">
    <product v-for="item of products" 
    :key="item.id_product" 
    :img="img"
    :product="item"></product>
   </div>`
}
);

Vue.component('product', {
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
                <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
            </div>       
        </div>         
    `
}
)
    