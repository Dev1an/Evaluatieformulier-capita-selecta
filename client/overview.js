var evaluationHelper = {
	evaluation() {
		return Evaluaties.find({}, {sort: {date: -1}})
	}
}

Template.overview.helpers(evaluationHelper)
Template.shortOverview.helpers(evaluationHelper)