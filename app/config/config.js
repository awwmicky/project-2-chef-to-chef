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
    "use_env_variable": "JAWSDB_URL",
    "username" : process.env.DB_USER_LIVE,
    "password" : process.env.DB_PASS_LIVE,
    "database" : process.env.DB_NAME_LIVE,
    "host"     : process.env.DB_HOST_LIVE,
    "dialect"  : "mysql",
    "operatorsAliases": 0
  }
};