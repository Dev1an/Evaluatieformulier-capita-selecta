Template.success.helpers({
	myEvaluation() {return Evaluaties.findOne(FlowRouter.getParam('evaluatieId'))}
})