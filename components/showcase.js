import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

import Link from 'next/link';

export default function Showcase() {
    return (
            <div className="showcase container grid">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
                <div class="showcase-text">
                    <h1>Now Covering Multiple Worlds' Worth of News</h1>
                    <p>We've expanded our horizons! NT News will now deliver you news from <b>around</b> the realms!</p>
                    <Link href="./posts/worldwide-reports">Read More...</Link>
                </div>
                <i class="fas fa-newspaper fa-8x"></i>
            </div>
    );
}
 