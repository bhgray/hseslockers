module.exports = function()
{
	var faker = require("faker");
	var _ = require("lodash");
	return {
		"locker-assign": _.times(500, function(n) {
			return {
				id: n,
				lockerId: n,
				studentId:  n
			}
		})
	}
}
