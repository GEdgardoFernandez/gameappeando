const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.STRING,
    },
    background_image: {
      type: DataTypes.STRING,
    },
    genres: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    released: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    create: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};
