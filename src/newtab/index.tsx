import { render } from 'solid-js/web';
import './index.css';
import { WelcomeView } from './pages/welcome';

const root = document.getElementById('root');

render(() => <WelcomeView />, root!);
