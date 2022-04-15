using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers
{
    [Route("/[controller]/{language}")]
    [ApiController]
    public class Culture : ControllerBase
    {
        public ActionResult SetCulture(string language)
        {
            Response.Cookies.Append(
                CookieRequestCultureProvider.DefaultCookieName,
                CookieRequestCultureProvider.MakeCookieValue(
                    new RequestCulture(language)));
            return Redirect("/");
        }
    }
}
