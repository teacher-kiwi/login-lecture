"use strict";

class UserStorage {
    static #users = {
        id: ["id1", "id2", "id3"],
        psword: ["1", "2", "3"],
        name: ["name1", "name2", "name3"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;