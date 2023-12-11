import { Card,CardBody,Image,Heading, HStack } from '@chakra-ui/react'
import {Games} from '../hooks/useGames.tsx'
import PlatformIconList from './PlatformIconList.tsx'
import CriticScore from './CriticScore.tsx'
import getCroppedImageUrl from '../services/image-url.ts'
import Emoji from './Emoji.tsx'

interface Props{
    game: Games
}

const GameCard = ({game}:Props) => {
  return (
      <Card>
          <Image src={getCroppedImageUrl(game.background_image)}/>
          <CardBody>
              <HStack justifyContent={"space-between"} marginBottom={3}>
                <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
                <CriticScore score={game.metacritic}/>
              </HStack>
              <Heading fontSize="2x1">{game.name}</Heading>
              <Emoji rating={game.rating_top}/>
          </CardBody>
      </Card>
  )
}

export default GameCard