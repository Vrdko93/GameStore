import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link} from '@reach/router';

import styles from '../components/game_store.module.css';
import logo from './GameStoreLogo.jpg';

export default props => {
    const [game, setGame] = useState("");
    const [platform, setPlatform] = useState("PlayStation 4");
    const [genre_games, setGenreGames] = useState([]);
    const [game_review, setGameReview] = useState("");
    const [game_reviews, setGameReviews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/game/" + props.id)
            .then(res => setGame(res.data))
    }, [props.id])

    useEffect(() => {
        axios.get("http://localhost:8000/api/games")
            .then( res => setGenreGames(res.data))
    }, [])

    return (
        <div className={styles.game_page_wrapper}>
           <Link to="/"><img className={styles.game_page_logo} src={logo} alt="GameStore Logo"/></Link><br/><br/><br/><br/><br/><br/>
            <div className={styles.game_section}>
                <div className={styles.left_section}>
                    <img className={styles.game_page_thumbnail} src={ platform === "PlayStation 4" ? game.image_url : game.image_url2} alt={game.title}/><br/>
                </div>
                <div className={styles.right_section}>
                    <h1>{game.title}</h1>
                    <h2>
                        <label>Platform: </label><br/>
                        <select onChange = {(e)=>setPlatform(e.target.value)} name="platform" value={platform}>
                            <option value="PlayStation 4">PlayStation 4</option>
                            <option value="Xbox One">Xbox One</option>
                        </select><br></br>
                    </h2>
                    <h2>{game.genre}</h2>
                    <p>${game.price}</p>
                </div>
            </div>
            <div className={styles.description_content}>
                <h2>DETAILS</h2>
                <p>{game.description}</p>
            </div>

        
            <h2>RECOMMENDED GAMES</h2>
            <div className={styles.recommended_content}>
                {genre_games.map((current_game, index)=>{
                        return game.title !== current_game.title && game.genre === current_game.genre ? 
                        (    
                            <div key={index}>
                                <Link to={"/game/" + current_game._id}><img className={styles.thumbnail} src={current_game.image_url} alt={current_game.title}/></Link>
                            </div>
                        ) : ""
                    }) }
            </div>
            <h2>REVIEWS</h2>
            <form onSubmit={(e)=>{e.preventDefault(); setGameReviews([...game_reviews, game_review]); }}>
                <label>Write a Review</label><br/>
                <textarea onChange={(e)=>setGameReview(e.target.value)} name="review" id="" cols="143" rows="5"/><br/><br/>
                <button className={styles.post_button}>Post Review</button><br/><br/>
            </form>
            {game_reviews.map((review, index)=>{
                return <div key={index}>
                    <h3>Review #{index+1}</h3>
                    <p>{review}</p>
                </div>
            })}

        </div>
    )
}
