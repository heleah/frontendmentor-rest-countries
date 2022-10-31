import { useTheme } from "next-themes";
import Head from "next/head";
import { useState } from "react";
import ContinentDropdown from "../src/components/ContinentDropdown";
import CountryList from "../src/components/CountryList";
import Header from "../src/components/Header";
import SearchInput from "../src/components/SearchInput";
import { Country } from "../src/utils/types";

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=cca3,name,flags,population,region,capital"
    );
    const countries = await res.json();

    return {
      props: {
        countries,
      },
    };
  } catch (e) {
    console.log(e);
  }
}

interface HomeProps {
  countries: Country[];
}

const Home = ({ countries }: HomeProps) => {
  const [shownCountries, setShownCountries] = useState(countries);
  const { theme } = useTheme();

  function searchCountries(str: string) {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(str.toLowerCase())
    );
    setShownCountries(filtered);
  }

  function filterByRegion(region: string) {
    const filtered = countries.filter((country) => country.region === region);
    setShownCountries(filtered);
  }

  const lightOrDark = theme === "light" ? "bg-light" : "bg-dark";

  return (
    <div>
      <Head>
        <title>Countries REST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`d-flex flex-column align-items-center ${lightOrDark}`}
        style={{ height: "100vh" }}
      >
        <Header />
        <section className="d-md-inline-flex align-items-md-center justify-content-md-between px-md-5 search-filter">
          <SearchInput onSearch={searchCountries} />
          <ContinentDropdown onClick={filterByRegion} />
        </section>
        <CountryList countries={shownCountries} />
      </main>
    </div>
  );
};

export default Home;
