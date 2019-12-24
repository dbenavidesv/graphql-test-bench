module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      upvotes: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      downvotes: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      underscored: true
    }
  );

  Post.associate = models => {
    Post.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Post;
};
