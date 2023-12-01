import React from 'react';
import {Permanent_Marker} from 'next/font/google'

const font = Permanent_Marker({subsets: ['latin'], weight:'400'})

export default function Title() {
    return (
        <div className="flex items-center justify-center">
            <div className={font.className}>
                <h3>Catch the Creatures!</h3>
            </div>
        </div>
        );
}
