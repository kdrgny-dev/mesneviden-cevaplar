import React from 'react'
import * as styles from "./header.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="row align-items-center py-5">
                    <div className={`col-lg-8 col-md-8 col-sm-12 ${styles.header_left}`}>
                        <h1 className={styles.header_title}>MESNEVİDEN CEVAPLAR</h1>
                        <h2 className={styles.header_subtitle}>SORULARINIZIN CEVABI BU UYGULAMADA</h2>
                        <ul className={styles.header_items}>
                            <li className={styles.header_item}>Sormak istediğiniz soruya odaklanın</li>
                            <li className={styles.header_item}>Derin bir nefes alın</li>
                            <li className={styles.header_item}>
                                Nefes verirken içinizden sorunuzu tekrar ederek
                                <button className={`btn btn-lg ${styles.header_btn}`}>CEVAPLA</button>
                                düğmesine basın
                            </li>
                        </ul>
                    </div>
                    <div className={`col-lg-4 col-md-4 col-sm-12 text-center ${styles.header_right}`}>
                        <StaticImage
                            src="../../images/logo.png"
                            className="mx-auto"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
