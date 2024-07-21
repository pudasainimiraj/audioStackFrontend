interface Track {
  title: string;
  duration: string;
  artists: Array<{ name: string }>;
}

interface ReleaseData {
  title: string;
  tracklist: Track[];  
  community: {
     
  have: number; 
  } 
  };

interface ReleaseDetailsProps {
  title: string;
  tracks: Track[];
  ownedBy: number;
}
