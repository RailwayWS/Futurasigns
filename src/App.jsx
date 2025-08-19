import { PrimeReactProvider } from 'primereact/api';
import { Menubar } from 'primereact/menubar';

const items = [
  { label: 'Home', icon: 'pi pi-home' },
  { label: 'About', icon: 'pi pi-info-circle' },
  { label: 'Contact', icon: 'pi pi-envelope' },
];

export default function App() {
  return (
    <PrimeReactProvider>
      <Menubar model={items} />
      <div style={{ padding: '1rem' }}>
        <h1>Hello PrimeReact!</h1>
      </div>
    </PrimeReactProvider>
  );
}
