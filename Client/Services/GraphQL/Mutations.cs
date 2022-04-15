using Client.Services.GraphQL.StringQueries;
using GraphQL;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Client.Services.GraphQL
{
    public class Mutations
    {
        private readonly GraphQLClient _graphql;

        public Mutations([FromServices] GraphQLClient graphql)
        {
            _graphql = graphql;
        }

        public InsertUserResult? RunInsertUser(InsertUserArgs args)
        {
            args.password = SHAClass.ComputeSha256Hash(args.password);
            var result = _graphql.Query(InsertUser.Query, args);
            dynamic response = JsonConvert.DeserializeObject(result.Raw);
            if (!response.data.insert_users.returning[0])
                return null;
            return response.data.insert_users.returning[0] as InsertUserResult;
        }
    }
}
