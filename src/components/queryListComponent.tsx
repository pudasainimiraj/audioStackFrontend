import React, { useContext } from 'react';
import GenericCard from '@/components/cardComponent/genericCard';
import { DiscogsListContext } from '@/hooks/useDiscogProvider';  // Adjust the import path as necessary

interface Artist {
  id: number;
  name: string;
  realname?: string;
  profile: string;
  resource_url: string;
  uri: string;
  releases_url: string;
  images: Array<{ uri: string; width: number; height: number }>;
  urls: string[];
}

const ArtistsList = () => {
  const { results, loading, type } = useContext(DiscogsListContext);

  if (loading) return <div>Loading...</div>;
  if (type !== 'artist') return <div>No artist data available</div>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {results.map((artist: Artist) => (
        <li key={artist.id}>
          <GenericCard
            title={artist.name}
            description={artist.profile}
            imageUrl={artist.images && artist.images.length > 0 ? artist.images[0].uri : undefined}
          />
        </li>
      ))}
    </ul>
  );
};

export default ArtistsList;
