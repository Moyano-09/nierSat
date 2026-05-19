using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[ApiController]
[Route("api/nasa")]
public class NasaController : ControllerBase
{
    private readonly NasaService _nasaService;

    public NasaController(NasaService nasaService)
    {
        _nasaService = nasaService;
    }

    [HttpGet("apod")]
    public async Task<IActionResult> GetApod()
    {
        string response = await _nasaService.GetApod();

        return Ok(response);
    }
}