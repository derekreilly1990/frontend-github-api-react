import moment from 'moment'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const DateDisplay: React.FC = () => {
    const [date, setDate] = useState('')

    /**
     * On component render sets the date state to current date and time
     */
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(moment().toDate().toString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <DateWrapper>
            <DateText>{date}</DateText>
        </DateWrapper>
    )
}
const DateWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const DateText = styled.p`
    font-weight: 800;
`
export default DateDisplay
