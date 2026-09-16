try{
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-name, .hero-role, .hero-tagline, .hero-marquee-wrap, .hero-actions", {
    y: 24, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power2.out", delay: 0.1
  });

  gsap.utils.toArray("#about, #skills, #projects, #certifications, #contact").forEach((el) => {
    gsap.from(el.querySelectorAll(".section-head, .label, .about, .projects-grid, .cert-grid, .contact-top, .big-name"), {
      y: 20, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 82%" }
    });
  });

  // Cycling hero role tags
  const tags = ["Computer Engineering Student", "Web Developer", "Creative Developer"];
  let idx = 0;
  const tagEl = document.getElementById("heroTag");
  setInterval(() => {
    idx = (idx + 1) % tags.length;
    tagEl.childNodes[0].nodeValue = tags[idx];
  }, 2200);
}catch(e){ console.error("init failed", e); }
