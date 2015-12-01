Meteor.startup(function(){
	Evaluaties.before.insert((userId, evaluatie) => {evaluatie.date = new Date})
})
