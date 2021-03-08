export function clickAttacher(selector, cn) {
    const elem = document.querySelectorAll(selector);
    for (const e of elem) {
      e.addEventListener('click', () => {
        e.classList.toggle(cn);
        console.log('clicked');
      });
    }
  }

