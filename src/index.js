module.exports = function toReadable(number) {
  let oneToNine = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let tenToNinety = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let unit
  let ten
  let stringNumber = number.toString()
  if (number == 0) {
    return `zero`
  } else if (stringNumber.length == 1) {
    return `${oneToNine[stringNumber[0]]}`
  } else if (stringNumber.length == 2) {
    unit = oneToNine[stringNumber[1]] ? ` ${oneToNine[stringNumber[1]]}` : ''
    ten = stringNumber[0] == '1' ? `${tenToNineteen[stringNumber[1]]}` : `${tenToNinety[stringNumber[0]]}`
    return number < 20 ? ten : ten + unit
  } else if (stringNumber.length == 3) {
    unit = oneToNine[stringNumber[2]] ? ` ${oneToNine[stringNumber[2]]}` : ''
    ten = stringNumber[1] == '0' ? '' : ` ${tenToNinety[stringNumber[1]]}`
    if (stringNumber[1] == '1') {
      return `${oneToNine[stringNumber[0]]} hundred` + ` ${tenToNineteen[stringNumber[2]]}`
    }
    return `${oneToNine[stringNumber[0]]} hundred` + ten + unit
  }
}

