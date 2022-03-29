


database={
    AVT:{uname:"ABC",address:"kollam",city:"kakkanad",state:"Ernakulam",zip:123, phone:569564654, website:"dghdfj", email:" jhfhdh" },
    DEF:{uname:"DEF",address:"thrisur",city:"kakkanad",state:"Ernakulam",zip:123, phone:569564654, website:"dghdfj", email:" jhfhdh" },
    GHI:{uname:"GHI",address:"kochi",city:"kakkanad",state:"Ernakulam",zip:123, phone:569564654, website:"dghdfj", email:" jhfhdh" },
  
  }

  const register=(uname,address,city, state,zip, phone,website, email )=>{

    let db=database
  
   
      db[uname]={
        uname,
     address,
     city,
     state,
     zip,
     phone,
     website,
     email
      }
      console.log(db)
      return {
        statusCode: 200,
        status: true,
        message: "Successfully registered!!!!"

      }
    }
  
    module.exports = {
        register
    
      }