/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Check if there is jQuery
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

$(function() {
    
    // Validation functions for user input
    var validateName = function (name) {
        return name.match(/^[A-Za-z]*\s[A-Za-z]+$/);
    }
    var validateEmail = function (email) {
        return email.match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[\.][a-z]{2,4}$/);
    };
    var validatePassword = function (password) {
        return password.length >= 6;
    }
    
    $('#signup-btn').click(function () {
        $('#login-container').hide();
        $('#signup-container').show();
    });
    
    $('#back-btn').click(function() {
       $('#login-container').show();
       $('#signup-container').hide();
    });
    
    // User login
    $('#login-form').submit(function () {
        
        // Hide previous errors
        $('#alert-login-email-invalid').hide();
        $('#alert-login-email-mismatch').hide();
        $('#alert-login-password-invalid').hide();
        $('#alert-login-password-mismatch').hide();
        
        var email = $('#login-email').val();
        var password = $('#login-password').val();
        
        // Validate user inputs and show error if not valid
        var err_flag = false;
        if(!validateEmail(email)) {
            $('#alert-login-email-invalid').show();
            err_flag = true;
        }
        if (!validatePassword(password)) {
            $('#alert-login-password-invalid').show();
            err_flag = true;
        }
        
        // If validation successful, attempt GET user account
        if(!err_flag) {
            // Put AJAX call here
            alert('SUCCESS: Email: ' + email + ", Password: " + password);
        }
        return false;
    });
    
    // User signup
    $('#signup-form').submit(function () {
        
        // Hide previous errors
        $('#alert-signup-name-invalid').hide();
        $('#alert-signup-email-invalid').hide();
        $('#alert-signup-email-taken').hide();
        $('#alert-signup-password-invalid').hide();
        $('#alert-signup-connect-invalid').hide();
        
        var name = $('#signup-name').val();
        var email = $('#signup-email').val();
        var password = $('#signup-password').val();
        var connect = $('#signup-connect').prop('checked');

        // Validate user inputs and show error if not valid
        var err_flag = false;
        if (!validateName(name)) {
            $('#alert-signup-name-invalid').show();
            err_flag = true;
        }
        if (!validateEmail(email)) {
            $('#alert-signup-email-invalid').show();
            err_flag = true;
        }
        if (!validatePassword(password)) {
            $('#alert-signup-password-invalid').show();
            err_flag = true;
        }
        if(!connect) {
             $('#alert-signup-connect-invalid').show();
             err_flag = true;
        }
        
        // If validation successful, attempt POST new user account
        if (!err_flag) {
            // Put AJAX call here
            alert('SUCCESS: Name: ' + name + ", Email: " + email + ", Password: " + password + ", Connect: " + connect);
        }
        return false;
    });
});
