const sequelize = require("./db");
const Usuario = require("./user");

async function connection(){
    try {
        await sequelize.authenticate()
        console.log("Conectando no banco de dados")

       // await Usuario.sync()
    //    const newUser = Usuario.create({
    //     name:"Vitor",
    //     email:"vitorteste@gmail.com",
    //     senha:"12345ss6s"
    //    })
    //    console.log("Novo usuário cadastrado: ", (await newUser).toJSON())
    const findUsers = await Usuario.findAll()
    console.log(`Lista de usuários: ${findUsers.map((e)=>(e.toJSON()))}`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }finally{
        sequelize.close()
    }
}

connection()