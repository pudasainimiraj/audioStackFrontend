import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import ReleaseDetails from "@/components/cardComponent/releaseCard";  // Ensure the path is correct

const ReleaseDetail = () => {
  const router = useRouter();
  const { releaseId } = router.query;
  const [releaseData, setReleaseData] = useState<ReleaseData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (releaseId) {
      setLoading(true);
      axios.get<ReleaseData>(`https://api.discogs.com//artists/${releaseId}/releases`)
        .then(response => {
          setReleaseData(response.data.releases);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [releaseId]);

  // console.log(process.env.REACT_APP_API_KEY);

  console.log("Release DAta", releaseData)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!releaseData) return <p>No release data available.</p>;

  return (
    <div>
      <Head>
        <title>{releaseData ? releaseData.title : "Loading..."}</title>
      </Head>
      {releaseData && (
       <ReleaseDetails
        releaseData={releaseData}
/>

      )}
    </div>
  );
};

export default ReleaseDetail;
