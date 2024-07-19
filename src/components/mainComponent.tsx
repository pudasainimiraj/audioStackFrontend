
import { QueryClient, QueryClientProvider } from 'react-query';
import ArtistsList from './queryListComponent';
import MainLayout from './layouts/MainLayout';

const Landing = () => {
    const queryClient = new QueryClient();
    return (
        <>
        <QueryClientProvider client={queryClient}>
      <ArtistsList/>
    </QueryClientProvider>
    </>
        
    );
     
      
}


export default Landing;