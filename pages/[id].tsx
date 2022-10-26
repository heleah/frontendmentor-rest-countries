import Header from "../src/components/Header";
import Button from "react-bootstrap/Button";
import { Country, Border } from "../src/utils/types";
import CountryDetails from "../src/components/CountryDetails";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=cca3");
  const data = await res.json();

  const paths = data.map((e: Country) => ({
    params: { id: e.cca3 },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${params.id}?fields=cca3,name,flags,population,region,capital,subregion,tld,currencies,borders,languages`
    );
    const country = await res.json();

    const borders = await Promise.all(
      country.borders?.map(async (border: string) => {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${border}?fields=name,cca3`
        );
        return await res.json();
      })
    );

    return {
      props: { country, borders },
    };
  } catch (e) {
    console.log(e);
  }
}

interface DetailsPageProps {
  country: Country;
  borders: Border[];
}

const DetailsPage = ({ country, borders }: DetailsPageProps) => {
  const { push, isFallback } = useRouter();

  return (
    <>
      <Header />
      <main className="d-flex flex-column p-3" style={{ width: "90vw" }}>
        <Button
          variant="light"
          className="my-4 shadow"
          style={{ width: "fit-content" }}
          onClick={() => push("/")}
        >
          Back
        </Button>
        {isFallback ? (
          <p>Loading...</p>
        ) : (
          <CountryDetails country={country} borders={borders} />
        )}
      </main>
    </>
  );
};

export default DetailsPage;
