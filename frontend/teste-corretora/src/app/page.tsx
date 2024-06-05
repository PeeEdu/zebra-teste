import Borders from "../../components/Borders";
import InputStates from "../../components/InputStates";
import getCities from '../../services/getCities';

export default async function Home() {
const cities = await getCities()

  return (
      <>
        <div>
          <Borders/>
          <InputStates cities={cities}/>
        </div>
      </>
  );
}
