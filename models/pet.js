module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
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
    alergies: {type: DataTypes.STRING},
    notes: {type: DataTypes.STRING}


  });

  /* Pet.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Pet.hasMany(models.exam, {
      onDelete: "cascade"
    });
  }; */

  return Pet;
};
