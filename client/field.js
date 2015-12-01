parentTemplate = function(template) {
	for (var i = template.view.parentView; i.template == undefined; i = i.parentView);
	return i.templateInstance()
}

Template.field.onRendered(function() {
	var template = parentTemplate(this)
	template.fields = template.fields || {}
	template.fields[this.data] = this.find('*')
	$(this.find('*')).addClass(this.data + 'Field')
})