var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient<NasaService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("frontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://127.0.0.1:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("frontend");

app.MapGet("/health", () => new
{
    ok = true,
    service = "nier-automata-sat-api"
});

app.MapGet("/api/nasa/apod", async (NasaService nasaService) =>
{
    string response = await nasaService.GetApod();
    return Results.Content(response, "application/json");
});

app.Run();
