import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export function EditContact() {
  return (
    <>
      <PageHeader title="Edite Nome Completo" />

      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
