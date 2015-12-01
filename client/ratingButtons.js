Template.ratingButtons.onCreated(function() {
	this.rating = new ReactiveVar()
	parentTemplate(this)[this.data] = this.rating
})

var colorMap = ['', 'red', 'orange', 'yellow', 'olive', 'green']

Template.ratingButtons.helpers({
	selection(number) {
		return Template.instance().rating.get() == number ? colorMap[number] + ' active' : ''
	}
})

Template.ratingButtons.events({
	'click .ui.button.one'(event, template)   { template.rating.set(1) },
	'click .ui.button.two'(event, template)   { template.rating.set(2) },
	'click .ui.button.three'(event, template) { template.rating.set(3) },
	'click .ui.button.four'(event, template)  { template.rating.set(4) },
	'click .ui.button.five'(event, template)  { template.rating.set(5) },
})