import React, { useState, useEffect } from 'react'
import { navigate, Link } from '@reach/router';
import axios from 'axios';

import styles from '../components/game_store.module.css';
import logo from './GameStoreLogo.jpg';

export default () => {
    const [games, setGames] = useState([]);
    const [all_games, setAllGames] = useState([]); 
    const [search_list, setSearchList] = useState([]);
    const [searched_game, setSearchedGame] = useState("");
    const [first_list, setFirstList] = useState(true);
    const [second_list, setSecondList] = useState(false);
    const [third_list, setThirdList] = useState(false);
    const [genre_list, setGenreList] = useState(false);
    const [current_genre, setCurrentGenre] = useState("All Games");
    const [user_type, setUserType] = useState("User");

    useEffect(()=>{
        axios.get('http://localhost:8000/api/games')
            .then(response=>{setGames(response.data); setAllGames(response.data);})
            .catch((err)=>console.log(err))
    }, [])

    const deleteHandler = (id) => {
        axios.delete('http://localhost:8000/api/game/' + id)
        .then(() => {setGames(games.filter(game => game._id !== id)); setAllGames(all_games.filter(game => game._id !== id)); })
        .catch((err)=>console.log(err))  
    }

    const showAllGames = (genre) => {
        setCurrentGenre(genre);
        setGenreList(false);
        setFirstList(true);
        setSecondList(false); 
        setThirdList(false); 
        setGames(all_games);
    }

    const showGenreCollection = (genre) => {
        setCurrentGenre(genre);
        setGenreList(true);
        setFirstList(false);
        setSecondList(false); 
        setThirdList(false); 
        setGames(all_games.filter(game => game.genre === genre));
    }

    const findGame = () =>{
        let foundGame = null;
        all_games.map((game)=>{ if (searched_game.toLowerCase() === game.title.toLowerCase()) {foundGame = game; return;} });
       
        if (foundGame !== null){
            navigate("/game/" + foundGame._id);
        }
    }

    const gameExists = (typedTitle, currentTitle) => {
        if (typedTitle.length > 0){
            for (let i = 0; i < typedTitle.length; i++){
                if (typedTitle[i].toLowerCase() !== currentTitle[i].toLowerCase()){
                    return false;
                }
            }
            return true;
        }
        else
            return false;
    }

    const searchSuggestion = (event) => {
        setSearchedGame(event.target.value);
        setSearchList(all_games.filter(game=>gameExists(event.target.value, game.title)));
    }

    return (
        <div className={styles.wrapper}>
            <Link to="/"><img className={styles.logo} src={logo} alt="GameStore Logo"/></Link>
            <h1 style={{paddingRight: "300px"}}>{current_genre}</h1>
            {/* {user_type === "Admin" ? <button className={styles.content_button} onClick={() => navigate("/game/new")}>Add Game</button> : ""}    */}
            <input style={{marginLeft: "140px"}} onChange={(e) => searchSuggestion(e)} type="text" placeholder="Find games"/>
            <button className={styles.button} onClick={findGame}>Search</button>
            
            <label>User Type: </label>
            <select onChange = {(e)=>setUserType(e.target.value)} value={user_type}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
            </select>
            <br/><br/>

            {search_list.length > 0 ? search_list.map((game, index)=>{
               return <Link className={styles.Link} key={index} to={"/game/" + game._id}>{game.title} <img style={{height: "50px", width: "50px"}} src={game.image_url} alt={game.title}/></Link>                                   
       }):""}

        
           <div className={styles.sidebar}>
                <h3>Genre</h3>
                <Link className={styles.sidebar_links} onClick={()=>showAllGames("All Games")} to="/">All Games</Link><br/><br/>
                <Link className={styles.sidebar_links} onClick={()=>showGenreCollection("Action Adventure")} to="/">Action Adventure</Link><br/><br/>
                <Link className={styles.sidebar_links} onClick={()=>showGenreCollection("First Person Shooter")} to="/">First Person Shooter (FPS)</Link><br/><br/>
                <Link className={styles.sidebar_links} onClick={()=>showGenreCollection("Survival Horror")} to="/">Survival Horror</Link><br/><br/>
                <Link className={styles.sidebar_links} onClick={()=>showGenreCollection("Fighting")} to="/">Fighting</Link><br/><br/>
                <Link className={styles.sidebar_links} onClick={()=>showGenreCollection("Racing")} to="/">Racing</Link><br/><br/>
                <Link className={styles.sidebar_links} onClick={()=>showGenreCollection("Sports")} to="/">Sports</Link><br/><br/>
                <Link className={styles.sidebar_links} onClick={()=>showGenreCollection("Strategy")} to="/">Strategy</Link><br/><br/>
                <Link className={styles.sidebar_links} onClick={()=>showGenreCollection("Role Playing Game (RPG)")} to="/">Role Playing Game (RPG)</Link><br/><br/>
                <Link className={styles.sidebar_links} onClick={()=>showGenreCollection("Simulation")} to="/">Simulation</Link><br/>      
           </div>
           <div className={styles.main_content}>
                {first_list ? games.map((game, index)=>{
                        return index < 8 ?
                            <div key={index}>
                                <Link to={"/game/" + game._id}><img className={styles.thumbnail} src={game.image_url} alt={game.title}/></Link>
                                {user_type === "Admin" ? <> <br/>{/* <button className={styles.content_button} onClick={()=>deleteHandler(game._id)}>Delete</button> { } | { } */}
                                    <button className={styles.content_button} onClick={()=>navigate("/game/" + game._id + "/edit")}>Edit</button><br/><br/>
                                     </>:""}
                            </div>
                         : ""
                }) : ""} 
                {second_list ? games.map((game, index)=>{
                    return index >= 8 && index < 16 ?
                        <div key={index}>
                            <Link to={"/game/" + game._id}><img className={styles.thumbnail} src={game.image_url} alt={game.title}/></Link>
                             {user_type === "Admin" ? <> <br/>{/*<button className={styles.content_button} onClick={()=>deleteHandler(game._id)}>Delete</button> { } | { } */}
                                    <button className={styles.content_button} onClick={()=>navigate("/game/" + game._id + "/edit")}>Edit</button><br/><br/>
                                     </>:""}
                        </div>
                    : ""
                }) :"" }
                {third_list ? games.map((game, index)=>{
                    return index >= 16 ?
                        <div key={index}>
                            <Link to={"/game/" + game._id}><img className={styles.thumbnail} src={game.image_url} alt={game.title}/></Link>
                             {user_type === "Admin" ? <> <br/>{/*<button className={styles.content_button} onClick={()=>deleteHandler(game._id)}>Delete</button> { } | { } */}
                                    <button className={styles.content_button} onClick={()=>navigate("/game/" + game._id + "/edit")}>Edit</button><br/><br/>
                                     </>:""}
                        </div>
                    : ""
                    }) :"" }
                {genre_list ? games.map((game, index)=>{
                        return (
                            <div key={index}>
                                <Link to={"/game/" + game._id}><img className={styles.thumbnail} src={game.image_url} alt={game.title}/></Link>
                                {user_type === "Admin" ? <> <br/><button className={styles.content_button} onClick={()=>deleteHandler(game._id)}>Delete</button> { } | { }
                                    <button className={styles.content_button} onClick={()=>navigate("/game/" + game._id + "/edit")}>Edit</button><br/><br/>
                                     </>:""}
                            </div>)
                    }) :"" }
                </div>
            {current_genre==="All Games" ?
            <>
                <Link onClick={()=>{setFirstList(true); setSecondList(false); setThirdList(false); setGenreList(false);}} to={"/"}>1</Link> { } | { }
                <Link onClick={()=>{setSecondList(true); setFirstList(false); setThirdList(false); setGenreList(false); }} to={"/"}>2</Link> { } | { }
                <Link onClick={()=>{setThirdList(true); setFirstList(false); setSecondList(false); setGenreList(false); }} to={"/"}>3</Link>
            </>
            : ""}
            <h6>Created by Vardges Gharibyan</h6> 
        </div>
    )
}
