using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

public class NasaService
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _configuration;

    public NasaService(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient =  httpClient; // Corregido: Abrimos una instancia en program, que posteriormente es utilizada aquí
        _configuration = configuration;
    }

    public string GetApiKey()
    {
        string apiKey = _configuration["ExternalApis:Nasa:ApiKey"] // Get de la apikey guardada en el config
            ?? throw new Exception("La API Key de NASA no está configurada."); // checker si !key

        return apiKey; // Retornamos la apikey
    }

    public async Task<string> GetApod()
    {
        string url = $"https://api.nasa.gov/planetary/apod?api_key={GetApiKey()}"; // Llamamos a la func que retorna la api

        string response = await _httpClient.GetStringAsync(url); // Tomamos el response

        return response; // Devolvemos *** Caso sin normalizar a JSON
    }
}