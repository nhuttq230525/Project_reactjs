import './Header.css';
function Header() {
    return (
        <header className="header">
            <h1 className="header-logo">VINTEA <img src="/images/linhvat.jpg" alt="Vintea icon" className="logo-icon" /> </h1> 
            <nav className="header-nav">
                <a href="/">Trang chủ</a>
                <a href="/products">Sản phẩm</a>
                <a href="/about">Giới thiệu</a>
                <a href="/contact">Liên hệ</a>
            </nav>
        </header>
    );
}

export default Header;