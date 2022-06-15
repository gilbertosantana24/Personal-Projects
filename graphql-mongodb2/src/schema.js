import {makeExecutableSchema} from 'graphql-tool';
import { resolvers } from './resolvers';


const typeDefs = 
`
type Query {
    hello: String
    greeting(name: String) : String
}

type Book {
    _id: ID,
    title: String!,
    author: String!
}

type Mutation {
    createBook(input:Book): Book
    updateBook(_id: ID, input: Book): Book
}

inputBook {
    title: String!,
    author: String!,
    date: String!,
    version: Int
}

`
export default makeExecutableSchema ({
    typeDefs: typeDefs,
    resolver: resolvers
})