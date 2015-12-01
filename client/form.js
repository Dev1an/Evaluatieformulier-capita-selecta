Template.form.events({
	'input .numberField': function(event, template) {
		var student = Studenten.findOne({number: template.fields.number.value.toLowerCase()})
		if (student == undefined) {
			student = {name: '', familyName: ''}
		}
		template.fields.name.value = student.name
		template.fields.familyName.value = student.familyName
	},
	'click .ui.green.button'(event, template) {
		Evaluaties.insert({
			number: template.fields.number.value,
			name: template.fields.name.value,
			familyName: template.fields.familyName.value,

			a1: template.fields.a1.value,
			a2: template.fields.a2.value,
			a3: template.fields.a3.value,
			a4: template.fields.a4.value,
			a5: template.fields.a5.value,
			a6: template.fields.a6.value,
			a7: template.fields.a7.value,

			r1: template.r1.get(),
			r2: template.r2.get(),
			r3: template.r3.get(),
			r4: template.r4.get()
		}, (error, myEvaluationId) => {
			if (error) alert('Vul de beoordelingen in ("goed", "zeer goed", enz.)')
			else FlowRouter.go("/success/:myEvaluationId", {myEvaluationId})
		})
	}
})