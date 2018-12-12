module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: False,
      validate: {
        len: [1]
      }
    },
    species: {},
    breed: {},
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    chipNumber: {},
    alergies: {},
    notes: {}


  });

  Pet.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Pet.hasMany(models.exam, {
      onDelete: "cascade"
    });
  };

  return Pet;
};
