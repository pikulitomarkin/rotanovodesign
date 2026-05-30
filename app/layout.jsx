import { Inter, Archivo_Black } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const archivo = Archivo_Black({ weight: '400', subsets: ['latin'], variable: '--font-archivo' });

export const metadata = {
  title: 'Melhor Estúdio de Tatuagens em Copacabana | Rota da Tattoo Rio de Janeiro Brasil',
  description: 'Procurando tatuagem em Copacabana, Rio de Janeiro? O Studio Rota da Tattoo é referência com +1000 avaliações 5 estrelas. Agende agora!',
  keywords: ['Tatuagens em Copacabana', 'Tattoo Rio de Janeiro', 'Estúdio de Tatuagem Copacabana', 'Tatuador Copacabana', 'Brasil', 'Piercing Copacabana', 'Melhor estúdio de tattoo RJ'],
  openGraph: {
    title: 'Melhor Estúdio de Tatuagem em Copacabana | Rota da Tattoo',
    description: 'Referência em tatuagens no Rio de Janeiro. +1000 clientes satisfeitos.',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="google-site-verification" content="" />
        <script src="https://www.google.com/recaptcha/api.js?render=6LcifQMtAAAAAIFPlNlJV5uy8Ypi_yCDa-RkItvi" async defer></script>
      </head>
      <body className={`${inter.variable} ${archivo.variable}`}>
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        {children}
        
        <Script id="google-translate-init" strategy="lazyOnload">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'pt', includedLanguages: 'pt,en,es', autoDisplay: false}, 'google_translate_element');
            }
          `}
        </Script>
        <Script 
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}
