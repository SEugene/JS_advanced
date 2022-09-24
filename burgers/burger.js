class Hamburger {
    constructor(size, stuffing, topping) { 
        this.size = this._selector(size);
        this.stuffing = this._selector(stuffing);
        this.topping = this._selectorMany(topping);

        this.sizes = {
            'big': {calories: 40, price: 100},
            'small': {calories: 20, price: 50},
        };
        this.stuffings = {
            'cheese': {calories: 20, price: 10},
            'salad': {calories: 5, price: 20},
            'potatoes': {calories: 10, price: 15},
        };
        this.toppings = {
            'spice': {calories: 0, price: 15},
            'mayonnaise': {calories: 5, price: 20},
        };
    }

    // метод выбора для radio
    _selector(item){
        return document.querySelector(`input[name=${item}]:checked`).value;
    }

    // метод выбора для checkbox
    _selectorMany(item){
        let itemChoices = [...document.querySelectorAll(`input[name=${item}]:checked`)];
        let result = []
        itemChoices.forEach(element => result.push(element.value))        
        return result;
    }
   
    // универсальный калькулятор цены и калорийности, в том числе с учетом множественного выбора топпингов
    _calculator(choice) { 
        let toppingSum = 0;
        for (let value of Object.values(this.topping)){         
            toppingSum += this.toppings[value][choice]   
        };

        return this.sizes[this.size][choice] + this.stuffings[this.stuffing][choice] + toppingSum;  
    }

    // метод для вывода результата расчетов на страницу
    showResult(price, calories){
        document.querySelector(price).textContent = this._calculator('price');
        document.querySelector(calories).textContent = this._calculator('calories');
    }
}
