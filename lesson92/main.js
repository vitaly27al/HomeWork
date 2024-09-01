const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body
// задали  const body = document.body чтобы add класс закрывающий возможность скролла при открытой модалке


const openModal = () => {
    modal.classList.add('modal-open')
    body.classList.add('body-fixed')
    // body.classList.add('body-fixed') при открытии модалки скролл пропадает
}

const closeModal = () => {
    modal.classList.remove('modal-open')
    body.classList.remove('body-fixed')
    // body.classList.remove('body-fixed') при закрытии модалки скролл возвращается
}

btn.addEventListener('click', () => {
    openModal()
})

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal-open')) {
        closeModal()
    }
})



// чтобы не писать постоянно modal.classList.remove('modal-open) запишем отдельную функцию const closeModal
// и заменим modal.classList.remove('modal-open') на closeModal()
// тоже самое сделаем с modal.classList.add('modal-open')  меняем на  openModal()