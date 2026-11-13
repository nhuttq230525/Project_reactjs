import './Footer.css';
function Footer() {
    return (
        <div className="container-footer">
            <div className="footer-all">
                <div className="footer-left-img">
                    <img src="/images/linhvat.jpg" alt="Vintea Logo" className="footer-main-image" />
                </div>
                <div className="footer-logo">
                    <h2 style={{ color: "#fff" }}>VINTEA</h2>
                    <p style={{ color: "#fff" }}>Good coconuts, Good mood!</p>
                    <div className="social-icons">
                        <img src="/images/ic_fb.png" alt="Facebook" className="footer-icon" />
                        <img src="/images/ic_ins.jpg" alt="Instagram" className="footer-icon" />
                        <img src="/images/ic_tiktok.jpg" alt="TikTok" className="footer-icon" />
                        <img src="/images/ic_twitter.jpg" alt="Twitter" className="footer-icon" />
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-menu">
                    <h3 style={{ marginBottom: "10px" }}>SẢN PHẨM</h3>
                    <p>Trà sữa</p>
                    <p>Oolong</p>
                    <p>Nước dừa</p>
                    <p>Cà phê</p>
                    <p>Hồng tươi</p>
                </div>

                <div className="footer-info">
                    <h3 style={{ marginBottom: "10px" }}>VỀ VINTEA</h3>
                    <p>Câu chuyện thương hiệu</p>
                    <p>Tin tức</p>
                    <p>Tuyển dụng</p>
                    <p>Đối tác</p>
                </div>

                <div className="footer-support">
                    <h3 style={{ marginBottom: "10px" }}>HỖ TRỢ KHÁCH HÀNG</h3>
                    <p className="footer-item">
                        <img src="/images/icon_phone.jpg" alt="Phone" className="footer-line-icon" />
                        1900 1234
                    </p>
                    <p className="footer-item">
                        <img src="/images/icon_gmail.png" alt="Email" className="footer-line-icon" />
                        hello@vintea.vn
                    </p>
                    <p className="footer-item">
                        <img src="/images/icon_clock.png" alt="Clock" className="footer-line-icon" />
                        8:00 - 22:00 (T2 - CN)
                    </p>
                </div>
            </div>
            <div className="QR-code">
                <h3 style={{ color: "#fff" }} >TẢI ỨNG DỤNG</h3>
                <img src="/images/qa-code.png" alt="QR Code" className="footer-qr" />
            </div>
        </div>

    )
}
export default Footer;