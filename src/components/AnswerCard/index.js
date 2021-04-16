import React, { useState } from 'react'
import * as styles from './answerCard.module.scss'

export default function AnswerCard() {

    const [showCard, setShowCard] = useState(false)
    return (
        <div className={styles.answer}>
            <div className="container">
                <div className={`row ${styles.answer_row}`}>
                    <div className="col d-flex align-items-center justify-content-center">
                        {
                            showCard ? <div className={`card ${styles.answer_card}`}>
                                <div className="card-body">
                                    <h3 className={styles.answer_text}>
                                        İçinden geleni yapmazsan o sana dert olur
                                    </h3>
                                </div>
                            </div>
                                :
                                <h3 className={styles.answer_default_text}>CEVABINIZ KARŞINIZDA OLACAKTIR</h3>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
