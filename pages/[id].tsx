import { useRouter } from "next/router";
import Header from "../src/components/Header";

const CountryDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
    </>
  );
};

export default CountryDetails;
