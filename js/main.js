const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then (data => {
                this.goods = data;
                this.render()
            });
    }

    /*
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, image: 'img/notebook.webp'},
            {id: 2, title: 'Mouse', price: 20, image: 'img/mouse.webp'},
            {id: 3, title: 'Keyboard', price: 200, image: 'img/keyboard.webp'},
            {id: 4, title: 'Gamepad', price: 50, image: 'img/gamepad.webp'},
            {id: 5, title: 'Monitor'},
        ];
    }
    */

    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {console.log(error);});
    }
    
    productListSum(){
        let sum = 0;
        for(let item of this.goods){
            sum += item.price || 1000           // если цена не указана, подставляется значение "по умолчанию"
        };
        return sum
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
        }

        const newBlock = document.querySelector(".product_sum")
        newBlock.textContent =`Сумма цен товаров в списке: ${this.productListSum()}`
    }
    
}


class ProductItem{
    constructor(product){
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price || 1000;                // здесь и ниже добавил значения "по умолчанию"
        this.image = product.image || 'img/no_foto.jpeg';
    }

    render(){
           return `<div class="prod_item">    
           <div class="img_item ${this.id}">
               <img src="${this.image}" class="image">
           </div>

           <div class="item">                    
               <div class="description">
                   <h4>${this.title}</h4>
                   <div class="price">
                       Цена: <span>${this.price}</span>руб.
                   </div>
               </div>
           </div>
                               
           <div class="sale">
               
           <h3>Количество к покупке: 
                <input type="text" name="кол-во" size="15" maxlength="30">  
           </h3>  
           <button class="buy-btn">Купить</button>
           </div>               
           
       </div>`
    }
}


class BasketItem{
    constructor(product, amount){
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price || 1000;                // здесь и ниже добавил значения "по умолчанию"
        this.image = product.image || 'img/no_foto.jpeg';
        this.amount = product.quantity;
    }

    // функция подсчета стоимости "строки" в Корзине
    basketProductSumCount(){
        return this.product.price * this.amount
    }

    // функция отрисовки "строки" Корзины
    render(){
        return `<div class="prod_item">    
           <div class="img_item ${this.id}">
               <img src="${this.image}" class="image">
           </div>

           <div class="item">                    
               <div class="description">
                   <h4>${this.title}</h4>
                   <div class="price">
                       Цена: <span>${this.price}</span>руб.
                   </div>
               </div>
           </div>
                               
           <div class="sale">
               
           <p>Количество к покупке: ${this.amount}
                
           </p>  

           </div>               
           
       </div>`

    }
}

class Basket{
    constructor(container='.basket'){
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then (data => {
                this.goods = data;
                this.render()
            });
    }

    _getProducts(){
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {console.log(error);});
    }

    // функция по заполнению корзины - пользователь выбирает товар, его количество и нажимает "Купить" - в Корзину добавляется нужное количество товара
    basketFill(){
        
    }
    
    // функция по изменению количества товара в корзине
    basketItemChange(){

    }

    // функция, удаляющая товар из корзины
    basketItemDelete(){

    }
    
    // функция подсчета стоимости всех товаров в корзине
    basketTotalSum(){

    }

    // функция отрисовки Корзины
    render(){
        const block = document.querySelector(this.container);
        console.log(block);
        console.log(this.goods);
                
        for(let product of this.goods.contents){
             const item = new BasketItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
        }
        
    }
}

let list = new ProductList();
let myBasket = new Basket();
