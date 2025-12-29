import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <AppWrapper>
        <App />
      </AppWrapper>
    </HashRouter>
  </StrictMode>
);
