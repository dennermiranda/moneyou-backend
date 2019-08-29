const db			= require('@moneyou/lib/db');
const Project	    = require('@moneyou/models/project');

module.exports = {
	create: async bookData => {
        await db.connect();
		return Project.create(bookData);
	},
	getById: async id => {
		await db.connect();
        return Project.findById(id);
	},
};
