import {
  useParams,
  useRouteLoaderData,
  Link
} from "react-router-dom";

export default function CountryDetails() {
  const { countryName } = useParams();
  const countries = useRouteLoaderData("root");

  const country = countries.find(
    c => c.name.common.toLowerCase() === countryName
  );

  if (!country) {
    return <h2>País no encontrado</h2>;
  }

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const borders = country.borders || [];

  return (
    <>
      <img src={country.flags.svg} width="200" />
      <h1>{country.name.official}</h1>

      <ul>
        <li><strong>Capital:</strong> {country.capital}</li>
        <li>
          <strong>Población:</strong>{" "}
          {country.population.toLocaleString()}
        </li>
        <li>
          <strong>Región:</strong>{" "}
          {country.region} ({country.subregion})
        </li>
        <li>
          <strong>Idiomas:</strong> {languages}
        </li>
      </ul>

      <h3>Países Fronterizos</h3>
      <div className="borders">
        {borders.length === 0 && <p>No tiene fronteras</p>}
        {borders.map(code => {
          const borderCountry = countries.find(
            c => c.cca3 === code
          );

          return (
            borderCountry && (
              <Link
                key={code}
                to={`/country/${borderCountry.name.common.toLowerCase()}`}
              >
                {borderCountry.name.common}
              </Link>
            )
          );
        })}
      </div>
    </>
  );
}