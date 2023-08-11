import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout =() => {
    return (
    <div className='App'>
    <Sidebar />
    <div className='page'>
<span className='tags top-tags'>
&lt;Salvete!&gt;
</span>

<Outlet />
<span className='tags bottom-tags'>
&lt;Bye-bye!&gt;
<br />
<span className='bottom-tag-html'> &lt;До свидания!&gt;</span>
</span>

    </div>
    </div>
    )
}

export default Layout;