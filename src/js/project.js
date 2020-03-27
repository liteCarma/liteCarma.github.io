/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// $(document).ready(function () {
//   $('.carousel__inner').slick({
//     speed: 300,
//     prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false
//         }
//       }
//     ]
//   })
// })

document.addEventListener('DOMContentLoaded', function (event) {
  sliderTNS()
})

const sliderTNS = function () {
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    navPosition: 'bottom',
    center: true,
    responsive: {
      992: {
        nav: false
      },
      320: {
        touch: true,
        nav: true
      }
    }
  })

  document.querySelector('.carousel .prev').addEventListener('click', function () {
    slider.goTo('prev')
  })
  document.querySelector('.carousel .next').addEventListener('click', function () {
    slider.goTo('next')
  })
}

const tabs = document.querySelectorAll('.catalog .catalog__content')
document.querySelector('ul.catalog__tabs').addEventListener('click', function (event) {
  document.querySelector('.catalog .catalog__tab_active').classList.remove('catalog__tab_active')
  const li = event.target.closest('li')
  li.classList.add('catalog__tab_active')
  document.querySelector('.catalog .catalog__content_active').classList.remove('catalog__content_active')
  const index = li.dataset.index
  tabs[index].classList.add('catalog__content_active')
})

document.querySelector('.catalog').addEventListener('click', function (event) {
  if (event.target.matches('a.catalog-item__link') || event.target.matches('a.catalog-item__back')) {
    event.preventDefault()
    const wrapper = event.target.closest('.catalog-item__wrapper').children
    wrapper[0].classList.toggle('catalog-item__content_active')
    wrapper[1].classList.toggle('catalog-item__list_active')
  }
})

const fadeIn = function (el, speed) {
  if (speed > 0) {
    const opacity = el.style.opacity || 1
    el.style.opacity = 0
    el.style.display = ''
    const clear = setInterval(function () {
      if (el.style.opacity < opacity) {
        el.style.opacity = parseFloat(el.style.opacity) + 0.2
      } else {
        el.style.opacity = ''
        clearInterval(clear)
      }
    }, speed)
  } else {
    el.style.display = ''
  }
}

const fadeOut = function (el, speed) {
  if (speed > 0) {
    const opacityOld = el.style.opacity
    el.style.opacity = 1
    const clear = setInterval(function () {
      if (el.style.opacity > 0) {
        el.style.opacity = parseFloat(el.style.opacity) - 0.2
      } else {
        clearInterval(clear)
        el.style.display = 'none'
        el.style.opacity = opacityOld
      }
    }, speed)
  } else {
    el.style.display = 'none'
  }
}

document.addEventListener('submit', async function (event) {
  const form = event.target.closest('form')
  if (!form.matches('form.feed-form') || event.defaultPrevented) return

  event.preventDefault()
  fadeOut(form.closest('.modal'))
  const response = await fetch('mailer/smart.php', {
    method: 'POST',
    body: new FormData(form)
  })

  if (response.ok) {
    form.reset()
    fadeIn(document.querySelector('#thanks'), 20)
  } else {
    alert('Упс, попробуйте еще раз')
    fadeIn(form.closest('.modal'), 20)
  }
}, true)

document.addEventListener('scroll', function () {
  const scrollPercent = window.pageYOffset * 100 / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  const pageUp = document.querySelector('.page-up')
  if (scrollPercent > 40) {
    fadeIn(pageUp)
  } else {
    fadeOut(pageUp)
  }
})

document.addEventListener('click', function (event) {
  if (!event.target) return
  const link = event.target.closest('a')
  if (!link) return
  const href = link.getAttribute('href')
  if (href && href.startsWith('#') & href !== '#') {
    event.preventDefault()
    let top = document.querySelector(href).getBoundingClientRect().top
    const toTop = top < 0
    if (!toTop) {
      top += document.documentElement.clientHeight
    }
    let i = 0
    let yD
    if (toTop) {
      yD = -50
    } else {
      yD = +50
    }
    const clear = setInterval(function () {
      if ((i > top && toTop) || (i < top && !toTop)) {
        document.documentElement.scrollBy(0, yD)
        i += yD
      } else {
        clearInterval(clear)
      }
    }, 10)
  }
})
