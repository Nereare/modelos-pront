function new_med(
  inscript = "",
  way = "",
  qtt = "",
  subscript = "",
  notes = ""
) {
  let uuid = uuidPoor();
  // Inscript
  // > > Pseudo Count
  let inscript_pseudo_count_btn = $("<button>")
    .addClass("button is-static")
    .attr("tabindex", "-1")
    .html("#.");
  let inscript_pseudo_count_control = $("<div>")
    .addClass("control")
    .append(inscript_pseudo_count_btn);
  // > > Name
  let inscript_name_input = $("<input>")
    .attr("type", "text")
    .addClass("input is-fullwidth med-name")
    .attr("placeholder", "Medicação...")
    .val(inscript)
    .autocomplete({
      source: med_list,
      minLength: 3,
      classes: { "ui-autocomplete": "box" }
    });
  let inscript_name_control = $("<div>")
    .addClass("control is-expanded")
    .append(inscript_name_input);
  // > > 1st Filler
  let inscript_filler1_btn = $("<button>")
    .addClass("button is-static")
    .attr("tabindex", "-1")
    .html("--");
  let inscript_filler1_control = $("<div>")
    .addClass("control")
    .append(inscript_filler1_btn);
  // > > Way
  let inscript_way_select = $("<select>")
    .addClass("med-way");
  way_set(inscript_way_select);
  inscript_way_select
    .val(way);
  let inscript_way_selectdiv = $("<div>")
    .addClass("select")
    .append(inscript_way_select);
  let inscript_way_control = $("<div>")
    .addClass("control")
    .append(inscript_way_selectdiv);
  // > > 2nd Filler
  let inscript_filler2_btn = $("<button>")
    .addClass("button is-static")
    .attr("tabindex", "-1")
    .html("--");
  let inscript_filler2_control = $("<div>")
    .addClass("control")
    .append(inscript_filler2_btn);
  // > > Quantity
  let inscript_qtt_input = $("<input>")
    .attr("type", "text")
    .addClass("input med-qtt")
    .attr("placeholder", "Qtde")
    .attr("size", "7")
    .val(qtt);
  let inscript_qtt_control = $("<div>")
    .addClass("control")
    .append(inscript_qtt_input);
  // > Div / Container
  let inscript_div = $("<div>")
    .addClass("field has-addons")
    .append(inscript_pseudo_count_control)
    .append(inscript_name_control)
    .append(inscript_filler1_control)
    .append(inscript_way_control)
    .append(inscript_filler2_control)
    .append(inscript_qtt_control);

  // Subscript
  // > > Subscript
  let subscript_subscript_input = $("<input>")
    .addClass("input is-fullwidth med-subscript")
    .attr("id", "med-subscript-" + uuid)
    .attr("placeholder", "Modo de uso...")
    .val(subscript);
  let subscript_subscript_control = $("<div>")
    .addClass("control is-expanded")
    .append(subscript_subscript_input);
  // > > Autofill
  let subscript_autofill_icon = $("<i>")
    .addClass("mdi mdi-auto-fix");
  let subscript_autofill_span = $("<span>")
    .addClass("icon")
    .append(subscript_autofill_icon);
  let subscript_autofill_btn = $("<button>")
    .addClass("button is-link")
    .attr("id", "med-subscript-" + uuid)
    .append(subscript_autofill_span)
    .on("click", function() {
      $("#wizard-target").val("med-subscript-" + uuid);
      $("#wizard").addClass("is-active");
    });
  let subscript_autofill_control = $("<div>")
    .addClass("control")
    .append(subscript_autofill_btn);
  // > Div / Container
  let subscript_div = $("<div>")
    .addClass("field has-addons ml-6")
    .append(subscript_subscript_control)
    .append(subscript_autofill_control);

  // Notes
  // > > Notes
  let notes_input = $("<input>")
    .attr("type", "text")
    .addClass("input is-fullwidth med-notes")
    .attr("placeholder", "Orientações...")
    .val(notes);
  let notes_control = $("<div>")
    .addClass("control is-expanded")
    .append(notes_input);
  // > Div / Container
  let notes_div = $("<div>")
    .addClass("field has-addons ml-6")
    .append(notes_control);

  // Functions
  // > > Func. Up
  let functions_up_icon = $("<i>")
    .addClass("mdi mdi-arrow-up");
  let functions_up_span = $("<span>")
    .addClass("icon")
    .append(functions_up_icon);
  let functions_up_btn = $("<button>")
    .addClass("button")
    .append(functions_up_span)
    .on("click", function() {
      let current = $(this).parent().parent();
      let previous = $(this).parent().parent().prev();
      current.detach().insertBefore(previous);
    });
  // > > Func. Delete
  let functions_delete_icon = $("<i>")
    .addClass("mdi mdi-delete");
  let functions_delete_span = $("<span>")
    .addClass("icon")
    .append(functions_delete_icon);
  let functions_delete_btn = $("<button>")
    .addClass("button is-danger")
    .append(functions_delete_span)
    .on("click", function() {
      $(this).parent().parent().remove();
    });
  // > > Func. Down
  let functions_down_icon = $("<i>")
    .addClass("mdi mdi-arrow-down");
  let functions_down_span = $("<span>")
    .addClass("icon")
    .append(functions_down_icon);
  let functions_down_btn = $("<button>")
    .addClass("button")
    .append(functions_down_span)
    .on("click", function () {
      let current = $(this).parent().parent();
      let next = $(this).parent().parent().next();
      current.detach().insertAfter(next);
    });
  // > Div / Container
  let functions_div = $("<div>")
    .addClass("buttons is-centered")
    .append(functions_up_btn)
    .append(functions_delete_btn)
    .append(functions_down_btn);

  // Med
  let container = $("<div>")
    .addClass("box med-item")
    .attr("data-id", uuid)
    .append(inscript_div)
    .append(subscript_div)
    .append(notes_div)
    .append(functions_div);
  return container;
}
function way_set(select) {
  //<option value="" selected disabled>Via</option>
  let way = [
    ["Via Oral", "VO"],
    ["Via Sublingual", "SL"],
    ["Via Oral Inalatória", "Oral Inalat."],
    ["Via Nasal", "VN"],
    ["Via Oftalmológica", "Ocular"],
    ["Via Otológica", "Otológ."],
    ["Via Intravenosa", "IV"],
    ["Via Intramuscular", "IM"],
    ["Via Intradérmica", "Dermatóclise"],
    ["Via Subcutânea", "SC"],
    ["Via Retal", "Retal"],
    ["Via Vaginal", "Vaginal"],
    ["Via Tópica", "Tópica"]
  ];
  let default_option = $("<option>")
    .val("")
    .html("Via")
    .attr("selected", true)
    .attr("disabled", true);
  select.append(default_option);
  $.each(way, function (index, value) {
    let option = $("<option>")
      .val(value[0])
      .html(value[1]);
    select.append(option);
  });
}
