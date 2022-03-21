import React, { useState, useEffect } from 'react';
import styles from "../../styles/home.module.css";
import Header from "../../components/Header";
import SearchBar from '../../components/SearchBar';
import Articles from '../../components/Articles';
import Archives from '../../components/Archives';
import API from "../../util/API";
import CreateArchiveButton from '../../components/CreateArchiveButton';
import axios from 'axios';

const Home = () => {
    ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////

    const [randomTopic, setRandomTopic] = useState([]); // what goes here null, false, etc....
//    const [backendArchive, setBackendArchives] = useState([]);

    ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////

    const [results, setResults] = useState([]);
    const [archives, setArchives] = useState(false);
    const [count, setCount] = useState(10);

    useEffect(async () => {
        const fromDBArchives = await API.getArchives();

        ////////////////////////////////////////////////////////
         const randTopic = await API.getRandomTopic();
//        const bArchive = await API.getArchivesFromBackEnd();
//        console.log("this ",bArchive);
        ////////////////////////////////////////////////////////

        if (!archives) {
             setRandomTopic(randTopic.data);
//            setBackendArchives(bArchive);

            setArchives(fromDBArchives.data);
            return;
        } else if(archives.length !== fromDBArchives.data.length) {
             randomTopic = randTopic.data;
             setRandomTopic(randTopic.data);
//            backendArchive = bArchive.data;
//            setBackendArchives(bArchive.data);

            archives = fromDBArchives.data;
            setArchives(fromDBArchives.data);
            return;
        };
    }, [archives, results, count, randomTopic]);

    if (!archives) {
        return (<div className={styles.login}>
            <Header />
            <div className="d-flex flex-column justify-content-end m-3 bg-light">
                <h1 className={styles.signup_title}>{'Search 3000+ books'}</h1>
                <SearchBar results={results} setResults={setResults} count={count} setCount={setCount} />
                <section className="d-flex flex-row justify-content-around" id="article-archives">
                    <p>Waiting for archives</p>
                    <Articles results={results} setResults={setResults} count={count} setCount={setCount} archives={archives} />
                </section>
            </div>
        </div>
        )
    } else {
        return (
            <div className={styles.login}>
                <Header />
                <div className="d-flex flex-column justify-content-end m-3 bg-light">
                    <h1 className={styles.signup_title}>{'Search 3000+ books'}</h1>
                    <SearchBar results={results} setResults={setResults} count={count} setCount={setCount} />
                    <section className="d-flex flex-row justify-content-around" id="article-archives">
                        <Articles results={results} setResults={setResults} count={count} setCount={setCount} archives={archives} />
                        <Archives archives={archives} setArchives={setArchives} />
                        {/* //////////////////////////////////////////////////////// */}
                        <div>Random Topic: {randomTopic}</div>
                        {/* //////////////////////////////////////////////////////// */}
                    </section>
                </div>
            </div>
        );
    }
};

export default Home;