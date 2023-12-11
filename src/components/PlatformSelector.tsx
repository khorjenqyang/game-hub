import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

interface Props{
    onSelectedPlatform:(platform:Platform) => void
    selectedPlatform: Platform | null
}

const PlatformSelector = ({onSelectedPlatform,selectedPlatform}:Props) => {

    const {data,error,isLoading} = usePlatforms();

    if(error) return null

    if(isLoading) return <Spinner/>

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>

            <MenuList>
                {data.map(platform=>
                    <MenuItem key={platform.id} onClick={()=>onSelectedPlatform(platform)}>{platform.name}</MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector