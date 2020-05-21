'use strict';
model = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    usuario: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};

export default model;