import './App.css';
import "antd/dist/antd.css";
import { Button, Image } from 'antd';
import imageHeader from './Image/logo192.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className='Span-Header'>SAU ĐÂY LÀ MỘT SỐ NGÂN HÀNG BẠN NÊN ĐĂNG KÝ TÀI KHOẢN</span>
        <div className="App-Footer">
          <div className='Footer-image'>
          <Image width={100} src={imageHeader}/>
          </div>
          <div className='Footer-body'>
          <span className='Span-Header'>MBBank (Android)</span>
          <br />
          <span className='Span-Body'>Giới thiệu nhiều, Nhận tiền triệu</span>
          <br/>
          <Button type="primary" onClick={() => {
             window.location.href = 'https://play.google.com/store/search?q=mb&c=apps';
          }} className={'Button-Footer'}>
            Đăng ký ngay
          </Button>
          </div>
        </div>

        <div className="App-Footer">
          <div className='Footer-image'>
          <Image width={100} src={imageHeader}/>
          </div>
          <div className='Footer-body'>
          <span className='Span-Header'>MBBank (IOS)</span>
          <br />
          <span className='Span-Body'>Giới thiệu nhiều, Nhận tiền triệu</span>
          <br/>
          <Button type="primary" onClick={() => {
             window.location.href = 'https://apps.apple.com/us/app/mb-bank/id1205807363';
          }} className={'Button-Footer'}>
            Đăng ký ngay
          </Button>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
