module.exports =
{
  "development": {
    "username"  : process.env.DB_USER_LOCAL,
    "password"  : process.env.DB_PASS_LOCAL,
    "database"  : "project_db",
    "host"      : process.env.DB_HOST_LOCAL,
    "dialect"   : "mysql",
    "operatorsAliases": 0
  },

  "production": {
    "username" : "root",
    "password" : null,
    "database" : "database_production",
    "host"     : "127.0.0.1",
    "dialect"  : "mysql",
    "operatorsAliases": false
  }
};