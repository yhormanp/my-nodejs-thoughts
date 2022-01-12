to run basic server of graphql just run the following command
node index.js

to run the rest api server using json-server just run the following command
npm run json-server

# steps creating this project of a graphql server

1. a package json was creating using the command npm init -y
2. the following packages were installed to create the main structur of graphql
   npm apollo-server graphql
3. an index.js file is created
4. the basic structure of data is created using a const persons

const persons = [
{
name: "Mide",
phone: "604-123456",
street: "Callen main",
city: "Medellin",
id: "12340987",
},
{
name: "Yourlself",
phone: "044-987654",
street: "Avenida fullstack",
city: "Barcelona",
id: "98760987",
},
{
name: "Easy",
phone: "044-345678",
street: "Pasaje Testing",
city: "Ibiza",
id: "98546712",
},
{
name: "Lisseth",
street: "Avenida UI",
city: "Robledo",
id: "98545937",
},
];

5. initially a typeDefs will be created to specify the query to be created and the entity with the info . the entity Person is created and 2 queries are created personCount and allPersons that returns and array of Person
   import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`

type Person {
name: String!
phone: String
street: String!
city: String!
id: ID!
address_b: Address!
address_a: String!
check: String!
}
type Query {
personCount: Int!
allPersons: [Person]!
}
`

6. create the resolver to define or specify the logic to be executed with every query

const resolvers = {
Query: {
    personCount: () => {
     return persons.length;
    },
    allPersons: async () => {
    return persons;
    },
}


7. create an Apollo server with the typeDefs and resolvers created. Additionally start the server

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

8. Now with the grapqhl explorere that can be found in the http://localhost:[port specified when starts], try to execute this . It will return name, street and id of every record.

query  allPersons {
    name
    street
    id
  }

or

Query {
  personCount
}


It will return the quantity of persons found.

# Mutations

1. to create any mutation in the graphl server, in the typeDefs, mutation must be define with the descriptive name related. In thi case, a mutation to add a person and it receives name, phone, street and city. It returns a Person

type Mutation {
    addPerson(
      name: String!
      phone: String!
      street: String!
      city: String!
    ): Person

  }

  2. In the resolvers, additional to the  Query created previously, need to create a Mutation section to define the logic in this case for addPerson

const resolvers = {
  Query: {
    personCount: () => {
      return persons.length;
    },
    allPersons: async () => {
      const { data: personsFromApi } = await axios.get(
        "http://localhost:3000/persons"
      );
      console.log(personsFromApi);
      return personsFromApi;
    },
  },

  Mutation: {
    addPerson: (root, args) => {
      if (person.find((p) => p.name === args.name)) {
        throw new Error("Name must be unique", {
          invalidArgs: args.name,
        });
      }
      //   const {name, phone, street, city} =args
      const person = { ...args, id: uuid() };
      persons.push(person);
      return person;
    },
  },

  3. Now with the grapqhl explorere that can be found in the http://localhost:[port specified when starts], try to execute this . It will add a Person and returns name and phone of the person created.

  Mutation addPerson(name: “james”, phone: “034-123-456”, street: “Bravo”, city: “Medellin”) {
   name
   phone
 }
}

