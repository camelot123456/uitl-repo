function getRelativePos(elm) {
  const pPos = elm.parentNode.getBoundingClientRect();
  const cPos = elm.getBoundingClientRect();
  const pos = {
    top: cPos.top - pPos.top + elm.parentNode.scrollTop,
    right: cPos.right - pPos.right,
    bottom: cPos.bottom - pPos.bottom,
    left: cPos.left - pPos.left
  };
  return pos;
}

function scrollTo(element, to, duration) {
  const start = element.scrollTop,
    change = to - start,
    startTime = performance.now();
  let now, elapsed, t;

  function animateScroll() {
    now = performance.now();
    elapsed = (now - startTime) / 1000;
    t = elapsed / duration;
    const easeInOutQuad = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    element.scrollTop = start + change * easeInOutQuad;
    if (t < 1) {
      window.requestAnimationFrame(animateScroll);
    }
  }
  animateScroll();
}

function scrollToElement(container, element, duration = 1) {
  const pos = this.getRelativePos(element);
  this.scrollTo(container, pos.top, duration);
}
