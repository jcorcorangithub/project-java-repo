import React from "react";
import styles from "../../styles/header.module.css";
import img from '../../images/Project Logo.jpg'

const Header = () => {

    return (
        <section id="app-header" className={styles.header}>
            <div className="d-flex flex-row justify-content-around">
                <img alt="app_logo" src={img} height="100px" width="100px" />
                <h1 className={styles.title}>Researchr</h1>
            </div>
        </section>
    )
};

export default Header;