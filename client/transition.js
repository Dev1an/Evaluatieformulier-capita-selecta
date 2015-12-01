Template.transition.onRendered(function() {
	var element = $(this.find('*'))
	function toggle() {element.transition('vertical flip', '500ms')}
	setTimeout(toggle, 10000)
	toggle()
})