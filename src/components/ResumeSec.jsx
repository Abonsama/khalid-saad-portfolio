import PropTypes from 'prop-types';
import OpenPreview from './OpenPreview';
import c1 from '../assets/alex.jpg';
import c2 from '../assets/Coursera ask.pdf';
import c3 from '../assets/Coursera foundation.pdf';
import c4 from '../assets/Coursera hr.pdf';
import c5 from '../assets/Coursera prepare data.pdf';
import c6 from '../assets/gnc&uni.jpg';
import c7 from '../assets/khalid.jpg';
import c8 from '../assets/training.jpg';
import c9 from '../assets/unicreating.jpg';
import c10 from '../assets/unidataanalysis.jpg';
import c11 from '../assets/unipre.jpg';
import c12 from '../assets/unisupply.jpg';

export default function ResumeSec({ classN }) {
    const certificates = [
        { title: 'Information Technology', institution: 'The National Ribat University', year: '2017 — 2021', file: c7, fileName: 'khalid.jpg' },
        { title: 'Advanced Data Analytics Online Bootcamp', institution: 'Pattern For Training', year: '', file: c8, fileName: 'training.jpg' },
        { title: 'Foundations, Data, Data Everywhere', institution: 'Google Coursera', year: '', file: c3, fileName: 'Coursera foundation.pdf' },
        { title: 'Prepare Data For Exploration', institution: 'Google Coursera', year: '', file: c5, fileName: 'Prepare Data For Exploration.pdf' },
        { title: 'Ask Questions To Make Data Driven Decisions', institution: 'Google Coursera', year: '', file: c2, fileName: 'Ask Questions To Make Data Driven Decisions.pdf' },
        { title: 'HR Analytics-Build HR Dashboard Using Power BI', institution: 'Coursera', year: '', file: c4, fileName: 'HR Analytics-Build HR Dashboard Using Power BI.pdf' },
        { title: 'Creating Effective Dashboard', institution: 'UNICEF', year: '', file: c9, fileName: 'Creating Effective Dashboard.jpg' },
        { title: 'Data Analysis', institution: 'UNICEF', year: '', file: c10, fileName: 'Data Analysis.jpg' },
        { title: 'Data Analytics Bootcamp', institution: 'Alexander Freberg', year: '', file: c1, fileName: 'Data Analytics Bootcamp.jpg' },
        { title: 'Presenting Data Visually', institution: 'UNICEF', year: '', file: c11, fileName: 'Presenting Data Visually.jpg' },
        { title: 'Technical Tutorial - Basic Power BI For Information Management', institution: 'Global Nutrition Cluster & UNICEF', year: '', file: c6, fileName: 'Technical Tutorial - Basic Power BI For Information Management.jpg' },
        { title: 'UNICEF Supply Chain Maturity Model', institution: 'UNICEF', year: '', file: c12, fileName: 'UNICEF Supply Chain Maturity Model.jpg' },
        { title: 'Collating and Cleaning Data', institution: 'UNICEF', year: '', file: c12, fileName: 'Collating and Cleaning Data.pdf' },
        { title: 'Collect-process-analyze-data Module Certificate', institution: 'UNICEF', year: '', file: c12, fileName: 'Collect-process-analyze-data_Module certificate.pdf' },
        { title: 'Business Analytics for Decision Making', institution: 'Coursera', year: '', file: c12, fileName: 'Business Analytics for Decision Making.pdf' },
        { title: 'Business Analysis Fundamentals', institution: 'Coursera', year: '', file: c12, fileName: 'Business Analysis Fundamentals.pdf' },
        { title: 'Extract, Transform and Load Data in Power BI', institution: 'Coursera', year: '', file: c12, fileName: 'Extract, Transform and Load Data in Power BI.jpg' },
    ];

    return (
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
                        <span>2016 — 2021</span>
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
                    {certificates.map((cert, index) => (
                        <li key={index} className="timeline-item">
                            <h4 className="h4 timeline-item-title">{cert.title}</h4>
                            <span>{cert.institution}</span>
                            <span>{cert.year}</span>
                            <OpenPreview file={cert.file} />
                            <button
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = cert.file;
                                    link.download = cert.fileName;
                                    link.click();
                                }}
                                className="download-button"
                            >
                                Download
                            </button>
                        </li>
                    ))}
                </ol>
            </section>
        </article>
    );
}

ResumeSec.propTypes = {
    classN: PropTypes.string,
};
