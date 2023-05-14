import { render } from 'solid-js/web';
import { WelcomeView } from './pages/welcome/index.jsx';
import './index.css';

function bootstrap() {
  const root = document.getElementById('root');

  console.log('');
  render(
    () => (
      <div class='max-h-[30rem] overflow-auto'>
        <WelcomeView />
      </div>
    ),
    root!
  );
}

bootstrap();
