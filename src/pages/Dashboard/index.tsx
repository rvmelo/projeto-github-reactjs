import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="https://i.pinimg.com/originals/42/6b/a0/426ba0f9ccadea6071dff4e36ffab271.jpg">
          <img
            src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/122191642_1644431599061298_3475507085942351952_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=MWFFYt7DEyoAX8ULeXj&oh=a0e6425eea0193efbd853517d05c396e&oe=5FC5E307"
            alt="Ana Bruna"
          />
          <div>
            <strong>youtuber app</strong>
            <p>Youtuber app to get youtube data</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="https://i.pinimg.com/originals/42/6b/a0/426ba0f9ccadea6071dff4e36ffab271.jpg">
          <img
            src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/122191642_1644431599061298_3475507085942351952_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=MWFFYt7DEyoAX8ULeXj&oh=a0e6425eea0193efbd853517d05c396e&oe=5FC5E307"
            alt="Ana Bruna"
          />
          <div>
            <strong>youtuber app</strong>
            <p>Youtuber app to get youtube data</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="https://i.pinimg.com/originals/42/6b/a0/426ba0f9ccadea6071dff4e36ffab271.jpg">
          <img
            src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/122191642_1644431599061298_3475507085942351952_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=MWFFYt7DEyoAX8ULeXj&oh=a0e6425eea0193efbd853517d05c396e&oe=5FC5E307"
            alt="Ana Bruna"
          />
          <div>
            <strong>youtuber app</strong>
            <p>Youtuber app to get youtube data</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
