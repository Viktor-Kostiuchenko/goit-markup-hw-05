// *вот этот скрипт работает (взял его из вебинара Репеты)
(() => {
      const refs = {
         openModalBtn: document.querySelector("[data-open-modal]"),
         closeModalBtn: document.querySelector("[data-close-modal]"),
         backdrop: document.querySelector("[data-backdrop]"),
   };

   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);

   refs.backdrop.addEventListener("click", logBackdropClick);

   function toggleModal() {
      refs.backdrop.classList.toggle("is-hidden");
   }

   function logBackdropClick() {
      console.log("Это клик в бекдроп");
}
   
})();


// ! а вот этот скрипт, что нам дали в описании к дз№5 - не работает даже если поменять атрибуты в html
// ! с data-open-modal на data-modal-open
// ! и
// ! data-close-modal на data-modal-open
// ? может ли это быть из-за того, что в первом скрипте используется строчка 
// ? backdrop: document.querySelector("[data-backdrop]")
// ? а во втором 
// ? modal: document.querySelector('[data-modal]'),

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-open]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//    }
   
// })();