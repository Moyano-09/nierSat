/*
  Services are where third-party integrations usually live.

  When you wire the real NASA API later, this is where fetch logic belongs.
  That way the rest of your app does not care about NASA's raw response shape.
*/

export async function getApodData() {
  return {
    source: "NASA",
    module: "APOD",
    status: "placeholder",
    nextStep:
      "Replace this object with a real fetch to the Astronomy Picture of the Day endpoint."
  };
}
