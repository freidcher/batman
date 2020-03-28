$(document).ready(function()
{
 let tabsItem = $('.tab-item');
 

tabsItem.on('click',function(event)
{
event.preventDefault();
let activContent=$(this).attr('href');
$('.visible').toggleClass('visible');
$(activContent).toggleClass('visible');
$('.active').toggleClass('active');
$(this).toggleClass('active');

});

});