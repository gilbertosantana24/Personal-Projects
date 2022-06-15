import Book from "../models/Book"

export const resolvers = {
    Query: {
        hello: () => { return "Hello world" },
        greeting: (args) => { return "hello" + args.name },

    },

    Mutations: {
        async createBook(_, { input }) {
            const newBook = new Book(input)
            await newBook.save();
            return newBook
        },

        async updateBook(_, { _id, input }) {
            return await Book.findByIdAndUpdate(_id, input, { new: true })
        }
    }
}