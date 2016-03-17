var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var eMail = $('#email').val();
    var password = $('#password').val();
    var myEmail = "ffmp@yahoo.com";

    if(firstName === "") {
      $('.first-name-error').text("Please enter your first name");
    }
    if(lastName === "") {
      $('.last-name-error').text("Please enter your last name");
    }
    if(eMail === "") {
      $('.email-error').text("Please enter your Email");
    } else if(eMail === myEmail) {
      $('.email-error').text("This email is already taken.");
    }
    if(password === "") {
      $('.password-error').text("Please enter a password.");
    } else if(password.length < 8) {
      $('.password-error').text("Short passwords are easy to guess. Try one with at least 8 characters.");
    }

    return false;
  })
}

$(document).ready(main);
