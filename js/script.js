$(document).ready(function(btn) {
  $(".refactor form").submit(function(event) //to prevent flashing//
    {
      var arrays = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
      arrays.forEach(function(array) {
        var userinput = $("input#" + array).val();
        $("." + array).text(userinput);

      });
        $(".story").show()

      event.preventDefault();
    });
});
