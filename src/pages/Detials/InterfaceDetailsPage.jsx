import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { InterfaceDetails, Navbar, Footer } from "../../components/";
import axios from "axios";

const InterfaceDetailsPage = () => {
  const { id } = useParams();
  const [interfaceData, setInterfaceData] = useState(null);

  useEffect(() => {
    const fetchInterfaceData = async () => {
      try {
        const response = await axios.get(`https://algiridocsapi.onrender.com/interfaces/${id}`);
        setInterfaceData(response.data);
      } catch (error) {
        console.error('Error fetching interface data:', error);
      }
    };
    fetchInterfaceData();
  }, [id]);

  return (
    <div>
      <Navbar />
      {interfaceData && <InterfaceDetails {...interfaceData} />}
      <Footer />
    </div>
  );
};

export default InterfaceDetailsPage;
