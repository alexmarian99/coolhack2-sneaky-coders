namespace Client.Services
{
    public class ChatService
    {
        public List<Message> Room1 { get; set; } = new List<Message>();
        public Action OnMessage { get; set; }

        public void PostMessage(Message arg)
        {
            Room1.Add(arg);
            OnMessage?.Invoke();
        }
    }

    public class Message
    {
        public int AuthorId { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Text { get; set; } = string.Empty;
        public string TranslatedMessage { get; set; } = string.Empty;

        public string TranslatedCulture { get; set; } = string.Empty;
    }
}
