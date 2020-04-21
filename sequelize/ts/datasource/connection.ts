const { Sequelize } = require("sequelize");


export class ConnectionToDb {
  private static instance: ConnectionToDb;
  sequelize:any;
  constructor() {}
  static getInstance() {
    if(!ConnectionToDb.instance) {
      ConnectionToDb.instance = new ConnectionToDb();
      ConnectionToDb.instance.connect();
    }
    return ConnectionToDb.instance;
  }
  
  private connect() {
    this.sequelize = new Sequelize("sequelize_db", "postgres", "admin", {
      host: "localhost",
      dialect: "postgres",
    });
  }
  async checkConnectiion() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  closeConnection() {
    this.sequelize.close().then((res: any) => {
      console.log("Connection Closed");
    });
  }
}





