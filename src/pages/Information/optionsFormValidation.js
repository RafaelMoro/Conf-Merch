const REQUIRED_MESSAGE = 'Este campo es requerido y no puede estar vacio.'

const optionsValidation = {
    name: {
        required: {
            value: true,
            message: REQUIRED_MESSAGE
        },
        minLength: {
            value: 2,
            message: "Ingrese más de 2 caracteres"
        },
        maxLength: {
            value: 60,
            message: "Ingrese menos de 60 caracteres."
        },
        pattern: {
            value: /[A-Za-zñáéíóúÑÁÉÍÚÓÄËÏÖÜäëïöü\s]{2,60}$/,
            message: "El nombre solo debe contener letras y/o espacios"
        }
    },
    email: {
        required: {
            value: true,
            message: REQUIRED_MESSAGE
        },
        minLength: {
            value: 9,
            message: "Ingrese más de 9 caracteres"
        },
        maxLength: {
            value: 30,
            message: "Ingrese menos de 30 caracteres"
        },
        pattern: {
            value: /[a-z0-9\._\-+]{3,30}@[a-z0-9\-]{3,}\.[a-z]{2,5}/,
            message: "El correo electrónico solo puede contener letras minusculas, números y estos caracteres especiales . - _ +"
        }
    },
    address: {
        required: {
            value: true,
            message: REQUIRED_MESSAGE
        },
        minLength: {
            value: 3,
            message: "Ingrese más de 3 caracteres"
        },
        maxLength: {
            value: 50,
            message: "Ingrese menos de 50 caracteres"
        },
        pattern: {
            value: /^[\wáéíóúñäëïöü\s,\.\-]{3,50}$/i,
            message: "La dirección solo puede contener letras y estos caracteres especiales . , -"
        }
    },
    apartment: {
        maxLength: {
            value: 10,
            message: "Ingrese menos de 10 caracteres"
        },
        pattern: {
            value: /[0-9a-z\-\.]{1,10}/i,
            message: "El apartamento solo puede contener letras, números y estos caracteres especiales - ."
        }
    },
    postalCode: {
        required: {
            value: true,
            message: REQUIRED_MESSAGE
        },
        minLength: {
            value: 5,
            message: "Ingrese más de 5 números"
        },
        maxLength: {
            value: 8,
            message: "Ingrese menos de 8 caracteres"
        },
        pattern: {
            value: /\d{5,8}/,
            message: "El código Postal solo debe contener números"
        }
    },
    phone: {
        required: {
            value: true,
            message: REQUIRED_MESSAGE
        },
        minLength: {
            value: 10,
            message: "Ingrese más de 10 números"
        },
        maxLength: {
            value: 13,
            message: "Ingrese menos de 13 caracteres"
        },
        pattern: {
            value: /\d{10,13}/,
            message: "El número teléfonico solo debe contener números."
        }
    }
}

export {optionsValidation}
