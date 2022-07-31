import './App.css';
import "antd/dist/antd.css";
import { Button, Image } from 'antd';
import imageHeader from './Image/MBBank.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className='Span-Header'>SAU ĐÂY LÀ MỘT SỐ NGÂN HÀNG BẠN NÊN ĐĂNG KÝ TÀI KHOẢN</span>
        <span style={{color: 'gray', fontSize: 14}}>ĐĂNG KÝ NGAY ĐỂ KHỎI BỎ LỞ NHIỀU ƯU ĐÃI KHI THANH TOÁN BẰNG MB BANK</span>
        <div className="App-Footer">
          <div className='Footer-image'>
          <Image width={'50%'} src={imageHeader}/>
          </div>
          <div className='Footer-body'>
          <span className='Span-Header'>MBBank (Android)</span>
          <br />
          <span className='Span-Body'>Giới thiệu nhiều, Nhận tiền triệu</span>
          <br/>
          <span style={{color: 'gray', fontSize: 14}}>Phone xài số nào, Bank sài số đó</span>
          <br/>
          <span style={{color: 'gray', fontSize: 14}}>Giao dịch khỏi nghỉ mất tiền MB Chi</span>
          <br/>
          <Button type="primary" style={{borderRadius: 5}}  onClick={() => {
             window.location.href = 'https://shorten.asia/FjmBv1EB';
          }} className={'Button-Footer'}>
            Đăng ký ngay
          </Button>
          </div>
        </div>

        <div className="App-Footer">
          <div className='Footer-image'>
          <Image width={'50%'}  src={imageHeader}/>
          </div>
          <div className='Footer-body'>
          <span className='Span-Header'>MBBank (IOS)</span>
          <br />
          <span className='Span-Body'>Giới thiệu nhiều, Nhận tiền triệu</span>
          <br/>
          <span style={{color: 'gray', fontSize: 14}}>Phone xài số nào, Bank sài số đó</span>
          <br/>
          <span style={{color: 'gray', fontSize: 14}}>Giao dịch khỏi nghỉ mất tiền MB Chi</span>
          <br/>
          <Button type="primary" style={{borderRadius: 5}} onClick={() => {
             window.location.href = 'https://shorten.asia/FjmBv1EB';
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
