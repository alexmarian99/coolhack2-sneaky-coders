using Client.Services.GraphQL.StringQueries;
using GraphQL;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Client.Services.GraphQL
{
    public class Queries
    {
        private readonly GraphQLClient _graphql;

        public Queries([FromServices] GraphQLClient graphql)
        {
            _graphql = graphql;
        }

        public SelectUserWhereResult? RunSelectUserWhere(SelectUserWhereArgs args)
        {
            args.password = SHAClass.ComputeSha256Hash(args.password);
            var result = _graphql.Query(SelectUserWhere.Query, args);
            dynamic response = JsonConvert.DeserializeObject(result.Raw);
            if (response.data.users.Count == 0)
                return null;
            var roleLists = new List<string>();
            foreach (var role in response.data.users[0].roles)
                roleLists.Add(role.role_name);
            return new SelectUserWhereResult
            {
                id = response.data.users[0].id,
                first_name = response.data.users[0].first_name,
                last_name = response.data.users[0].last_name,
                roles = roleLists
            };
        }
    }
}
