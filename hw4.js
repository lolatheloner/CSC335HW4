// <![CDATA[
	$(document).ready(function() {
		$('h1').mouseenter(function() {
			$('.button').css("backgroundColor", "purple");
		});
		$('h1').mouseleave(function() {
			$('.button').css("backgroundColor", "white");
		});
		$('.button:contains("Click here")').click(function() {
    		$(this).parent("li:not(:has(ul))").append("<ul></ul>");
    		$(this).parent("li").children('ul:not(:has(li))').append("<li></li>");
    		$(this).parent("li").find("li").append('<input />');
    		$('input:last').attr('type', 'button');
    		$(':button:last').val('Delete me!');
    		$(':button:last').click(function() {
      			$(this).remove();
    		});
  		});
		$("span:contains('something')").click(function() {
			$(this).replaceWith("<span style='background-color: black'><font color='limegreen'>Nobody expects the Spanish Inquisition!</span>");
		});
	});
      // ]]>