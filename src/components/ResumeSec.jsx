import PropTypes from 'prop-types';
import { useState } from 'react';
import OpenPreview from './OpenPreview';
import './PreviewOverlay.css'; // Import the CSS for preview modal and overlay

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
    const [previewFile, setPreviewFile] = useState(null);

    const certificates = [
        { title: 'Information Technology', institution: 'The National Ribat University', year: '2017 — 2021', file: c7 },
        { title: 'Advanced Data Analytics Online Bootcamp', institution: 'Pattern For Training', year: '', file: c8 },
        { title: 'Foundations, Data, Data Everywhere', institution: 'Google Coursera', year: '', file: c3 },
        { title: 'Prepare Data For Exploration', institution: 'Google Coursera', year: '', file: c5 },
        { title: 'Ask Questions To Make Data Driven Decisions', institution: 'Google Coursera', year: '', file: c2 },
        { title: 'HR Analytics-Build HR Dashboard Using Power BI', institution: 'Coursera', year: '', file: c4 },
        { title: 'Creating Effective Dashboard', institution: 'UNICEF', year: '', file: c9 },
        { title: 'Data Analysis', institution: 'UNICEF', year: '', file: c10 },
        { title: 'Data Analytics Bootcamp', institution: 'Alexander Freberg', year: '', file: c1 },
        { title: 'Presenting Data Visually', institution: 'UNICEF', year: '', file: c11 },
        { title: 'Technical Tutorial - Basic Power BI For Information Management', institution: 'Global Nutrition Cluster & UNICEF', year: '', file: c6 },
        { title: 'UNICEF Supply Chain Maturity Model', institution: 'UNICEF', year: '', file: c12 },
        { title: 'Collating and Cleaning Data', institution: 'UNICEF', year: '', file: c12 },
        { title: 'Collect-process-analyze-data Module Certificate', institution: 'UNICEF', year: '', file: c12 },
        { title: 'Business Analytics for Decision Making', institution: 'Coursera', year: '', file: c12 },
        { title: 'Business Analysis Fundamentals', institution: 'Coursera', year: '', file: c12 },
        { title: 'Extract, Transform and Load Data in Power BI', institution: 'Coursera', year: '', file: c12 },
    ];

    const handleDownload = (file, fileName) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = fileName;
        link.click();
    };

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
                            Despite challenging circumstances, I pursued self-study in Data analysis.
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
                            <h4
                                className="h4 timeline-item-title"
                                onClick={() => setPreviewFile(cert.file)}
                                style={{ cursor: 'pointer'}}
                            >
                                {cert.title}
                            </h4>
                            <span>{cert.institution}</span>
                            <span>{cert.year}</span>
                            <button
                                onClick={() => handleDownload(cert.file, cert.fileName)}
                                className="download-button"
                            >
                                Download
                            </button>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Conditionally render OpenPreview for previewed file inside preview overlay */}
            {previewFile && (
                <div className="preview-overlay">
                    <div className="preview-modal">
                        <button onClick={() => setPreviewFile(null)} className="close-button">Close</button>
                        <OpenPreview file={previewFile} />
                    </div>
                </div>
            )}
        </article>
    );
}

ResumeSec.propTypes = {
    classN: PropTypes.string,
};
