import  styled  from 'styled-components'
import React from 'react'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'

function Header() {
    return (
        <HeaderContainer>
            {/* Header left */}
            <HeaderLeft>
                <HeaderAvatar 
        
                />
                <AccessTimeIcon/>
            </HeaderLeft>
            {/* Header search */}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search..."/>
            </HeaderSearch>
            {/* Header right */}
            
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
`
