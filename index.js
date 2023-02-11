//target element from dom for translation:
const title_header = document.getElementById("container-me--title");
const content_headerOne = document.getElementById("container-me--contentOne");
const content_headerTwo = document.getElementById("container-me--contentTwo");
const about_me_title = document.getElementById("about-me--title");
const about_me_subtitle = document.getElementById("about-me--subtitle");
const about_me_contentOne = document.getElementById("about-me--contentOne");
const about_me_contentTwo = document.getElementById("about-me--contentTwo");
const project_title = document.getElementById("projets--title");
const overlay_title_rock_paper = document.getElementById(
  "overlay--title-rock_paper"
);
const overlay_contentOne_rock_paper = document.getElementById(
  "overlay-contentOneRock_paper"
);
const overlay_contentTwo_rock_paper = document.getElementById(
  "overlay-contentTwoRock_paper"
);
const overlay_contentOneTodo = document.getElementById(
  "overlay-contentOneTodo"
);
const overlay_contentTwoTodo = document.getElementById(
  "overlay-contentTwoTodo"
);
const overlay_contentOnePaint = document.getElementById(
  "overlay-contentOne-Paint"
);
const overlay_contentTwoPaint = document.getElementById(
  "overlay-contentTwo-Paint"
);
const overlay_contentOneFlappy = document.getElementById(
  "overlay-contentOne-Flappy"
);
const overlay_contentTwoFlappy = document.getElementById(
  "overlay-contentTwo-Flappy"
);
const overlay_contentOneMarker = document.getElementById(
  "overlay-ContentOne-Marker"
);
const overlay_contentTwoMarker = document.getElementById(
  "overlay-ContentTwo-Marker"
);
const overlay_contentOneConsole = document.getElementById(
  "overlay-contentOne-Console"
);
const overlay_contentTwoConsole = document.getElementById(
  "overlay-contentTwo-Console"
);
const overlay_contentOneGravityGun = document.getElementById(
  "overlay-contentOne-GravityGun"
);
const overlay_contentTwoGravityGun = document.getElementById(
  "overlay-contentTwo-GravityGun"
);

async function OnPageLoaded() {
  //fetch the local_fr from the data.json file :
  const local_FR = await fetch("data.json");
  const res = await local_FR.json();
  const resFR = res["local_fr"];

  const ratio = 0.1;
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
  };

  const handleIntersect = function (entries, observer) {
    // We go trough each playAnim class and add container-about-play-animation which allow the element to play animation when the view is on.
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add("container-about-play-animation");
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  };

  //observer allow us to play animation when the target element is visible on the screen.
  const observer = new IntersectionObserver(handleIntersect, options);
  const _ = document
    .querySelectorAll(".playAnim")
    .forEach((e) => observer.observe(e));

  //Languages FR:
  const userLang = navigator.language || navigator.userLanguage;
  const fr = "fr-FR";

  if (userLang == fr) {
    title_header.innerText = resFR["title_header"];
    content_headerOne.innerText = resFR["content_headerOne"];
    content_headerTwo.innerText = resFR["content_headerTwo"];
    about_me_title.innerText = resFR["about_me_title"];
    about_me_subtitle.innerText = resFR["about_me_subtitle"];
    about_me_contentOne.innerText = resFR["about_me_contentOne"];
    about_me_contentTwo.innerText = resFR["about_me_contentTwo"];

    project_title.innerText = resFR["project_title"];
    overlay_title_rock_paper.innerText = resFR["overlay_title_rock_paper"];
    overlay_contentOne_rock_paper.innerText =
      resFR["overlay_contentOne_rock_paper"];
    overlay_contentTwo_rock_paper.innerText =
      resFR["overlay_contentTwo_rock_paper"];
    overlay_contentOneTodo.innerText = resFR["overlay_contentOneTodo"];
    overlay_contentTwoTodo.innerText = resFR["overlay_contentTwoTodo"];
    overlay_contentOnePaint.innerText = resFR["overlay_contentOnePaint"];
    overlay_contentTwoPaint.innerText = resFR["overlay_contentTwoPaint"];
    overlay_contentOneFlappy.innerText = resFR["overlay_contentOneFlappy"];
    overlay_contentTwoFlappy.innerText = resFR["overlay_contentTwoFlappy"];
    overlay_contentOneMarker.innerText = resFR["overlay_contentOneMarker"];
    overlay_contentTwoMarker.innerText = resFR["overlay_contentTwoMarker"];
    overlay_contentOneConsole.innerText = resFR["overlay_contentOneConsole"];
    overlay_contentTwoConsole.innerText = resFR["overlay_contentTwoConsole"];
    overlay_contentOneGravityGun.innerText =
      resFR["overlay_contentOneGravityGun"];
    overlay_contentTwoGravityGun.innerText =
      resFR["overlay_contentTwoGravityGun"];
  }
}

//Trigger load once the window is fully ready.
window.addEventListener("load", OnPageLoaded);
