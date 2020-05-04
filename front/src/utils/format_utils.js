function validAccount (account) {
  return this.validEmail(account) || this.validPhone(account)
}

function validEmail (email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
function validPhone (phone) {
  var re = /^(13[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9})|(19[0-9]{9})$/
  return re.test(phone)
}

const formatUtils = {
  validAccount,
  validEmail,
  validPhone
}

export default formatUtils
