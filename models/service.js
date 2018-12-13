module.exports = function(sequelize, DataTypes) {
  const Service = sequelize.define("Service", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DOUBLE
    },
    dateDue: {
      type: DataTypes.DATE
    },
    datePerformed: {
      type: DataTypes.DATE
    }
  });

  //finish association
  //Pet.belongsTo(models.User);
  return Service;
};
  
