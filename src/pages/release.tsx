import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ReleaseDetails from "@/components/cardComponent/releaseCard";

const ReleaseDetail = () => {
  const router = useRouter();
  const { releaseId } = router.query;
  const [releaseData, setReleaseData] = useState<ReleaseData[]>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!releaseData) return <p>No release data available.</p>;

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
