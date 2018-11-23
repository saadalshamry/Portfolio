// VARIABLES
var Projects = [
  {
    name: "Car Shipping Web Application 1",
    description:
      "as asas asasa sasa sasa asas asas asas asasa sasasa asasasas asas asas",
    image: "./assets/images/project-mirage.png",
    link: "mirage.com"
  },
  {
    name: "Car Shipping Web Application 2",
    description:
      "as asas asasa sasa sasa asas asas asas asasa sasasa asasasas asas asas",
    image: "./assets/images/project-mirage.png",
    link: "mirage.com"
  },
  {
    name: "Car Shipping Web Application 3",
    description:
      "as asas asasa sasa sasa asas asas asas asasa sasasa asasasas asas asas",
    image: "./assets/images/project-mirage.png",
    link: "mirage.com"
  }
];

var counter = 0;
// FUNCTIONS
// PROJECT HANDLING FUNCTIONS
function changeProject(counter) {
  var proj = Projects[counter];
  $(".project-image").attr("src", proj.image);
  $(".project-title").text(proj.name);
  $(".project-description").text(proj.description);
  $(".project-link").text(proj.link);
  $(".project").fadeIn();
}
// page content loaded code goes here
$(document).ready(function() {
  // SHOWING PROJECTS
  // first render
  changeProject(counter);
  // click events
  $(".next-project").on("click", function() {
    if (counter === Projects.length - 1) {
      return;
    }
    $(".project").fadeOut();
    counter++;
    changeProject(counter);
  });
  $(".prev-project").on("click", function() {
    if (counter === 0) {
      return;
    }
    $(".project").fadeOut();
    counter--;
    changeProject(counter);
  });
});
