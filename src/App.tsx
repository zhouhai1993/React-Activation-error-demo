/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-22 15:59:05
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-23 13:37:52
 */

// routing
import Routes from './routes';

// project imports
import FrontendAuth from './pages/Layout/FrontendAuth ';
import { AliveScope } from 'react-activation'

// ==============================|| APP ||============================== //

const App = () => {

  return (
    <AliveScope>
      <FrontendAuth>
        <Routes />
      </FrontendAuth>
    </AliveScope>
  );
};

export default App;
