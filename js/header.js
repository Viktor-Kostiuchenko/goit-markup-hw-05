(() => {
   const { height: HeaderHeight } = document
      .querySelector(".header")
      .getBoundingClientRect();

   document.body.style.paddingTop = `${HeaderHeight}px`;
      
})();