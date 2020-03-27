/* eslint-disable no-undef */

const modal = function () {
  const overlay = document.querySelector('.overlay')
  document.body.addEventListener('click', function (event) {
    const target = event.target
    if ('modal' in target.dataset) {
      const modal = document.querySelector(`#${target.dataset.modal}`)
      if (target.dataset.modal === 'order') {
        modal.querySelector('.modal__descr').innerHTML = target.closest('.catalog-item').querySelector('.catalog-item__subtitle').innerHTML
      }
      fadeIn(overlay, 20)
      fadeIn(modal, 20)
    }

    if (target.classList.contains('modal__close')) {
      fadeOut(overlay, 40)
      fadeOut(target.closest('.modal'), 40)
    }
  })

  const settings = {
    rules: {
      name: {
        required: true,
        minLength: 5,
        maxLength: 10
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phone: true
      }
    },
    messages: {
      name: {
        required: 'Поле обязательно для заполнения',
        minLength: 'Введите не менее {0} символов',
        maxLength: 'Введите не более {0} символов'
      },
      email: {
        required: 'Поле обязательно для заполнения',
        email: 'Введите правильный адрес почты'
      },
      phone: {
        required: 'Поле обязательно для заполнения',
        phone: 'Введите правильный номер телефона'
      }
    }
  }

  modalValidation('form.feed-form', settings)
}

const validationCheckMap = {
  required (value) {
    if (value === '') {
      return true
    }
    return false
  },
  minLength (value, attVal) {
    if (value.length < attVal) {
      return true
    }
    return false
  },
  maxLength (value, attVal) {
    if (value.length > attVal) {
      return true
    }
    return false
  },
  phone (value) {
    const tel = value.match(/\d/g)
    if (tel === null || tel.length < 11) {
      return true
    }
    return false
  },
  email (value) {
    if (/\S+?@\S+?\.\S+/.test(value) === false) {
      return true
    }
    return false
  }
}

const validationCheckError = function (input, settings) {
  const nextSibling = input.nextElementSibling
  let wasError = false
  const name = input.getAttribute('name')
  const rules = settings.rules[name]
  for (const condName in rules) {
    const condValue = rules[condName]
    const msg = settings.messages[name][condName]

    wasError = validationCheckMap[condName](input.value, condValue)
    if (wasError) {
      if (nextSibling && nextSibling.classList.contains('error-msg')) {
        nextSibling.remove()
        input.classList.remove('error')
      }
      const errorEl = document.createElement('div')
      errorEl.className = 'error-msg'
      errorEl.textContent = msg.replace('{0}', condValue)
      input.classList.add('error')
      input.after(errorEl)
      break
    }
  }

  if (!wasError && nextSibling.classList.contains('error-msg')) {
    nextSibling.remove()
    input.classList.remove('error')
  }
  return wasError
}

const modalValidation = function (formSelector, settings) {
  document.addEventListener('blur', function (event) {
    if (!event.target.matches || !event.target.matches('input') || !event.target.closest('form').matches(formSelector)) return
    validationCheckError(event.target, settings)
  }, true)

  document.addEventListener('submit', function (event) {
    const form = event.target.closest('form')
    if (!form.matches(formSelector)) return
    const inputs = form.querySelectorAll('input')
    for (const input of inputs) {
      const name = input.getAttribute('name')
      const wasError = validationCheckError(input, settings)
      if (settings.rules[name].required && wasError) {
        event.preventDefault()
      }
    }
  }, true)
}

modal()
