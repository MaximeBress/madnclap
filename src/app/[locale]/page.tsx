import type { Metadata } from 'next';

import { Home as HomeSection } from '@/components/Home';
import { About } from '@/components/About';
import { Contact } from '@/components/ContactForm';
import { Achievements } from '@/components/Achievements';

export const metadata: Metadata = {
  title: "Mad'nClap - Création de Contenu Multimédia de Haute Qualité",
  description:
    "Découvrez Mad'nClap, votre partenaire pour la création de contenu multimédia. Nous combinons technicité, style et maîtrise pour des résultats exceptionnels. Contactez-nous dès aujourd'hui !",
};
export default function Home() {
  return (
    <div className="shrink-0 grow">
      <HomeSection />
      <About />
      <Achievements />
      <Contact />
    </div>
  );
}
