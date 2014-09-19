//  Add custom method - UK Phone number
//  http://cooshtee.com/blog/2012/06/jquery-validation-for-a-uk-phone-number-and-uk-postcode/
//  http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers#Selecting_valid_GB_telephone_number_ranges


jQuery.validator.addMethod('phoneUK', function(phone_number, element) {
  return this.optional(element) || phone_number.length > 9 &&
phone_number.match(/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/);
}, 'Please specify a valid UK phone number');

/*;$(document).ready(function() {

  //  jQuery Validate

  $("#nominate").validate({
    rules: {
      reason: {
        maxlength: 2000
      }
     ,telephone: {
        phoneUK: true
     }
    }
   ,errorPlacement: function(error, element) {
      offset = element.offset();
      error.insertBefore(element);
    }
  });


});*/


(function($){
  $(document).ready(function() {

    //  jQuery Validate
    $('#nominate').validate({

      rules: {
        nomineesphone: {
          phoneUK: true
        },
        reason: {
          required: true,
          maxlength: 2000
        },
        nominatoremail: {
          email: true,
          required: true
        },
        nominatorphone: {
          phoneUK: true
        }
      },
      messages: {
        nomineesname: 'Who are you nominating?',
        award: 'Nominees need to be entered into a category.',
        reason: 'Your reason needs to be under 250 words.',
        nominatoremail: 'This to confirm your nomination.'
      }

    });

  });
}(jQuery));
