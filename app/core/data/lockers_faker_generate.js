module.exports = function()
{
	var faker = require("faker");
	var _ = require("lodash");
	return {
		"lockers": _.times(500, function(n) {
			return {
				id: n,
        location: faker.random.number(350)
			}
		})
	}
}
