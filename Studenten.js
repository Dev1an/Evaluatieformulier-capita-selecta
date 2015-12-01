Studenten = new Mongo.Collection('studenten')

if (Meteor.isClient) {
	Meteor.subscribe('studenten')
} else {
	Meteor.publish('studenten', function() {
		return Studenten.find()
	})
}