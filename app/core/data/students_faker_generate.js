module.exports = function()
{
	var faker = require("faker");
	var _ = require("lodash");
	var advArr = [101, 102, 103, 104, 105, 106, 201, 202, 203, 204, 205, 206, 301, 302, 303, 304, 305, 306, 401, 402, 403, 404, 405, 406, 701, 702, 801, 802];
	return {
		"students":_.times(500, function(n) {
			findgrade = function(adv) {
				switch(Math.trunc(adv/100)) {
					case 1:
						return 12;
						break;
					case 2:
						return 11;
						break;
					case 3:
						return 10;
						break;
					case 4:
						return 9;
						break;
					default:
						return Math.trunc(adv/100);
				}
			};
			this.advisory = faker.random.arrayElement(advArr);
			this.grade = findgrade(this.advisory);
			return {
				id: n,
				firstname:  faker.name.firstName(),
				lastname: faker.name.lastName(),
				advisory: this.advisory,
				grade:  this.grade
			}
		})
	}
}
