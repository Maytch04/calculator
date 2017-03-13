

$(document).ready(function(){
	$('.add').on('click', function(){
		var num_one = parseFloat($('.value1').val())
		var num_two = parseFloat($('.value2').val())
		$('.answer').val(num_one + num_two)
	})
})

$(document).ready(function(){
	$('.subtract').on('click', function(){
		var num_one = parseFloat($('.value1').val())
		var num_two = parseFloat($('.value2').val())
		$('.answer').val(num_one - num_two)
	})
})

$(document).ready(function(){
	$('.multiply').on('click', function(){
		var num_one = parseFloat($('.value1').val())
		var num_two = parseFloat($('.value2').val())
		$('.answer').val(num_one * num_two)
	})
})

$(document).ready(function(){
	$('.divide').on('click', function(){
		var num_one = parseFloat($('.value1').val())
		var num_two = parseFloat($('.value2').val())
		$('.answer').val(num_one / num_two)
	})
})