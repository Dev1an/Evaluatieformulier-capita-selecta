FlowRouter.route('/', {
	action() {
		BlazeLayout.render('banner', {content: 'form'})
	}
})

FlowRouter.route('/success/:evaluatieId', {
	action() {
		BlazeLayout.render('banner', {content: 'success'})
	}
})

FlowRouter.route('/overview', {
	action() {
		BlazeLayout.render('blankLayout', {content: 'overview'})
	}
})

FlowRouter.route('/qr', {
	action() {
		BlazeLayout.render('qrLayout', {content: 'shortOverview'})
	}
})