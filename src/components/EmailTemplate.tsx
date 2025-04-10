import * as React from 'react';

import { ContactFormData } from '@/typing';

export const EmailTemplate = ({ name, email, message }: ContactFormData) => (
  <div>
    <h3>Vous avez un nouveau message provenant du formulaire de contact du site MadNClap</h3>
    <p>{`Nom: ${name}`}</p>
    <p>{`Email: ${email}`}</p>
    <p dangerouslySetInnerHTML={{ __html: message }} />
  </div>
);
