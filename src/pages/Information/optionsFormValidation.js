const options = {
    name: {
        required: true,
        minLength: 3,
        pattern: /[A-Za-zñáéíóúÁÉÍÚÓÄËÏÖÜäëïöü]{3,45}$/
    },
    email: {
        required: true,
        pattern: '',
        test: '[a-z0-9\._\-+]{3,30}@[a-z0-9\.\-]{3,}\.[a-z]{2,5}'
    },
    address: {
        required: true,
    },
    apartment: {
        required: true,
    },
    country: {
        required: true,
    },
    countrystate: {
        required: true,
    },
    city: {
        required: true,
    },
    postalCode: {
        required: true,
    },
    phone: {
        required: true,
    }
}