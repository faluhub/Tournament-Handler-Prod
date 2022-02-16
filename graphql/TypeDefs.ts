import { gql } from "apollo-server-core";

export const TypeDefs = gql`
    # Users

    type User {
        id: String!
        name: String!
        image: String
        active: Boolean!
    }

    type Participant {
        name: String!
        pronouns: String!
        twitch: String!
    }

    type Spectator {
        name: String!
        permission: Int!
    }

    # Tournaments

    type Tournament {
        name: String!
        public: Boolean!
        password: String
        playStyle: String!
        glitchless: Boolean!
        host: Spectator!
        participants: [Participant!]
        spectators: [Spectator!]
    }

    # Query's and Mutations

    type Query {
        getUser(id: String): User
        getTournament(password: String): Tournament
        getAllTournaments: [Tournament!]
    }

    type Mutation {
        createUser(id: String, name: String, active: Boolean): User!
        deleteUser(id: String): User
        createTournament(name: String, private: Boolean, password: String, playStyle: String, glitchless: Boolean, host: String): Tournament!
        deleteTournament(password: String): Tournament
    }
`;
