const sequelize = require('./db')
const Usuario = require('./user')

try {
    await sequelize.authenticate()
    console.log("Conectando no banco de dados")

    await Usuario.sync()

    const novoUsuario = await Usuario.create({
        nome: "Douglas",
        email: "douglasexemplo@gmail.com",
        senha: "douginhlas123"
    })
    console.log(`Novo usuário inserido com sucesso ${novoUsuario.toJSON()}`)

    const usuario = Usuario.findAll()
    console.log(`Lista de usuários: ${usuario.map((e)=>{e.toJSON()})}`)
} catch (error) {
    console.log(`Erro ao conectar no banco de dados: ${error}`)
}finally{
    sequelize.close()
}