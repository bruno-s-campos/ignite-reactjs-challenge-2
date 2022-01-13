import { useState } from 'react';

import { SideBar, GenreResponseProps } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
        setSelectedGenre={setSelectedGenre}
      />
      <Content
        selectedGenreId={selectedGenre.id}
        selectedGenreTitle={selectedGenre.title}
      />
    </div>
  )
}