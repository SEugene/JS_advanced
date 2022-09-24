class Hamburger {
    constructor(size, stuffing, topping) { 
        this.size = this._selector(size);
        this.stuffing = this._selector(stuffing);
        this.topping = this._selector(topping);

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

        //this.burgerPrice = this._calculator('price');
        //this.burgerCalories = this._calculator('calories');
    }

    _selector(item){
        return document.querySelector(`input[name=${item}]:checked`).value;
    }
   
    _calculator(choice) { 
        return this.sizes[this.size][choice] + this.stuffings[this.stuffing][choice] + this.toppings[this.topping][choice];  
    }

    showResult(price, calories){
        document.querySelector(price).textContent = this._calculator('price');
        document.querySelector(calories).textContent = this._calculator('calories');
    }
}
