import { gql } from "apollo-server-core";

export const TypeDefs = gql`
    # Users

    type User {
        id: String!
        name: String!
        avatar: String
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
        id: String!
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
        createUser(id: String, name: String, avatar: String, active: Boolean): User!
        editUser(id: String, name: String, avatar: String, active: Boolean): User!
        deleteUser(id: String): User
        createTournament(id: String, name: String, private: Boolean, password: String, playStyle: String, glitchless: Boolean, host: String): Tournament!
        editTournament(id: String, password: String, playStyle: String, glitchless: Boolean, host: String, participant: String, spectator: String): Tournament!
        deleteTournament(password: String): Tournament
    }
`;
