$(function() {
	$( "#slider-range-min" ).slider({
		range: "min",
		value: 15000,
		min: 1,
		max: 450000,
		slide: function( event, ui ) {
			$( "#amount" ).text(ui.value );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
});
