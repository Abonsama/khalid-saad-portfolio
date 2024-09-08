import PropTypes from 'prop-types'

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
                    <h4 className="h4 timeline-item-title">Information Technology</h4>

                    <span>The National Ribat University</span>

                    <span>2017 — 2021</span>
                    
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Advanced Data Analytics Online Bootcamp</h4>

                    <span>Pattern For Training</span>

                    <span>2024</span>
                    
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Foundations, Data, Data Everywhere</h4>

                    <span>Google Coursera</span>

                    <span>2024</span>
                    
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Prepare Data For Exploration</h4>

                    <span>Google Coursera</span>

                    <span>2024</span>
                    
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Ask Questions To Make Data Driven Decisions</h4>

                    <span>Google Coursera</span>

                    <span>2024</span>
                    
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">HR Analytics-Build HR Dashboard Using Power BI</h4>

                    <span>Coursera</span>

                    <span>2024</span>
                    
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Creating Effective Dashboard</h4>

                    <span>UNICEF</span>

                    <span>2024</span>
                    
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Data Analysis</h4>

                    <span>UNICEF</span>

                    <span>2024</span>
                    
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Data Analytics Bootcamp</h4>

                    <span>Alexander Freberg</span>

                    <span>2024</span>
                    
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Presenting Data Visually</h4>

                    <span>UNICEF</span>

                    <span>2024</span>
                    
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Technical Tutorial - Basic Power BI For Infomation Managment</h4>

                    <span>Global Nutrition Cluster & UNICEF</span>

                    <span>2024</span>
                    
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">UNICEF Supply Chain Maturity Model</h4>

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