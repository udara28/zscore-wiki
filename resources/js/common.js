$(document).ready(function () {
  // fix menu when passed
  $(".masthead").visibility({
    once: false,
    onBottomPassed: function () {
      $(".fixed.menu").transition("fade in");
    },
    onBottomPassedReverse: function () {
      $(".fixed.menu").transition("fade out");
    },
  });

  // create sidebar and attach to menu open
  $(".ui.sidebar").sidebar("attach events", ".toc.item");
});
//First Name vallidation
function ValidateFname(inputText) {
  var user_input = inputText.value;
  
  if (user_input == "") {
    alert("You haven't entered First Name!");
    document.form1.text1.focus();
    return false;
  }
}
// Last Name vallidation
function ValidateLname(inputText) {
  var user_input = inputText.value;
  
  if (user_input == "") {
    alert("You haven't entered Last Name!");
    document.form1.text1.focus();
    return false;
  }
}

//email validation
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var user_input = inputText.value;
  if (inputText.value.match(mailformat)) {
    document.form3.text3.focus();
    return true;
  }
  else if (user_input == "") {
    alert("You haven't entered an email address!");
    return false;
  }
  else {
    alert("You have entered an invalid email address!");
    document.form3.text3.focus();
    return false;
  }
}


