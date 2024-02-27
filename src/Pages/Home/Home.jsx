import Slider from "../../components/Slider/Slider";
import Preview from "../../components/Preview/Preview";
import { useGetMenShirtsQuery } from "../../state/productSlice";
import { useGetLaptopsQuery } from "../../state/productSlice";
import { useGetSmartphonesQuery } from "../../state/productSlice";
import { useGetWomensBagQuery } from "../../state/productSlice";

const Home = () => {
  const { data: mensShirt, isLoading: menshirtLoading } =
    useGetMenShirtsQuery();

  const { data: laptops, isLoading: laptopsLoading } = useGetLaptopsQuery();

  const { data: smartphones, isLoading: smartphonesLoading } =
    useGetSmartphonesQuery();
  const { data: womensBag, isLoading: womensBagLoading } =
    useGetWomensBagQuery();

  return (
    <>
      <Slider />
      <Preview mensShirt={mensShirt} isLoading={menshirtLoading} />
      <Preview mensShirt={laptops} isLoading={laptopsLoading} />
      <Preview mensShirt={womensBag} isLoading={womensBagLoading} />
      <Preview mensShirt={smartphones} isLoading={smartphonesLoading} />
    </>
  );
};

export default Home;
