Evaluaties = new Mongo.Collection('evaluaties')

Evaluaties.allow({
	insert(userId, evaluatie) {
		check(evaluatie, {
			a1: String,
			a2: String,
			a3: String,
			a4: String,
			a5: String,
			a6: String,
			a7: String,

			r1: Number,
			r2: Number,
			r3: Number,
			r4: Number,

			name: String,
			familyName: String,
			number: String
		})

		return true
	}
})

if (Meteor.isClient) {
	Meteor.subscribe('evaluaties')
} else {
	Meteor.publish('evaluaties', function() {
		return Evaluaties.find()
	})
}