import React, { useEffect } from 'react'
import DateDisplay from '../components/DateDisplay'
import { baseUrl, getUserDataParam } from '../resources/api-constants'
import CustomAxios from '../utility/customAxios'
import styled from 'styled-components'

const HomePage: React.FC = () => {
    useEffect(() => {
        CustomAxios.get<any>(
            baseUrl + getUserDataParam('derekreilly1990')
        ).then((response) => console.log(response.data))
    }, [])

    return (
        <Wrapper>
            <Heading>Hello world!</Heading>
            <DateDisplay />
        </Wrapper>
    )
}
const Heading = styled.h1`
    font-size: 4em;
`
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default HomePage
