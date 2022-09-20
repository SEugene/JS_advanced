const products = [
    {id: 1, title: 'Notebook', price: 2000, image: 'img/notebook.webp'},
    {id: 2, title: 'Mouse', price: 20, image: 'img/mouse.webp'},
    {id: 3, title: 'Keyboard', price: 200, image: 'img/keyboard.webp'},
    {id: 4, title: 'Gamepad', price: 50, image: 'img/gamepad.webp'},
    {id: 5, title: 'Monitor'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price=1000, image='img/no_foto.jpeg') => {
    return `<div class="prod_item">    
                <div class="img_item">
                    <img src="${image}" class="image">
                </div>

                <div class="item">                    
                    <div class="description">
                        <h4>${title}</h4>
                        <div class="price">
                            Цена: <span>${price}</span>руб.
                        </div>
                    </div>
                </div>
                                    
                <div class="sale">
                    <button class="buy-btn">Купить</button>
                </div>               
                
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title,item.price,item.image));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);