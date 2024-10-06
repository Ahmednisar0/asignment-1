import Link from 'next/link';
import { countries } from './data/countries';

export default function CountryList() {
  return (<div>
  <div>
    <title>Dynamic routes</title>
  </div>
    <div className='text-center font-medium text-2xl py-2 '>
      <h1 className='text-center font-bold py-6  text-5xl bg-slate-400'>Country List</h1>
      <ul  className="justify-items-end">
        {countries.map((country) => (
          <li key={country.name} className="inline-block px-4 py-2 mt-5 ml-5  bg-blue-500 text-white font-bold rounded hover:bg-blue-700 cursor-pointer">
            <Link href={`/country/${country.name.toLowerCase()}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
