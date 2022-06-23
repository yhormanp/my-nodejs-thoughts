const { gql, ApolloServer } = require('apollo-server');
const { dbConnect } = require('../lib/mongoose');
const ArticlesService = require('../services/articles');
const AuthorsService = require('../services/authors');

const articlesService = new ArticlesService();
const authorsService = new AuthorsService();

const typeDefs = gql`
  type Author {
    _id: ID!
    name: String
    articles: [String]
  }

  type Article {
    _id: ID!
    title: String!
    author: Author!
    modifiedAt: String!
    publishedAt: String!
    url: String
    Keywords: [String]
    readMins: Int
    source: String!
  }

  type Query {
    getAllArticles(articleId: String): [Article]
    getAllAuthors(authorId: String): [Author]
  }
`;

const resolvers = {
  Query: {
    getAllArticles: async (root, args) => {
      const allArticles = await articlesService.getArticles();
      if (!allArticles) return null;

      if (args.articleId) {
        return allArticles.filter((article) => article._id === args.articleId);
      } else {
        return allArticles;
      }
    },

    getAllAuthors: async (root, args) => {
        const allAuthors = await authorsService.getAuthors();
        if (!allAuthors) return null;

        if(args.authorId){
            return allAuthors.filter((author) => author._id === args.authorId);
        } else {
            return allAuthors;
        }
    }
  },
  Article: {
    author: async (root) => {
      const authorData = await authorsService.getAuthorById(root.author);
      if (authorData.length < 1) return null;

      return {
        _id: authorData[0]._id,
        name: authorData[0].name,
        articles: authorData[0].articles,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  dbConnect().then(() => {
    console.log(`Instafeed graphql server is ready at ${url}`);
  });
});
