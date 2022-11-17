import { FC } from 'react';
import {observer} from 'mobx-react-lite';
import CharactersList from '../../components/Characters/CharactersList/CharactersList';
import CharacterFilters from '../../components/Characters/CharacterFilters/CharacterFilters';
import MainLogo from '../../components/UI/MainLogo/MainLogo';
import Header from '../../components/UI/Header/Header';
import SearchQuantity from '../../components/UI/SearchQuantity/SearchQuantity';
import characters from '../../store/CharactersListStore/CharactersListStore'
import Loading from '../../components/UI/Loading/Loading';
import Footer from '../../components/UI/Footer/Footer';

const CharactersPage: FC = () => {
  const logoParams = {
      url: {
        mobile: './images/main-logo.png',
        desktop: './images/main-logo-desktop.png',
      },
  
      size: {
        mobile: {
          width: 312,
          height: 104,
        },
  
        desktop: {
          width: 600,
          height: 200,
        },
      },
  }

  return (
    <div className='page-wrapper'>
      <Header />
      {characters.isLoading && <Loading/>}
      <main className='main-wrapper'>
        <MainLogo props={logoParams}/>
        <CharacterFilters />
        <SearchQuantity quantity={characters.charactersQuantity} searchItems={'characters'} />
        <CharactersList />   
      </main>
      <Footer />
    </div>
  )
}

export default observer(CharactersPage);