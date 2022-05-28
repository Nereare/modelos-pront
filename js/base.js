Date.prototype.isLeapYear = function() {
    var year = this.getFullYear();
    if((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
};

// Get Day of Year
Date.prototype.getDOY = function() {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = this.getMonth();
    var dn = this.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && this.isLeapYear()) dayOfYear++;
    return dayOfYear;
};

$(document).ready(function() {
  console.log("Main Logic Ready!");

  // Accept cookies
  $("#cookie-accept").on("click", function() {
    $.ajax({
      url: "scripts/cookies.php",
      type: "GET",
      data: {
        job: "accept"
      }
    })
    .always(function() { location.reload(true); });
  });
  // Reject cookies
  $("#cookie-reject").on("click", function() {
    $.ajax({
      url: "scripts/cookies.php",
      type: "GET",
      data: {
        job: "deny"
      }
    })
    .always(function() { location.reload(true); });
  });

  // Accept ethical responsability
  $("#ethics-accept").on("click", function() {
    $.ajax({
      url: "scripts/cookies.php",
      type: "GET",
      data: {
        job: "ethics"
      }
    })
    .always(function() { location.reload(true); });
  });

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});
