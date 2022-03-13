const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into admin_users(name, email, password) values(?,?,?)`,
            [
                data.name,
                data.email,
                data.password
            ],
            (error, results, fields) => {
                if (error){
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    
    getUsers: callBack => {
        pool.query(
            `select userid, name, email from admin_users`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getUserByUserId: (id, callBack) => {
        pool.query(
            `select userid, name, email from admin_users where email= ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    getUserdetailsByUserEmail: (email, callBack) => {
        pool.query(
            `select userid, name, email from admin_users where email= ?`,
            [email],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    updateUser: (data, callBack) => {
        pool.query(
            `update admin_users set name=?, email=?, password=? where userid=?`,
            [
                data.name,
                data.email,
                data.password,
                data.userid
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                console.log("Data ===>",data);
                return callBack(null, results);
            }
        );
    },

    deleteUser: (data, callBack) => {
        pool.query(
            `delete from admin_users where userid=?`,
            [
                data.userid
            ],
            (error, results, fields) => {
                console.log("delete from admin_users where userid = ",data.userid);
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `select * from admin_users where email= ?`,
            [email],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};