﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


$(document).ready(function() 
{
  $("#Movie_ReleaseDate").datepicker({
   changeMonth: true,
   changeYear: true,
   showWeek: true,
   firstDay: 1, 
   showButtonPanel: true,
   beforeShow: function (input, inst) {
        setTimeout(function () {
            inst.dpDiv.css({
                top: 150,
                left: 600
            });
        }, 1);
    }
});



});
