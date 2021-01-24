// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// EXAMPLE:
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

const pin = "1234"

const validatePIN = pin => {
    const pinRGEX1 = /^\d{6}$/;
    const pinRGEX2 = /^\d{4}$/;
    if (pin.search(pinRGEX1) === 0) return true;
    else if (pin.search(pinRGEX2) === 0) return true;
    else return false;
}

// Better version:
const validatePIN = pin => /^\d{4}|\d{6}$/.test(pin);

validatePIN(pin);