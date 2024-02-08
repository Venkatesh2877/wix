import "./style.css";

var dark = document.getElementById("check");
var button = document.getElementById("button");
var myElement = document.querySelectorAll(".each");
var allIndex = document.querySelectorAll(".index");

var svg = document.getElementById("circleLine");
const circles = svg.querySelectorAll("circle");
const lines = svg.querySelectorAll("line");

circles.forEach((circle) => {
  circle.setAttribute("fill", "#002E47");
  circle.setAttribute("stroke", "#002E47");
});

lines.forEach((line) => {
  line.setAttribute("stroke", "#002E47");
});

dark.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  button.classList.toggle("button2");

  var isDarkMode = document.body.classList.contains("dark-mode");
  if (!isDarkMode) {
    circles.forEach((circle) => {
      circle.setAttribute("fill", "#002E47");
      circle.setAttribute("stroke", "#002E47");
    });

    lines.forEach((line) => {
      line.setAttribute("stroke", "#002E47");
    });
  } else {
    circles.forEach((circle) => {
      circle.setAttribute("fill", "#EAE3B8");
      circle.setAttribute("stroke", "#EAE3B8");
    });

    lines.forEach((line) => {
      line.setAttribute("stroke", "#EAE3B8");
    });
  }

  myElement.forEach(function (element) {
    element.classList.toggle("each1");
  });

  allIndex.forEach(function (element) {
    element.classList.toggle("index1");
  });
});

//animation

const leftElement = document.querySelector(".animate-from-left");
const rightElement = document.querySelector(".animate-from-right");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  if (isInViewport(leftElement)) {
    leftElement.classList.add("animate-show");
  } else {
    leftElement.classList.remove("animate-show");
  }
  if (isInViewport(rightElement)) {
    rightElement.classList.add("animate-show");
  } else {
    rightElement.classList.remove("animate-show");
  }
}

window.addEventListener("scroll", handleScroll);
