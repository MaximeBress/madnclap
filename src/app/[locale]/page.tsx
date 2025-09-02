import type { Metadata } from 'next';

import { Home as HomeSection } from '@/components/Home';
import { About } from '@/components/About';
import { Contact } from '@/components/ContactForm';
import { Achievements } from '@/components/Achievements';
import { Partners } from '@/components/Partners';
import axios from 'axios';
import { Suspense } from 'react';
import { Video } from '@/typing';

export const metadata: Metadata = {
    title: "Mad'nClap - Création de Contenu Multimédia de Haute Qualité",
    description:
        "Découvrez Mad'nClap, votre partenaire pour la création de contenu multimédia. Nous combinons technicité, style et maîtrise pour des résultats exceptionnels. Contactez-nous dès aujourd'hui !",
};

const fetchVideos = async (): Promise<{ data: Video[] }> => {
    const headers = {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    };
    const response = await axios.get(
        `${process.env.VIMEO_API_URL ?? ''}me/videos?per_page=100&sort=date`,
        {
            headers,
        },
    );

    return response.data;
};

export default function Home() {
    const videos = fetchVideos();

    return (
        <div className="shrink-0 grow">
            <HomeSection />
            <About />
            <Suspense fallback={<div>Loading...</div>}>
                <Achievements videos={videos} />
            </Suspense>
            <Partners />
            <Contact />
        </div>
    );
}
