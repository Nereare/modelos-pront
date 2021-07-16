$(document).ready(function() {
  const name = "Modelo de Prontuários";
  const author = "Igor Padoim";
  const year = "2021";
  const license_name = "Licença Hipocrática";
  const license_url = "https://firstdonoharm.dev/";
  const version = "1.17.15-r13";

  $(".copy.name").html(name + " &ndash; " + $(".copy.name").html());
  $(".copy.author").html(author);
  $(".copy.year").html(year);
  $(".copy.license").html(license_name).attr("href", license_url);
  $(".copy.version").html(version);
});
