var buttonIn = new Howl({
  src: ["sound/button-in.wav"],
  html5: true
});
var buttonOut = new Howl({
  src: ["sound/button-out.wav"],
  html5: true
});

var pressing = false;

$(document).ready(function() {
  $("#play-button").on("mousedown", function() {
    if (!pressing) {
      pressing = true;
      $(this).addClass("pressed");
      buttonIn.play();

      setTimeout(() => {
        $(this).removeClass("pressed");
        buttonOut.play();

        $("body").css(
          "background-color",
          `rgb(${randomBetween(0, 256)},${randomBetween(
            0,
            256
          )}, ${randomBetween(0, 256)}`
        );

        pressing = false;
      }, 500);
    }
  });

  // $("#play-button").on("mouseup", function() {
  //   buttonOut.play();

  //   $("body").css(
  //     "background-color",
  //     `rgb(${randomBetween(0, 256)},${randomBetween(0, 256)}, ${randomBetween(
  //       0,
  //       256
  //     )}`
  //   );
  // });
});

var randomBetween = function(from, to) {
  return Math.random() * (to - from) + from;
};
