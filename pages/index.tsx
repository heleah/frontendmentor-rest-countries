import type { NextPage } from "next";
import Head from "next/head";
import ContinentDropdown from "../src/components/ContinentDropdown";
import CountryCard from "../src/components/CountryCard";
import Header from "../src/components/Header";
import SearchInput from "../src/components/SearchInput";

const Home: NextPage = () => {
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
        <CountryCard />
      </main>
    </div>
  );
};

export default Home;
