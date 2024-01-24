
function PasswordStrength(password) {

    return isLowerCharacter(password)
        && isUpperCharacter(password)
        && isDigit(password)
        && isSpecialCharacter(password)
        && isLength(password)
        && isRepeatMoreThanTwice(password)
        && isSequencesOfThree(password)

}

function isLowerCharacter(password) {

    for (let i = 0; i < password.length; i++) {
        if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) return true;
    }
    return false;
}

function isUpperCharacter(password) {

    for (let i = 0; i < password.length; i++) {
        if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) return true;
    }
    return false;
}

function isDigit(password) {

    for (let i = 0; i < password.length; i++) {
        if (password.charCodeAt(i) >= 49 && password.charCodeAt(i) <= 57) return true;
    }
    return false;
}

function isSpecialCharacter(password) {

    for (let i = 0; i < password.length; i++) {
        if (password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 45
            || password.charCodeAt(i) == 63 || password.charCodeAt(i) == 64) return true;
    }
    return false;
}

function isLength(password) {

    return password.length >= 8;
}

function isRepeatMoreThanTwice(password) {

    let mone = 0;

    for (let i = 0; i < password.length - 1; i++) {
        mone = 0;
        for (let j = i + 1; j < password.length; j++) {
            if (password[i] == password[j]) mone++;
        }
        if (mone >= 2) return false;
    }
    return true;
}

function isSequencesOfThree(password) {

    for (let i = 0; i < password.length - 2; i++) {
        if (password.charCodeAt(i) == password.charCodeAt(i + 1) - 1 && password.charCodeAt(i) == password.charCodeAt(i + 2) - 2) return false;
    }
    return true;
}

console.log(PasswordStrength("ab34@"));
