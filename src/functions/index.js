export const currentUrl = (slash) => {
  const href = window.location.pathname
  return slash ? href : href.slice(1)
}

export const scroll = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}

export const emailValidator = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export const passwordValidator = (password) => {
  return password.toLowerCase().match(/^[a-zA-Z0-9]{6,10}$/)
}

export const userNameValidator = (userName) => {
  return userName.toLowerCase().match(/^[a-zA-Z0-9_]{1,10}$/)
}

export const justNumberValidator = (number) => {
  return number.toLowerCase().match(/^[0-9]*$/)
}

export const phoneNumberValidator = (number) => {
  return number.toLowerCase().match(/^(0)9(0[1-5]|[1 3 9]\d|2[0-2]|98)\d{7}$/)
}

export const steamUsernameValidator = (username) => {
  return username.toLowerCase().match(/^[A-Za-z0-9_-]{3,15}$/)
}

export const persianDigits = function (string) {
  const id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  return String(string).replace(/[0-9]/g, function (w) {
    return id[+w]
  })
}

export const randomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
