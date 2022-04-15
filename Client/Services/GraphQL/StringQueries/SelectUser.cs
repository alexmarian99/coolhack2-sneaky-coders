namespace Client.Services.GraphQL.StringQueries
{
    public class SelectUser
    {
    }

    public class SelectUserWhere
    {
        public static string Query = @"
query MyQuery($_eq2: String = "", $_eq3: String = "") {
  users(where: {email: {_eq: $_eq2}, password: {_eq: $_eq3}}) {
    id
    first_name
    last_name
  }
}
";
    }
}
