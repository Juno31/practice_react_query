import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import './index.css'

function Iframe() {
    const [player, setPlayer] = useState(null)
    const [playerState, setPlayerState] = useState(-1)
    const [playerTime, setPlayerTime] = useState(0)
    const [videoDuration, setVideoDuration] = useState(0)
    
    const [isCorrection, setIsCorrection] = useState(false)
    const [corrections, setCorrections] = useState([])
    const [correctionInput, setCorrectionInput] = useState('')

    const initPlayer = function(e){
        const player = e.target
        
        setPlayer(player)
        setPlayerState(player.getPlayerState())
        setPlayerTime(player.getCurrentTime())
        setVideoDuration(player.getDuration())
    }

    const videoOptions = {
        videoId: 'HmM-sN7HadA',
        width: '1000',
        height: '500',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
        style: {position: 'relative', height: 0, width: '100%', paddingBottom: '56.25%'},
        onReady: initPlayer
    }

    const playVideo = useCallback(function(){

        if(player){

            player.playVideo()
        }
        
        return
    }, [player])

    const pauseVideo = useCallback(function(){

        if(player){

            player.pauseVideo()
        }
        
        return
    }, [player])

    const getVideoTime = useCallback(function(){
        
        if(player){

            return player.getCurrentTime()
        }
        
        return
    }, [player])

    const handleStartRevise = function(){

        setIsCorrection(true)
        pauseVideo()
        setPlayerTime(getVideoTime())
    }

    const handleCorrectionOnChange = function(e){

        setCorrectionInput(e.target.value)
    }

    const handleAddCorrection = function(){

        const correction = {
            time: playerTime,
            content: correctionInput
        }

        setCorrections([...corrections, correction])
        setCorrectionInput('')
        setPlayerTime(0)
        setIsCorrection(false)
    }

    return (
        <Container>
            <YoutubeWrapper>
                <YouTube {...videoOptions} />
            </YoutubeWrapper>
            <RevisionWrapper style={{flexFlow: 'column nowrap'}}>
                <Flex>
                    {corrections?.map(function(correction){

                        return (
                            <p>{`${Math.floor(correction.time / 60)}분${Math.floor(correction.time % 60)}초`} {correction.content}</p>
                        )
                    })}
                </Flex>
                <RevisionWrapper style={{width: '100%'}}>
                    {isCorrection && 
                        <>
                            <p style={{ margin: 0 }}>{`${Math.floor(playerTime / 60)}분${Math.floor(playerTime % 60)}초`}</p>
                            <input
                                value={correctionInput}
                                onChange={handleCorrectionOnChange}
                            />
                        </>
                    }
                    <button onClick={handleAddCorrection}>write</button>
                    <button onClick={handleStartRevise}>start Revise</button>
                </RevisionWrapper>
            </RevisionWrapper>
        </Container>
    )
}

export default Iframe

const Container = styled.div`
    width: 100%;
    height: max-content;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
`

const YoutubeWrapper = styled.div`
    width: 70%;
    height: max-content;

    position: relative;
`

const RevisionWrapper = styled.div`
    width: 30%;
    min-height: 100%;

    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
`

const Flex = styled.div`
    width: 100%;
    
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`