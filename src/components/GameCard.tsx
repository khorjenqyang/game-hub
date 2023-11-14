import { Card,CardBody,Image,Heading, HStack } from '@chakra-ui/react'
import {Games} from '../hooks/useGames.tsx'
import PlatformIconList from './PlatformIconList.tsx'
import CriticScore from './CriticScore.tsx'
import getCroppedImageUrl from '../services/image-url.ts'

interface Props{
    game: Games
}

const GameCard = ({game}:Props) => {
  return (
      <Card >
          <Image src={getCroppedImageUrl(game.background_image)}/>
          <CardBody>
              <Heading fontSize="2x1">{game.name}</Heading>
              <HStack justifyContent={"space-between"}>
                <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
                <CriticScore score={game.metacritic}/>
              </HStack>
          </CardBody>
      </Card>
  )
}

export default GameCard