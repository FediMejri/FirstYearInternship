const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');
const mongoose = require('mongoose');

AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
})

const ADMIN = {
    email : 'admin@gmail.com',
    password: 'admin'
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
    cookieName: 'admin-bro',
    cookiePassword: 'admin-bro',
    authenticate: async(email,password)=>{
        if (email=== ADMIN.email && password === ADMIN.password){
            return ADMIN;
        }
        return null ;
    }
})

module.exports=router;