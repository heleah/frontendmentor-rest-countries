import Header from "../src/components/Header";
import Button from "react-bootstrap/Button";
import { Country, Border } from "../src/utils/types";
import CountryDetails from "../src/components/CountryDetails";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.com/v2/all?fields=alpha3Code");
  const data = await res.json();

  const paths = data.map((e: Country) => ({
    params: { id: e.alpha3Code },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  try {
    const res = await fetch(
      `https://restcountries.com/v2/alpha/${params.id}?fields=alpha3Code,name,nativeName,flags,population,region,capital,subregion,topLevelDomain,currencies,borders,languages`
    );
    const country = await res.json();

    const borders = await Promise.all(
      country.borders?.map(async (border: string) => {
        const res = await fetch(
          `https://restcountries.com/v2/alpha/${border}?fields=name,alpha3Code`
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
  const { theme } = useTheme();

  const lightOrDarkBg = theme === "light" ? "bg-light" : "bg-dark";
  const lightOrDarkButton = theme === "light" ? "light" : "secondary";

  return (
    <>
      <Header />
      <main className={`d-flex flex-column p-3 ${lightOrDarkBg}`}>
        <Button
          variant={lightOrDarkButton}
          className="my-4 shadow"
          style={{ width: "fit-content" }}
          onClick={() => push("/")}
        >
          ← Back
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
