import image1 from '../assets/data-analytics.png'
import image2 from '../assets/reports.png'
import PropTypes from 'prop-types'
export default function AboutSec({classN}){
    return(
        <article className={`about active ${classN}`} data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    transforming raw data into actionable insights that guide business growth rate.
                </p>

                <p>with bachelor`s degree in infomation technology, helping companies make data driven decision making from reports and dashboards in power bi.</p>
            </section>
            <section className="service">
                <h3 className="h3 service-title">What i&apos;m doing</h3>
                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src={image1}
                                alt="design icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Data Analysis</h4>

                            <p className="service-item-text">
                            I transform raw data into actionable insights through statistical 
                            analysis and visualization.
                            </p>
                        </div>
                    </li>

                <li className="service-item">
                    <div className="service-icon-box">
                        
                        <img
                            src={image2}
                            alt="Web development icon"
                            width="40"
                        />
                    </div>

                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Business Intelligence Analyst</h4>

                        <p className="service-item-text">
                        I develop and manage dashboards and reports using BI tools 
                        that drive business strategy and improve 
                        operational efficiency.
                        </p>
                    </div>
                </li>
                </ul>
            </section>

            <div className="modal-container" data-modal-container>
                <div className="overlay" data-overlay></div>
                    <section className="testimonials-modal">
                        <button className="modal-close-btn" data-modal-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </section>
            </div>
        </article>
    )
}
AboutSec.propTypes = {
    classN: PropTypes.string, 
};
