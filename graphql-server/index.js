import { ApolloServer, gql } from "apollo-server";
import { v1 as uuid } from "uuid";
import axios from "axios";

// const persons = [
//   {
//     name: "Mide",
//     phone: "604-123456",
//     street: "Callen main",
//     city: "Medellin",
//     id: "12340987",
//   },
//   {
//     name: "Yourlself",
//     phone: "044-987654",
//     street: "Avenida fullstack",
//     city: "Barcelona",
//     id: "98760987",
//   },
//   {
//     name: "Easy",
//     phone: "044-345678",
//     street: "Pasaje Testing",
//     city: "Ibiza",
//     id: "98546712",
//   },
//   {
//     name: "Lisseth",
//     street: "Avenida UI",
//     city: "Robledo",
//     id: "98545937",
//   },
// ];

/*  here address and check are computed values, added to the typeDefs that are not in the object
but these values can be found how to be resolved in the resolver. where an entity Person with these
details of address and check will be defined. 
*/
const typeDefs = gql`
  enum YesNo {
    YES
    NO
  }

  type Address {
    street: String!
    city: String!
  }
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
    allPersons_filter(phone: YesNo): [Person]!
    findPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String!
      street: String!
      city: String!
    ): Person

    editNumber(name: String!, phone: String!): Person
  }
`;

const resolvers = {
  Query: {
    personCount: async () => {
      const { data: personsFromApi } = await axios.get(
        "http://localhost:3000/persons"
      );
      console.log(personsFromApi);
      return personsFromApi.length;
    },
    allPersons: async () => {
      const { data: personsFromApi } = await axios.get(
        "http://localhost:3000/persons"
      );
      console.log(personsFromApi);
      return personsFromApi;
    },
    allPersons_filter: async (root, args) => {
      const { data: personsFromApi } = await axios.get(
        "http://localhost:3000/persons"
      );
      console.log(personsFromApi);
      if (!args.phone) return personsFromApi;

      const byPhone = (person) =>
        args.phone === "YES" ? person.phone : !person.phone;

      return personsFromApi.filter(byPhone);
    },

    findPerson: (root, args) => {
      const { name } = args;
      return persons.find(
        (person) => person.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );
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

    editNumber: (root, args) => {
      const personIndex = persons.findIndex((p) => p.name === args.name);
      if (personIndex === -1) return null;

      const person = persons[personIndex];
      const udpatedPerson = { ...person, phone: args.phone };
      persons[personIndex] = udpatedPerson;

      return udpatedPerson;
    },
  },
  Person: {
    address_b: (root) => {
      return {
        street: root.street,
        city: root.street,
      };
    },
    address_a: (root) => `${root.street}, ${root.city}`,
    check: () => "midu",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
