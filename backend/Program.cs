/*
  Later, this file would:
  - expose endpoints like /api/space/apod
  - call NASA / ESA services
  - connect to your database
*/



var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

builder.Services.AddScoped<NasaService>();

app.MapGet("/health", () => new
{
    ok = true,
    service = "nier-automata-sat-api"
});

app.Run();
