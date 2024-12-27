export const onClientEntry = () => {
  // Inject critical CSS
  const style = document.createElement('style');
  style.innerHTML = `
    .hero-section {
      opacity: 1 !important;
      visibility: visible !important;
    }
  `;
  document.head.appendChild(style);
}; 