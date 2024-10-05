// app/country/[country_name]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { countries } from '@/app/data/countries';

export default function CountryDetails({ params }: { params: { country_name: string } }) {
  const country = countries.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );

  if (!country) {
    notFound();
  }

  return (
    <div>
<Link href="http://localhost:3000/">
  <div className="inline-block px-4 py-2 mt-5 ml-5 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 cursor-pointer">
    Go to Home
  </div>
</Link>



      
    <div className='text-2xl text-center mt-20 font-bold'>
      <h1>CountryName: {country.name}</h1>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Capital: {country.capital}</p>
    </div>
    </div>
  );
}
