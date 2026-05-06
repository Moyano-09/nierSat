import { getApodData } from "../services/nasa.service.js";
import { getEsaDigest } from "../services/esa.service.js";

/*
  Controllers are the middle layer between routes and services.

  Good controller responsibilities:
  - call the correct service
  - choose the HTTP status code
  - format the final response

  Things controllers should avoid:
  - large fetch logic
  - large SQL logic
  - unrelated transformation utilities
*/

export async function getApodPlaceholder(_request, response) {
  const data = await getApodData();
  response.json(data);
}

export async function getMissionDigestPlaceholder(_request, response) {
  const data = await getEsaDigest();
  response.json(data);
}
