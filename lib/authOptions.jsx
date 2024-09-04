import GithubProvider from "next-auth/providers/github"

import GoogleProvider from "next-auth/providers/google"

import connectDb from "./connectDb"

import User from "@/models/user"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      await connectDb();

      // Check if user already exists in the database
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        // If not, create a new user
        const newUser = new User({
          email: user.email,
          // Add other fields you might need
        });
        await newUser.save();
      }

      return true;
    },

    async session({ session, user }) {
      await connectDb();
      const existingUser = await User.findOne({ email: session.user.email });
      session.user.id = existingUser._id;
      return session;
    },

    async jwt({ token, user }) {
      await connectDb();
      if (user) {
        token.id = user._id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const newCategory = await Category.create({ name: 'Technology', description: 'All things tech' });

export const newTag = await Tag.create({ name: 'JavaScript' });

export const newArticle = await createArticle({
  title: 'Understanding JavaScript Closures',
  content: 'Closures are a fundamental concept...',
  authorId: user._id,
  categoryId: category._id,
  tagIds: [tag._id],
});

export const newComment = await addCommentToArticle(article._id, user._id, 'Great explanation!');

export const allArticles = await getAllArticles();

