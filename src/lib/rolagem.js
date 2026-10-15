import Lenis from "lenis";

let lenis = null;

// Liga a rolagem suave. Devolve a função que desliga (usada pelo useEffect).
// Quem pede menos movimento no sistema continua com a rolagem normal.
export function iniciarRolagem() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

  let raf = 0;
  const loop = (tempo) => {
    lenis.raf(tempo);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(raf);
    lenis.destroy();
    lenis = null;
  };
}

export function rolarParaTopo() {
  if (lenis) lenis.scrollTo(0, { duration: 0.9 });
  else window.scrollTo({ top: 0 });
}