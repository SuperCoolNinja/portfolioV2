//Avoid mixing with global dom stuff

const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("container-about-play-animation");
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
const section_to_play_anims = document
  .querySelectorAll(".playAnim")
  .forEach((e) => observer.observe(e));
