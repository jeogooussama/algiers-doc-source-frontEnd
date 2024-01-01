// InterfaceDetailsPage.jsx
import { useParams } from "react-router-dom";
import { InterfaceDetails,  Navbar, Footer } from "../../components/inedx";
import fakeData from "../../fakeData"; // Import fake data

const InterfaceDetailsPage = () => {
  const { id } = useParams();

  // Find interface data by id
  const interfaceData = fakeData.interfaces.find((item) => item.id === Number(id));

  return (
    <div>
      <Navbar/>
     
      <InterfaceDetails {...interfaceData} />
      <Footer/>
    </div>
  );
};

export default InterfaceDetailsPage;
