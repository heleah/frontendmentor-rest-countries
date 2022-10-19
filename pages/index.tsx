import Head from "next/head";
import ContinentDropdown from "../src/components/ContinentDropdown";
import CountryList from "../src/components/CountryList";
import Header from "../src/components/Header";
import SearchInput from "../src/components/SearchInput";
import { Country } from "../src/utils/types";

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=cioc,name,flags,population,region,capital"
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
  return (
    <div>
      <Head>
        <title>Countries REST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="d-flex flex-column align-items-center bg-light"
        style={{ height: "100vh" }}
      >
        <Header />
        <SearchInput />
        <ContinentDropdown />
        <CountryList countries={countries} />
      </main>
    </div>
  );
};

export default Home;
