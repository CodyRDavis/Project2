module.exports = function(sequelize, DataTypes) {
  const Serivce = sequelize.define("Service", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING
    },
    description: {
      Type: DataTypes.STRING
    },
    price: {
      Type: DataTypes.DOUBLE
    },
    dateDue: {
      Type: DataTypes.DATE
    },
    datePerformed: {
      Type: DataTypes.DATE
    }
  });
    
  Service.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Service.hasMany(models.exam, {
      onDelete: "cascade"
    });
  };

  return Service;
};
  