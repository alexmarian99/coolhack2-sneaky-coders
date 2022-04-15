namespace Client.Services.GraphQL.StringQueries
{
    public static class InsertUser
    {
        public static string Query = @"
        mutation AddUser($first_name: String, $last_name: String, $email: String, $password: String, $phone_number: String) {
            insert_users(objects: {first_name: $first_name, last_name: $last_name, email: $email, password: $password, phone_number: $phone_number}) {
            returning {
                email
            }
            }
        }
        ";
    }

    public class InsertUserArgs
    {
        public string first_name;
        public string last_name;
        public string email;
        public string password;
        public string phone_number;
    }

    public class InsertUserResult
    {
        public string email;
    }
}
