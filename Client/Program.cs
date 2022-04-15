using Client.Data;
using Client.Services.GraphQL;
using Client.Services.Localization;
using GraphQL;
using System.Net;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddControllers();
builder.Services.AddServerSideBlazor();
builder.Services.AddSingleton<WeatherForecastService>();
builder.Services.AddLocalization(opts => { opts.ResourcesPath = "Resources"; });
builder.Services.AddScoped<GraphQLClient>(_ => new GraphQLClient("https://graphqlcoolhack.brolake.ro/v1/graphql", headers =>
{
    headers[HttpRequestHeader.ContentType] = "application/json";
    headers["x-hasura-admin-secret"] = Environment.GetEnvironmentVariable("HasuraSecret");
}));
builder.Services.AddScoped<Mutations>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseRequestLocalization(Localization.options);
app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");
app.MapControllers();

app.Run();
