const isMobileNumberValid = (ph: string) => {
  const regX = new RegExp(/^((?!(0))[0-9]{10})$/);
  return regX.test(ph);
};

const isNumericField = (num: string) => {
  const regX = new RegExp(/^\d*[.]?\d*$/);
  return regX.test(num.toString());
};

const isEmailValid = (email: string) => {
  const regX = new RegExp(
    /^[a-zA-Z0-9_]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
  );
  return regX.test(email);
};

const isEmpty = (str: string) => {
  return str.length === 0 ? true : false;
};

export { isMobileNumberValid, isEmailValid, isEmpty, isNumericField };
