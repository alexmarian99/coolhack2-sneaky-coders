using System.Globalization;
using Microsoft.AspNetCore.Localization;

namespace Client.Services.Localization
{
    public static class Localization
    {
        private static List<CultureInfo> supportedCultures = new List<CultureInfo>
        {
            new CultureInfo("en"),
            new CultureInfo("ro"),
            new CultureInfo("uk")
        };

        public static RequestLocalizationOptions options = new RequestLocalizationOptions
        {
            DefaultRequestCulture = new RequestCulture("en"),
            SupportedCultures = supportedCultures,
            SupportedUICultures = supportedCultures
        };
    }
}
