import { NavLink } from "react-router-dom";

export default function CountryList({ countries }) {
  return (
    <ul className="country-list">
      {countries.map(country => (
        <li key={country.cca3}>
          <NavLink
            to={`/country/${country.name.common.toLowerCase()}`}
          >
            <img src={country.flags.svg} alt="" />
            {country.name.common}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}