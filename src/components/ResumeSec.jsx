import PropTypes from 'prop-types'
import c1 from '../assets/alex.jpg'
import c2 from '../assets/Coursera ask.pdf'
import c3 from '../assets/Coursera foundation.pdf'
import c4 from '../assets/Coursera hr.pdf'
import c5 from '../assets/Coursera prepare data.pdf'
import c6 from '../assets/gnc&uni.jpg'
import c7 from '../assets/khalid.jpg'
import c8 from '../assets/training.jpg'
import c9 from '../assets/unicreating.jpg'
import c10 from '../assets/unidataanalysis.jpg'
import c11 from '../assets/unipre.jpg'
import c12 from '../assets/unisupply.jpg'

export default function ResumeSec({classN}){
    return(
        <article className={`resume ${classN}`} data-page="resume">
        <header>
            <h2 className="h2 article-title">Resume</h2>
        </header>
        <section className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                    <ion-icon name="book-outline"></ion-icon>
                </div>
                <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">The National Ribat University</h4>
                    <span>2017 — 2021</span>
                    <p className="timeline-text">
                        Despite the challenging circumstances, which
                        interrupted my university studies, I pursued self-study in
                        Data analysis. I acquired strong adaptive and problem-solving
                        skills.
                    </p>
                </li>
            </ol>
        </section>
        <section className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                <ion-icon name="briefcase-outline"></ion-icon>
                </div>

                <h3 className="h3">Certificates</h3>
            </div>

            <ol className="timeline-list">
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c7}
                            download="khalid.jpg">Information Technology</a></h4>

                    <span>The National Ribat University</span>

                    <span>2017 — 2021</span>
                    
                </li>
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c8}
                            download="training.jpg">Advanced Data Analytics Online Bootcamp</a></h4>

                    <span>Pattern For Training</span>

                    <span>2024</span>
                    
                </li>
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c3}
                            download="Coursera foundation.pdf">Foundations, Data, Data Everywhere</a></h4>

                    <span>Google Coursera</span>

                    <span>2024</span>
                    
                </li>
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c5}
                            download="Prepare Data For Exploration.pdf">Prepare Data For Exploration</a></h4>

                    <span>Google Coursera</span>

                    <span>2024</span>
                    
                </li>
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c2}
                            download="Ask Questions To Make Data Driven Decisions.pdf">Ask Questions To Make Data Driven Decisions</a></h4>

                    <span>Google Coursera</span>

                    <span>2024</span>
                    
                </li>
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c4}
                            download="HR Analytics-Build HR Dashboard Using Power BI.pdf">HR Analytics-Build HR Dashboard Using Power BI</a></h4>

                    <span>Coursera</span>

                    <span>2024</span>
                    
                </li>
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c9}
                            download="Creating Effective Dashboard.jpg">Creating Effective Dashboard</a></h4>

                    <span>UNICEF</span>

                    <span>2024</span>
                    
                </li>
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c10}
                            download="Data Analysis.jpg">Data Analysis</a></h4>

                    <span>UNICEF</span>

                    <span>2024</span>
                    
                </li>
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c1}
                            download="Data Analytics Bootcamp.jpg">Data Analytics Bootcamp</a></h4>

                    <span>Alexander Freberg</span>

                    <span>2024</span>
                    
                </li>
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c11}
                            download="Presenting Data Visually.jpg">Presenting Data Visually</a></h4>

                    <span>UNICEF</span>

                    <span>2024</span>
                    
                </li>
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c6}
                            download="Technical Tutorial - Basic Power BI For Infomation Managment.jpg">Technical Tutorial - Basic Power BI For Infomation Managment</a></h4>

                    <span>Global Nutrition Cluster & UNICEF</span>

                    <span>2024</span>
                    
                </li>
                
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title"><a target="_self"
                            href={c12}
                            download="UNICEF Supply Chain Maturity Model.jpg">UNICEF Supply Chain Maturity Model</a></h4>

                    <span>UNICEF</span>

                    <span>2024</span>
                    
                </li>
            </ol>
        </section>
    </article>
    )
}
ResumeSec.propTypes = {
    classN: PropTypes.string, 
};