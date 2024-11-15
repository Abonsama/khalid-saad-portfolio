import { useState } from 'react';
import PropTypes from 'prop-types';
import OpenPreview from './OpenPreview'; // Import OpenPreview component
import image1 from '../assets/screenshot1.png';
import image2 from '../assets/screenshot2.png';
import image3 from '../assets/screenshot3.png';
import image4 from '../assets/screenshot4.png';
import amazon from '../assets/amazon prime.pdf';
import amazonFile from '../assets/amazon prime.pbix';
import hr from '../assets/HR.pdf';
import hrFile from '../assets/HR.pbix';
import sudan from '../assets/sudan displacment.pdf';
import sudanFile from '../assets/sudan displacment.pbix';
import goodFile from '../assets/goodread.pbix';
import good from '../assets/good read.pdf';
import './PreviewOverlay.css';

export default function PortfolioSec({ classN }) {
    const [previewFile, setPreviewFile] = useState(null);
    const [downloadFile, setDownloadFile] = useState(null);

    const projects = [
        { title: 'Amazon Prime', category: 'Data Analysis', image: image2, file: amazon, downloadFile: amazonFile },
        { title: 'HR', category: 'Data Analysis', image: image4, file: hr, downloadFile: hrFile },
        { title: 'Sudan Displacement', category: 'Data Analysis', image: image1, file: sudan, downloadFile: sudanFile },
        { title: 'Good Read', category: 'Data Analysis', image: image3, file: good, downloadFile: goodFile },
    ];

    const handlePreview = (file, downloadFile) => {
        setPreviewFile(file);
        setDownloadFile(downloadFile);
    };

    return (
        <article className={`portfolio ${classN}`} data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
                <ul className="project-list">
                    {projects.map((project, index) => (
                        <li key={index} className="project-item active" data-filter-item data-category={project.category}>
                            <div onClick={() => handlePreview(project.file, project.downloadFile)} style={{ cursor: 'pointer' }}>
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.category}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Conditionally render OpenPreview with blur effect */}
            {previewFile && (
                <div className="preview-overlay">
                    <div className="preview-modal">
                        <OpenPreview file={previewFile} />
                        <div className="button-container">
                            <button className="close-button" onClick={() => setPreviewFile(null)}>
                                Close Preview
                            </button>
                            <button 
                                className="download-button" 
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = downloadFile;
                                    link.download = decodeURIComponent(downloadFile.split('/').pop());
                                    link.click();
                                }}
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
}

PortfolioSec.propTypes = {
    classN: PropTypes.string,
};
