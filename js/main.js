class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
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

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
        }
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
           <div class="img_item">
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
               <button class="buy-btn">Купить</button>
           </div>               
           
       </div>`
    }
}

let list = new ProductList();
