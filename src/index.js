import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './routes/about';
import GetInvolved from './routes/getInvolved';
import './index.css';
import Podcast from './routes/podcast';
import MeetTheTeam from './routes/meetTheTeam';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='about' element={<About />}></Route>
        <Route path='about/meet-the-team' element={<MeetTheTeam />}></Route>
        <Route path='get-involved' element={<GetInvolved />}></Route>
        <Route
          path='get-involved/podcast'
          element={<Podcast></Podcast>}
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
