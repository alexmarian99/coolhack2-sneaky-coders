namespace Client.Services
{
    public class CurrentUser
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<string> Roles { get; set; }
        public bool IsLoggedIn { get; set; } = false;
    }
}
