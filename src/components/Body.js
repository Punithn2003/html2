import React, { useState } from 'react'
import Image from './Image/download.jpeg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])

    return (
        <div>
            <div>
                <img src={Image} alt="images" /> <br />
                <center><p>likes: {likes}</p></center>
                {/* destructuring */}
                <center><button onClick={count}>Like</button></center>
            </div>
            <div style={{ paddingTop: '50px' }}>
                <center><label htmlFor="Name">Name : </label></center>
                <center><input type="text" value={text} onChange={(e) => setText(e.target.value)} /></center>
                <center><p>onutput : {text}</p></center>
                <center><button onClick={reset}>Reset</button></center>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/watch?v=WcxMOcxGYRk'} height={200} controls />
                <div>
                    <p>i like this </p>
                </div>
            </div>
        </div>
    )
}
export default Body
