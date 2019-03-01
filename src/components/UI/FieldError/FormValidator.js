class FormValidator {
  constructor(validations) {
    this.validations = validations;
  }

  validate(state) {
    // начало с валидного
    let validation = this.valid();

    // для каждого правила валидации
    this.validations.forEach(rule => {

      // если поле не помечено как не валидное
      if (!validation[rule.field].isInvalid) {
        // определяем значение проверяемого поля
        const field_value = state[rule.field].toString();
        const args = rule.args || [];
        const validation_method = rule.method
              
        // вызываем первым поле validation_method с текущим значением
        // затем остальные args, state и если результат не соответствует свойству rule.validWhen, 
        // меняем объект валидации для поля и устанавливем для поля isValid значение false
        if(validation_method(field_value, ...args, state) !== rule.validWhen) {
          validation[rule.field] = { isInvalid: true, message: rule.message }
          validation.isValid = false;
        }
      }
    });

    return validation;
  }

  valid() {
    const validation = {}

    this.validations.map(rule => (
      validation[rule.field] = { isInvalid: false, message: '' }
    ));

    return { isValid: true, ...validation };
  }
}

export default FormValidator;