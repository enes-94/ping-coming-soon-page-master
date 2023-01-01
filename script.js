const from = document.getElentById('form')
const email = document.getElentById('email')
const button = document.getElentById('button')

from.addEventListener('submit', (e) => {
  e.preventDefault()

  validate()
})

function validate() {
const emailValue = email.target.value.trim()

if (emailValue === '') {
  setErrorFor(email, 'Email cannot be empty')
} else if (!isEmail(emailValue)) {
  setErrorFor(email, 'Please provide a valid address')
} else {
  setSuccesFor(email)
}


}

function setErrorFor() {

}

function setSuccesFor() {

}

function isEmail(email) {
  return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0.9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
    email
  )
}