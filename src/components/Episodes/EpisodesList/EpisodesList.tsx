import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import episodesListStore from '../../../store/EpisodesListStore/EpisodesListStore'
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

const EpisodesList: FC = () => {
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (inView) {
      episodesListStore.incrementEpisodesPage();
      episodesListStore.getEpisodes();
    }
  }, [inView])

  const checkSeason = (episodeCode: string) => {
    const splitted = episodeCode.split('')
    const season = splitted[1] + splitted[2]
    const episode = splitted[4] + splitted[5]
    return `Season ${season} Episode ${episode}`
  }

  return (
    <ul className='cards-list-wrapper'>
      {episodesListStore.errorMessage 
      ?
      <ErrorMessage message={episodesListStore.errorMessage}/>
      : 
        episodesListStore.episodesList.map(episode => 
              <li 
                className='card-wrapper active-element' 
                key={episode.id}
                onClick={() => navigate('/episodes/' + episode.id)}
              >
                <h2>{episode.name}</h2>
                <p>{episode.air_date}</p>
                <p>{checkSeason(episode.episode)}</p>
              </li>
              )}
        <div className={`viewer ${episodesListStore.errorMessage ? 'viewer--not-active' : ''}`} ref={ref}>{inView}</div>
    </ul>
  )
}

export default observer(EpisodesList);