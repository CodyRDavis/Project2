module.exports = function(sequelize, DataTypes) {
  const Pet = sequelize.define("Pet", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    species: {
      type: DataTypes.STRING
    },
    breed: {type: DataTypes.STRING},
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    chipNumber: {type: DataTypes.STRING},
    allergies: {type: DataTypes.STRING},
    notes: {type: DataTypes.STRING}

  });

  Pet.associate = function(models) {
    Pet.belongsTo(models.User);
  };

  return Pet;
};
