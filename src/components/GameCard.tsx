import { Card,CardBody,Image,Heading } from '@chakra-ui/react'
import {Games} from '../hooks/useGames.tsx'

interface Props{
    game: Games
}

const GameCard = ({game}:Props) => {
  return (
    <Card>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize="2x1">{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard