import Input from '../../components/Input';
import { PageHeader } from '../../components/PageHeader';
import Select from '../../components/Select';

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />

      <Input placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
      </Select>
    </>
  );
}
