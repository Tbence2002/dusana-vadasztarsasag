import React from 'react'
import "./Home.css";
import moment from 'moment'
import { motion } from 'framer-motion'
import newsImage from '../../assets/erdo.jpg'
import { useNews } from '../../contexts/NewsContext';

function News() {
    const { newsList } = useNews();

    return (
        <motion.div className='news-container'>
            {newsList.length > 0 ? <> <h2>Aktuális híreink</h2>
                <div className="news-content-container">
                    {newsList.map((newTopic, index) => {
                        return <motion.div className='news-content'
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 }
                            }}>
                            <div className='news-main-container'>
                                <div className='news-main-image'>
                                    <img src={newsImage} alt="hírek" />
                                    <div className='news-main-content'>
                                        <div className='news-main-header'>
                                            <div className="news-title">
                                                <span>{moment(newTopic.temadatum).format('YYYY.MM.DD.')}</span>
                                                <h3>{newTopic.temacim}</h3>
                                            </div>
                                        </div>
                                        <p>{newTopic.temaleiras}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    })} </div></> : <div></div>}

        </motion.div>
    )
}

export default News