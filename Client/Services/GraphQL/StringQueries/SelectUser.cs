namespace Client.Services.GraphQL.StringQueries
{
    public class SelectUser
    {
    }

    public class SelectUserWhere
    {
        public static string Query = @"
            query MyQuery($email: String, $password: String) {
              users(where: {email: {_eq: $email}, password: {_eq: $password}}) {
                id
                first_name
                last_name
                roles {
                  role_name
                }
              }
             users_aggregate(where: {email: {_eq: $email}, password: {_eq: $password}}) {
                aggregate {
                    count
                }
             }
            }
            ";
    }

    public class SelectUserWhereArgs
    {
        public string email { get; set; }
        public string password { get; set; }
    }

    public class SelectUserWhereResult
    {
        public int id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public List<string> roles { get; set; }
    }
}
