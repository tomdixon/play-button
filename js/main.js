var buttonIn = new Howl({
  src: ["sound/button-in.wav"],
  html5: true
});
var buttonOut = new Howl({
  src: ["sound/button-out.wav"],
  html5: true
});

$(document).ready(function() {
  $("#play-button").on("mousedown", function() {
    buttonIn.play();
  });

  $("#play-button").on("mouseup", function() {
    buttonOut.play();

    $("body").css(
      "background-color",
      `rgb(${randomBetween(0, 256)},${randomBetween(0, 256)}, ${randomBetween(
        0,
        256
      )}`
    );
  });
});

var randomBetween = function(from, to) {
  return Math.random() * (to - from) + from;
};
