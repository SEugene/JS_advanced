class Validator{
    constructor(form){
        this.rules = {
            'name': /^[a-zа-яё]+$/i,
            'phone': /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            'email': /^[\w.-]+@\w+\.[a-z]{2,4}$/i
        };
        this.errorText = {
            'name': 'Имя содержит только буквы',
            'phone': 'Телефон имеет вид +7(000)000-0000',
            'email': 'E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.'
        };
        this.form = form;
        this.validator()
    }

    validator(){
        let errorElementsP = [...document.getElementById(this.form).getElementsByTagName('p')];
        for (let itemP of errorElementsP){
            itemP.classList.add('invisible')
        };

        let formFields = [...document.getElementById(this.form).getElementsByTagName('input')];
        for (let field of formFields){
            field.classList.remove('wrong');
            if (!this.rules[field.id].test(field.value)){
                this.errorMsg(field.id);
                field.classList.add('wrong');
            }
        }
    }

    errorMsg(errorField){
        let errorText = document.getElementById(`${errorField}-error`);
        errorText.classList.remove('invisible');
        errorText.textContent = this.errorText[errorField]
    }
}
