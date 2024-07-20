interface Track {
  title: string;
  duration: string;
  artists: Array<{ name: string; }>;
}

interface ReleaseData {
  title: string;
  tracks?: Track[]; // Marking tracks as optional
  ownedBy: number;
}

interface ReleaseDetailsProps {
  releaseData: ReleaseData;
}