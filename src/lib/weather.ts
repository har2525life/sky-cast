export function kelvinToCelsius(kelvin: number): string {
  const celsius = Math.round(kelvin - 273.15);
  return celsius.toString();
}
