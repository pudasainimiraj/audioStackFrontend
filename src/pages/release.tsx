import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ReleaseDetails from "@/components/cardComponent/releaseCard";
import { Spinner, Alert, AlertIcon, AlertTitle, AlertDescription, Box } from "@chakra-ui/react";


const ReleaseDetail = () => {
  const router = useRouter();
  const { releaseId } = router.query;
  const [releaseData, setReleaseData] = useState<ReleaseData[]>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null| any>(null);

useEffect(() => {
  if (releaseId) {
    setLoading(true);
    axios.get<APIResponse>(`https://api.discogs.com/artists/${releaseId}/releases`)
      .then(response => {
        // Ensure that the data is set correctly
        setReleaseData(response.data.releases); // Assuming setReleaseData is expecting ReleaseData[]
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }
}, [releaseId]);


    if (loading) {
        return (
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Spinner size="xl" />
          </Box>
        );
      }

      if (error) {
        return (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Error:</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        );
      }

      if (!releaseData) {
        return (
          <Alert status="info">
            <AlertIcon />
            <AlertTitle>No release data available.</AlertTitle>
            <AlertDescription>Please check back later.</AlertDescription>
          </Alert>
        );
      }

  return (
    <div>
      {releaseData && (
       <ReleaseDetails
        releaseData={releaseData}
/>

      )}
    </div>
  );
};

export default ReleaseDetail;
