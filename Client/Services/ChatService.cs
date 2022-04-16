using GoogleTranslateFreeApi;

namespace Client.Services
{
    public class ChatService
    {
        private GoogleTranslator translator = new GoogleTranslator();
        public List<Message> Room1 { get; set; } = new List<Message>();
        public Action OnMessage { get; set; }

        public void PostMessage(Message arg)
        {
            Room1.Add(arg);
            OnMessage?.Invoke();
        }

        public async Task TranslateUserMessagesToAsync(int userId, string culture)
        {
            Language from = Language.Auto;
            Language to;
            if (culture == "en")
                to = Language.English;
            else if (culture == "ro")
                to = Language.Romanian;
            else
                to = Language.Ukrainian;
            foreach (var message in Room1)
            {
                if (message.AuthorId != userId)
                {
                    message.TranslatedMessage = (await translator.TranslateLiteAsync(message.Text, from, to)).MergedTranslation;
                    message.TranslatedCulture = culture;
                    OnMessage?.Invoke();
                }
            }
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
