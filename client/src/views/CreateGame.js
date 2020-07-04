import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

import styles from '../components/game_store.module.css';
import logo from './GameStoreLogo.jpg';

export default () => {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImageURL] = useState("");
    const [image_url2, setImageURL2] = useState("");

    const [errors, setErrors] = useState([]);
  
    const onSubmitHandler = e => {
        e.preventDefault();
        setErrors([]);
        axios.post('http://localhost:8000/api/game', {
            title,
            genre,
            price,
            description,
            image_url,
            image_url2
        })
            .then(() => navigate("/"))
            .catch(err => {
                const errs = [];
                console.log( err.response.data.errors);
                const innerErrors = err.response.data.errors;

                for (const key in innerErrors){
                    errs.push(innerErrors[key].properties.message);
                }
                setErrors(errs);
                
            })
    }

    return (
        <div className={styles.wrapper}>
         <Link to="/"><img className={styles.logo} src={logo} alt="GameStore Logo"/></Link><br/><br/><br/><br/>
        <h1>Create Game</h1>
        {errors.map((err, i) => (
            <p key={i} style={{color: "red"}}>{err}</p>
        ))}
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)} />
            </p>
            <p>
                <label>Genre: </label><br/>
                <input type="text" value={genre} onChange = {(e)=>setGenre(e.target.value)} />
            </p>
            <p>
                <label>Price: </label><br/>
                $<input type="text" value={price} onChange = {(e)=>setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description: </label><br/>
                <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)} />
            </p>
            <p>
                <label>Image URL (PS4): </label><br/>
                <input type="text" value={image_url} onChange = {(e)=>setImageURL(e.target.value)}/>
            </p>
            <p>
                <label>Image URL (Xbox One): </label><br/>
                <input type="text" value={image_url2} onChange = {(e)=>setImageURL2(e.target.value)}/>
            </p>       
            <button className={styles.content_button}>Add Game</button>
        </form>
    </div>
    )
}
