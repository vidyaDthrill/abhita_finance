//FOR CHARACTER
export function checkonlyletterandcharacter(txt) {
  var reg_name_lastname = /^[a-zA-Z\s]*$/;

  if (!reg_name_lastname.test(txt)) {
    return false;
  } else {
    return true;
  }
}

//FOR NUMBER
export function checkonlynumbervalue(txt) {
  var reg_name_lastname = /^[0-9\s]*$/;

  if (!reg_name_lastname.test(txt)) {
    return false;
  } else {
    return true;
  }
}

//FOR IMAGE , JPG ,JPEG FORMAT
// export function checkimageformat(txt) {
//     var exp = /^.*\.(jpg|jpeg|gif|JPG|png|PNG)$/;
//     if (!exp.test(txt)) {
//         return false;
//     }
//     else { return true; }
// }

//FOR PDF FILE
export function checkpdffile(txt) {
  var exp = /^.*\.(pdf)$/;
  if (!exp.test(txt)) {
    return false;
  } else {
    return true;
  }
}

//FOR SALARY WITH SIMPLE AND DECIMAL NUMBERS
export function checkamount(txt) {
  var regexp = /^\d+(\.\d{1,2})?$/;
  if (!regexp.test(txt)) {
    return false;
  } else {
    return true;
  }
}

//FOR PINCODE
export function checkpincode(txt) {
  var reg = /^(\d{4}|\d{6})$/;
  if (!reg.test(txt)) {
    return false;
  } else {
    return true;
  }
}

export function checkmobile(txt) {
  var exp = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  //var exp = /^.*\.(jpg|pdf|doc)$/;
  if (!exp.test(txt)) {
    return false;
  } else {
    return true;
  }
}

export function checkemail(txt) {
  var exp =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
  //var exp = /^.*\.(jpg|pdf|doc)$/;
  if (!exp.test(txt)) {
    return false;
  } else {
    return true;
  }
}

// FOR PASSWORD

export function checkUpperCase(txt) {
  var exp = /(?=.*?[A-Z])/;
  if (!exp.test(txt)) {
    return false;
  } else {
    return true;
  }
}

export function checkLowerCase(txt) {
  var exp = /(?=.*?[a-z])/;
  if (!exp.test(txt)) {
    return false;
  } else {
    return true;
  }
}
export function checkDigitsRegExp(txt) {
  var exp = /(?=.*?[0-9])/;
  if (!exp.test(txt)) {
    return false;
  } else {
    return true;
  }
}
export function checkSpecialCharRegExp(txt) {
  var exp = /(?=.?[#?!@$%^&-])/;
  if (!exp.test(txt)) {
    return false;
  } else {
    return true;
  }
}
export function checkMinLengthRegExp(txt) {
  var exp = /.{8,}/;
  if (!exp.test(txt)) {
    return false;
  } else {
    return true;
  }
}
