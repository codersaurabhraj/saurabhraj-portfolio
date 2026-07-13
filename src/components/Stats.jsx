import React from 'react'
import stats from '../data/stats'
import './Stats.css'


const Stats = () => {
    return (
        <>
            <section className='stats-section' /* data-aos="zoom-in-up" */>
                <div className="stats-container">
                    {stats.map((item, index) => (
                        <div className="stats-card" key={item.id} data-aos="zoom-in-up"
                            data-aos-delay={index * 100} >
                            <div className="stats-icon">
                                <i className={item.icon}></i>
                            </div>
                            <div className="stats-content">
                                <h3>{item.count}</h3>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>


            </section>
        </>
    )
}

export default Stats
