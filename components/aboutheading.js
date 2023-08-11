import utilStyles from '../styles/utils.module.css';
import './layout.module.css';

export default function Showcase() {
    return (
        <div class="aboutheading container">
            <div class="showcase-text">
                <div className={`${utilStyles.headingLg} ${utilStyles.center}`}><h1>About Us</h1></div>
                <div className={`${utilStyles.headingMd} ${utilStyles.center}`}><p>Behind the minds of NT News</p></div>
            </div>
        </div>
    );
}

