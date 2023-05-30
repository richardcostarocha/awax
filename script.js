window.onload = () => {
  const slideOffset = 100;

  const pointers = document.querySelectorAll('.sliders-pointers .pointer');

  const sliders = document.querySelector('.sliders');

  const totalSlideOffset = slideOffset * (pointers.length - 1);

  pointers.forEach((pointer, index) => {
    pointer.addEventListener('click', () => {
      const marginLeftValue = `calc(-${index * slideOffset}%)`;

      sliders.style.marginLeft = marginLeftValue;

      pointers.forEach(p => p.classList.remove('active'));
  
      pointer.classList.add('active');
    });
  });
};