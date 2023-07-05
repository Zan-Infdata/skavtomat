const mysql = require('mysql2/promise');

class Db {

    static async query(sql, params) {


      const connection = await mysql.createConnection(this.getConnectionConfig());
      let response = {};
  
      try{
        
        [response.DATA,] = await connection.execute(sql, params);
        response.CODE = 200;
  
      }
      catch (err) {
        
        response.CODE = 500
        response.DATA = err
      }
  
      return response;
    }
  
  
    static prepareLikeParam(param){
      return "%" + param + "%";
    }


    static getConnectionConfig(){
        var config = {
            "host": process.env.DB_HOST,
            "user": process.env.DB_USER,
            "password": process.env.DB_PWD,
            "database": process.env.DB_DATABASE,
            "port": process.env.DB_PORT,
            "namedPlaceholders" : true

        };
        return config;
    }
  
  
}


class MdVod {
    static table = "md_vod";
    static id = "id";
    static name = "name";
    static credit = "credit";


    static async getVodByName(vod){

        let params = {};


        let qry = "";

        qry += "  SELECT ";
        qry += "  "+ MdVod.id +" ";
        qry += " ,"+ MdVod.name +" ";
        qry += " ,"+ MdVod.credit +" ";
      
        qry += "  FROM " + MdVod.table + " ";
    
        qry += "  WHERE " + MdVod.name +" = :n ";

        params["n"] = vod;

        const out = await Db.query(qry, params);
        return out;

    }

    static async setVodByName(vod, credit){

        let params = {};


        let qry = ""

        qry += " UPDATE ";
        qry += " "  + MdVod.table + "  ";
    
        qry += " SET ";
        qry += "  " + MdVod.credit + " = :c ";
        
        qry += " WHERE ";
        qry += " " + MdVod.name + " = :n ";

        params["c"] = credit;
        params["n"] = vod;

        const out = await Db.query(qry, params);
        return out;

    }


    static async getAll(){

        let params = {};


        let qry = "";

        qry += "  SELECT ";
        qry += "  "+ MdVod.id +" ";
        qry += " ,"+ MdVod.name +" ";
        qry += " ,"+ MdVod.credit +" ";
      
        qry += "  FROM " + MdVod.table + " ";

        const out = await Db.query(qry, params);
        return out;

    }


}

module.exports = {
    Db,
    MdVod
}