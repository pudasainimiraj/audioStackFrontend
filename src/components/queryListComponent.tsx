import React, { useContext } from 'react';
import GenericCard from '@/components/cardComponent/genericCard';
import { DiscogsListContext } from '@/hooks/useDiscogProvider';  // Adjust the import path as necessary

interface Artist {
  id: number;
  title: string;
  realname?: string;
  resource_url: string;
  uri: string;
  cover_image: string;
  thumb: string;
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
            title={artist.title}
            description={`Explore more about ${artist.title} on Discogs`}
            imageUrl={artist.cover_image || artist.thumb}  // Use cover_image or thumb as fallback
          />
        </li>
      ))}
    </ul>
  );
};

export default ArtistsList;