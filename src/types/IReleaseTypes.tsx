interface Track {
  title: string;
  duration: string;
  artists: Array<{ name: string }>;
}

interface ReleaseData {
  tracks: any;
  stats: any;
  format: any;
  label: any;
  year: any;
  title: string;
  tracklist: Track[];
  community: {
    have: number;
    want: number; 
    own: number;  
  }
}

interface ReleaseDetailsProps {
  title: string;
  tracks: Track[];
  ownedBy: number;
  wantedBy: number; 
}
