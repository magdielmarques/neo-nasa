export async function getNeos() {
  const response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
  const result = await response.json()
  return result["near_earth_objects"] //os colchetes sao mais felixiveis, e e uma forma de obter uma propriedade especifica do retorno da requisicao. Poderia obter utilizando o .
}