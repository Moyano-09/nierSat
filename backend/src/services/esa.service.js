/*
  This service shows where ESA-specific integration code would go.

  The pattern is:
  1. Fetch from ESA or another provider.
  2. Normalize fields into your own shape.
  3. Return that normalized result to the controller.

  The frontend should ideally not need to know the provider's original schema.
*/

export async function getEsaDigest() {
  return {
    source: "ESA",
    module: "Mission Digest",
    status: "placeholder",
    nextStep:
      "Replace this object with a real ESA content fetch and map it to your preferred response format."
  };
}
