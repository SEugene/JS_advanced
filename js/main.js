class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        //this.sum = 0
        this._fetchProducts();     //рекомендация, чтобы метод был вызван в текущем классе
        this.render();             //вывод товаров на страницу
    }

    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, image: 'img/notebook.webp'},
            {id: 2, title: 'Mouse', price: 20, image: 'img/mouse.webp'},
            {id: 3, title: 'Keyboard', price: 200, image: 'img/keyboard.webp'},
            {id: 4, title: 'Gamepad', price: 50, image: 'img/gamepad.webp'},
            {id: 5, title: 'Monitor'},
        ];
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
        this.title = product.title;
        this.id = product.id;
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
        this.product = product;
        this.amount = amount
    }

    // функция подсчета стоимости "строки" в Корзине
    basketProductSumCount(){
        return this.product.price * this.amount
    }

    // функция отрисовки "строки" Корзины
    render(){

    }
}

class Basket{
    constructor(basketItems){
        this.basketItems = []
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

    }
}

let list = new ProductList();
