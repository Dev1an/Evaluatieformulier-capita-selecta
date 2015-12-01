var evaluationHelper = {
	evaluation() {
		return Evaluaties.find()
	}
}

Template.overview.helpers(evaluationHelper)
Template.shortOverview.helpers(evaluationHelper)