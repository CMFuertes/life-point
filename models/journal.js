module.exports = function(sequelize, DataTypes) {
  const Journal = sequelize.define("Journal", {
    entry: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE }
  });
  Journal.associate = function(models) {
    Journal.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Journal;
};
