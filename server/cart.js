let add = (cart, req) => {
    cart.contents.push(req.body);
    cart.amount += req.body.price * req.body.quantity;
    cart.countGoods = cart.contents.length;
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    let found = cart.contents.find(el => el.id_product === +req.params.id);
    found.quantity += req.body.quantity;
    cart.amount += found.price * req.body.quantity;
    cart.countGoods = cart.contents.length;
    return JSON.stringify(cart, null, 4);
};

let del = (cart, req) => {
    let found = cart.contents.find(el => +el.id_product === +req.params.id);
    cart.amount -= found.price * found.quantity;   
    cart.contents.splice(cart.contents.indexOf(found), 1);
    cart.countGoods = cart.contents.length;
    return JSON.stringify(cart, null, 4)
};

module.exports = {
    add,
    change,
    del
};
