import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { InterfaceDetails, Navbar, Footer } from "../../components/";
import axios from "axios";
import { CircularProgress, Container, Box } from "@mui/material";

const InterfaceDetailsPage = () => {
  const { id } = useParams();
  const [interfaceData, setInterfaceData] = useState(null);
  const [isLoadingInterface, setIsLoadingInterface] = useState(true);
  const [isLoadingLinedPaper, setIsLoadingLinedPaper] = useState(true);

  useEffect(() => {
    // Create cancel tokens for each request
    const interfaceCancelToken = axios.CancelToken.source();
    const linedPaperCancelToken = axios.CancelToken.source();

    const fetchInterfaceData = async () => {
      try {
        const interfaceResponse = await axios.get(
          `https://algeridoc.adaptable.app/interfaces/${id}`,
          { cancelToken: interfaceCancelToken.token }
        );
        if (interfaceResponse.status === 200 && interfaceResponse.data.type === "interface") {
          setInterfaceData(interfaceResponse.data);
        }
      } catch (error) {
        console.error("Error fetching interface data:", error);
      } finally {
        setIsLoadingInterface(false);
      }
    };

    const fetchLinedPaperData = async () => {
      try {
        const linedPaperResponse = await axios.get(
          `https://algeridoc.adaptable.app/linedPapers/${id}`,
          { cancelToken: linedPaperCancelToken.token }
        );
        if (linedPaperResponse.status === 200 && linedPaperResponse.data.type === "linedPaper") {
          setInterfaceData(linedPaperResponse.data);
        }
      } catch (error) {
        // Remove console.error for lined paper request
      } finally {
        setIsLoadingLinedPaper(false);
      }
    };

    // Fetch both interface and lined paper data simultaneously
    Promise.all([fetchInterfaceData(), fetchLinedPaperData()]);

    // Cleanup function to cancel requests when the component unmounts
    return () => {
      interfaceCancelToken.cancel("Component unmounted");
      linedPaperCancelToken.cancel("Component unmounted");
    };
  }, [id]);

  // Render loading indicator if either interface or lined paper data is still loading
  const isLoading = isLoadingInterface || isLoadingLinedPaper;

  return (
    <div>
      <Navbar />
      <Box sx={{ backgroundColor: "#F9FCFB" }}>
        <Container maxWidth="lg">
          {isLoading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="60vh"
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              {interfaceData && <InterfaceDetails {...interfaceData} />}
            </>
          )}
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default InterfaceDetailsPage;
