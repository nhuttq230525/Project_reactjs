import './Banner.css';

function Banner() {

    const scrollToProducts = () => {
        const section = document.getElementById('featured-products');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section">

            <div className="hero-content">
                <span className="hero-badge"> THƯƠNG HIỆU NƯỚC DỪA</span>
                <h1 className="hero-title">
                    <span className="highlight-text"> HƯƠNG VỊ NƯỚC DỪA THANH MÁT</span>
                </h1>
                <p className="hero-desc">
                    Thưởng thức những ly trà sữa và nước dừa tươi ngon, đậm vị mỗi ngày cùng <strong>VINTEA</strong>. Đánh thức năng lượng tích cực cho bạn!
                </p>
                <button className="hero-btn" onClick={scrollToProducts}>
                    Khám phá ngay ➔
                </button>
            </div>

            <div className="hero-image-wrapper">
                <img src="/images/banner-vin.jpg" alt="Vintea Banner" className="hero-image" />
            </div>
        </section>
    );
}

export default Banner;