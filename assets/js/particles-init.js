document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 70 },
      color: { value: "#00c9b7" },
      shape: { type: "circle" },
      opacity: { value: 0.35 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00c9b7",
        opacity: 0.25,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" }
      },
      modes: {
        grab: { distance: 180, line_linked: { opacity: 0.5 } }
      }
    },
    retina_detect: true
  });
});
