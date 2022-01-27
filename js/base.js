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
  const name = "Modelo de Prontuários";
  const author = "Igor Padoim";
  const year = "2021";
  const license_name = "Licença Hipocrática";
  const license_url = "https://firstdonoharm.dev/";
  const version = "1.25.22-r22";

  $(".copy.name").html(name + " &ndash; " + $(".copy.name").html());
  $(".copy.author").html(author);
  $(".copy.year").html(year);
  $(".copy.license").html(license_name).attr("href", license_url);
  $(".copy.version").html(version);
});
