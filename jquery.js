$(() => {
  $(".hideshow-button").on("click", () => {
    $(".hideshow-content").toggle();
  });

  $(".fading-button").on("click", () => {
    $(".fading-content").fadeToggle();
  });

  $(".slide-button").on("click", () => {
    $(".slide-content").slideToggle("slow");
  });

  $(".animation-button").on("click", () => {
    $(".animation-box").animate({ left: "350px" }, "slow");
  });
});
