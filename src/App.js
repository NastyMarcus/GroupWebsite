//INTL
import { IntlProvider, useIntl } from 'react-intl';
import enUS from './locales/en-US.json'
import zhCN from './locales/zh-CN.json'

//路由
import { BrowserRouter as Routes,useNavigate,useRoutes } from 'react-router-dom';

//redux
import { useDispatch,useSelector } from 'react-redux';
//组件
import Header from './Component/Header';
import Index from './Router/index'
import NavBar from './Component/NavBar';
function App() {
  const {lang}  = useSelector(store=>store.demo);
  console.log(lang);
  return (
    <IntlProvider locale={lang} messages={lang === 'en-US' ? enUS : zhCN}>
      <Routes>
        <Header></Header>
        <NavBar></NavBar>
        <Index></Index>
        <div className="footer" style = {{position: 'absolute' ,bottom:'1px'}}>我是底部</div>
      </Routes>
    </IntlProvider>
  );
}

export default App;