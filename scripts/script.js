var input = document.getElementById("email");
var icon = document.getElementById("icon");

function regexValidation(string) {
  var pattern = /^((.+)(@)(\w+)(\.)(\w+)(\.)?(\w+)?)$/mig;
  if(!pattern.test(string)) {
    input.className += " invalidInput";
    icon.className = icon.className.replace(/\hidden\b/,'');
  } else {
    input.className = input.className.replace(/\invalidInput\b/,'');
    icon.className += " hidden";
  }
}

