function strongPasswordCheckerII(password: string) {
  if (password.length < 8) {
    return false;
  }

  let hasLowercase = false;
  let hasUppercase = false;
  let hasDigit = false;
  let hasSpecialChar = false;
  const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
  
  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    const charCode = char.charCodeAt(0);

    if (i > 0 && char === password[i - 1]) {
      return false;
    }
    
    if (charCode >= 97 && charCode <= 122) {
      hasLowercase = true;
    }

    if (charCode >= 65 && charCode <= 90) {
      hasUppercase = true;
    }

    if (charCode >= 48 && charCode <= 57) {
      hasDigit = true;
    }

    if (specialCharacters.includes(char)) {
      hasSpecialChar = true;
    }
  }

  return hasLowercase && hasUppercase && hasDigit && hasSpecialChar;
}
