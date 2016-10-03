module.exports = function()
{
	var faker = require("faker");
	var _ = require("lodash");
	return {
		people: _.times(1000, function(n) {
			return {
				id: n,
        lastname: faker.name.lastName(),
				firstname: faker.name.firstName()
			}
		})
	}
}
