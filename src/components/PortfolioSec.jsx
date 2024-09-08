import PropTypes from 'prop-types';
import image from '../assets/analytics.svg';
import amazon from '../assets/amazon prime.pbix';
import hr from '../assets/HR.pbix';
import Sudan from '../assets/sudan displacment.pbix';
import good from '../assets/goodread.pbix';

export default function PortfolioSec({ classN }) {
    return (
        <article className={`portfolio ${classN}`} data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
                <ul className="filter-list">
                    <li className="filter-item">
                        <button className="active" data-filter-btn>All</button>
                    </li>
                </ul>
                <ul className="project-list">
                    <li
                        className="project-item active"
                        data-filter-item
                        data-category="Data Analysis"
                    >
                        <a
                            target="_self"
                            href={amazon}
                            download="Amazon Prime.pbix"
                        >
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>
                                <img
                                    src={image}
                                    alt="Amazon Prime"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Amazon Prime.pbix</h3>
                            <p className="project-category">Data Analysis</p>
                        </a>
                    </li>
                    <li
                        className="project-item active"
                        data-filter-item
                        data-category="Data Analysis"
                    >
                        <a
                            target="_self"
                            href={good}
                            download="Good Read.pbix"
                        >
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>
                                <img
                                    src={image}
                                    alt="Good Read"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Good Read.pbix</h3>
                            <p className="project-category">Data Analysis</p>
                        </a>
                    </li>
                    <li
                        className="project-item active"
                        data-filter-item
                        data-category="Data Analysis"
                    >
                        <a
                            target="_self"
                            href={hr}
                            download="HR.pbix"
                        >
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>
                                <img
                                    src={image}
                                    alt="HR"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">HR.pbix</h3>
                            <p className="project-category">Data Analysis</p>
                        </a>
                    </li>
                    <li
                        className="project-item active"
                        data-filter-item
                        data-category="Data Analysis"
                    >
                        <a
                            target="_self"
                            href={Sudan}
                            download="Sudan Displacement.pbix"
                        >
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>
                                <img
                                    src={image}
                                    alt="Sudan Displacement"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Sudan Displacement.pbix</h3>
                            <p className="project-category">Data Analysis</p>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
}

PortfolioSec.propTypes = {
    classN: PropTypes.string,
};
