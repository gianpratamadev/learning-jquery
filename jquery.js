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
    var box = $(".animation-box");
    box.animate(
      { left: "350px", opacity: 0.5, height: "25px", width: "25px" },
      "slow"
    );
    box.animate(
      { top: "150px", opacity: 0.5, height: "25px", width: "25px" },
      "slow"
    );
    box.animate(
      { left: "0px", opacity: 0.5, height: "25px", width: "25px" },
      "slow"
    );
    box.animate(
      { top: "0px", opacity: 1, height: "80px", width: "80px" },
      "slow"
    );
  });

  $(".callback-button").on("click", () => {
    $(".callback-content").slideToggle("slow", () => {
      alert("Text hidden!");
    });
  });

  $(".chaining-button").on("click", () => {
    $(".chaining-content")
      .css("backgroundColor", "#dddddd")
      .slideUp(2000)
      .slideDown(2000)
      .animate({ marginTop: "40px" });
  });

  // DOM Manipulation
  //GET TEXT, HTML, VAL
  $(".get-button").on("click", () => {
    $(".get-content").toggle();
  });

  $("#get-value").on("click", () => {
    alert("by value: " + $("#get-name").val());
  });

  $("#a-text").on("click", () => {
    alert("by Text: " + $("#a").text());
  });
  $("#a-html").on("click", () => {
    alert("by HTML: " + $("#a").html());
  });
  $("#b-text").on("click", () => {
    alert("by Text: " + $("#b").text());
  });
  $("#b-html").on("click", () => {
    alert("by HTML: " + $("#b").html());
  });
  $("#c-text").on("click", () => {
    alert("by Text: " + $("#c").text());
  });
  $("#c-html").on("click", () => {
    alert("by HTML: " + $("#c").html());
  });

  // SET
  $(".set-button").on("click", () => {
    $(".set-content").toggle();
  });

  $("#set-value").on("click", () => {
    $("#set-name").val("Sakura Momoshiki");
  });

  $("#a-set").on("click", () => {
    $("#a-set").text("It's change! What a magic");
  });
  $("#b-set").on("click", () => {
    $("#b-set").html("<b>Whooa.. this is changed too!</b>");
  });
});
