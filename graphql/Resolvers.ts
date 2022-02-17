export const Resolvers = {
    Query: {
        getUser(id: String) {},
        getTournament(password: String) {},
        getAllTournaments() {}
    },
    Mutation: {
        createUser(_: any, args: Object) {},
        editUser(_: any, args: Object) {},
        deleteUser(_: any, args: Object) {},
        createTournament(_: any, args: Object) {},
        editTournament(_: any, args: Object) {},
        deleteTournament(_: any, args: Object) {}
    }
};
