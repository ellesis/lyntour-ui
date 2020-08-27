// import App from 'next/app';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

// MyApp.getInitialProps = async (context) => {
//   const initialProps = App.getInitialProps && (await App.getInitialProps(context));
//   return { pageProps: { appData: 'Hello _App component', ...initialProps.pageProps } };
// };

export default MyApp;
