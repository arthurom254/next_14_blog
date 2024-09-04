import Article from '@/models/article';

import Comment from '@/models/comments';
export const createArticle = async ({ title, content, authorId, categoryId, tagIds }) => {
  const article = new Article({
    title,
    content,
    author: authorId,
    category: categoryId,
    tags: tagIds, // This should be an array of tag ObjectIds
  });
  await article.save();
  return article;
};


export const getAllArticles = async () => {
  const articles = await Article.find()
    .populate('author', 'name email')
    .populate('category', 'name')
    .populate('tags', 'name')
    .exec();
  return articles;
};


export const addCommentToArticle = async (articleId, userId, content) => {
  const comment = new Comment({
    content,
    author: userId,
    article: articleId,
  });
  await comment.save();
  return comment;
};

export const getCommentsForArticle = async (articleId) => {
  const comments = await Comment.find({ article: articleId })
    .populate('author', 'name email')
    .exec();
  return comments;
};


export const getArticlesByCategory = async (categoryId) => {
  const articles = await Article.find({ category: categoryId })
    .populate('author', 'name email')
    .populate('tags', 'name')
    .exec();
  return articles;
};

export const getArticlesByTag = async (tagId) => {
  const articles = await Article.find({ tags: tagId })
    .populate('author', 'name email')
    .populate('category', 'name')
    .exec();
  return articles;
};

export const getArticlesByUser = async (userId) => {
  const articles = await Article.find({ author: userId })
    .populate('category', 'name')
    .populate('tags', 'name')
    .exec();
  return articles;
};




