import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { InterfaceDetails, Navbar, Footer } from "../../components/";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const InterfaceDetailsPage = () => {
  const { id } = useParams();
  const [interfaceData, setInterfaceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchInterfaceData = async () => {
      try {
        const response = await axios.get(`https://algiridocsapi.onrender.com/interfaces/${id}`);
        setInterfaceData(response.data);
      } catch (error) {
        console.error('Error fetching interface data:', error);
      } finally {
        setIsLoading(false); // Set loading to false when data fetching is completed
      }
    };
    fetchInterfaceData();
  }, [id]);

  return (
    <div>
      <Navbar />
      {isLoading ? ( // Render loading indicator if data is still loading
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          {interfaceData && <InterfaceDetails {...interfaceData} />}
        </>
      )}
      <Footer />
    </div>
  );
};

export default InterfaceDetailsPage;
