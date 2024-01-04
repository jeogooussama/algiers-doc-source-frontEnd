// InterfaceDetailsPage.jsx
import { useParams } from "react-router-dom";
import { InterfaceDetails, Navbar, Footer } from "../../components/";
import fakeData from "../../fakeData";

const InterfaceDetailsPage = () => {
  const { id } = useParams();

  // Find interface data by id
  const interfaceData = fakeData.interfaces.find(
    (item) => item.id === Number(id)
  );

  return (
    <div>
      <Navbar />
      {interfaceData && <InterfaceDetails {...interfaceData} />}
      <Footer />
    </div>
  );
};

export default InterfaceDetailsPage;
