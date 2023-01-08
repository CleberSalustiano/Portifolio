import Global from "./global";

const MyApp = ({Component, pageProps}) => {
  return (
    <>
      <Component {...pageProps} />
      <Global />
    </>
  ) ;
}

export default MyApp;