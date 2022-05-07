export const optionsValidation = {
    name: {
        required: true,
        minLength: 2,
        maxLength: 60,
        pattern: /[A-Za-zñáéíóúÑÁÉÍÚÓÄËÏÖÜäëïöü\s]{3,60}$/
    },
    email: {
        required: true,
        minLength: 9,
        maxLength: 30,
        pattern: /[a-z0-9\._\-+]{3,30}@[a-z0-9\-]{3,}\.[a-z]{2,5}/
    },
    address: {
        required: true,
        minLength: 3,
        maxLength: 50,
        pattern: /^[\wáéíóúñäëïöü\s,\.\-]{3,50}$/i
    },
    apartment: {
        maxLength: 10,
        pattern: /[0-9a-z\-\.]{1,10}/i
    },
    postalCode: {
        required: true,
        minLength: 5,
        maxLength: 8,
        pattern: /\d{5,8}/
    },
    phone: {
        required: true,
        minLength: 10,
        maxLength: 13,
        pattern: /\d{10,13}/
    }
}