const bcrypt = require("bcrypt-nodejs");
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true,
      }
    },
    is_vet: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  User.prototype.validPassword = function(password){
    
    return bcrypt.compareSync(password, this.password);
  };
  User.hook("beforeCreate", function(user){
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(12), null);
  });

  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    
    User.hasMany(models.Pet, {
      foreignKey: "owner_id",
      onDelete: "cascade"
    });
  };

  return User;
};