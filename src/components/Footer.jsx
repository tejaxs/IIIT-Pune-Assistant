export const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper-footer">
        <div className="quick-links">
            <h2 className="footer-title">Quick Links</h2>
            <div className="footer-hr"></div>
            <div className="quick-title-ul">
                <span className="quick-title-elements">STUDENT GRIEVANCE REDRESSEL</span>
                <span className="quick-title-elements">COMMITTEE</span>
                <span className="quick-title-elements">ICC</span>
                <span className="quick-title-elements">EOC</span>
                <span className="quick-title-elements">NIRF</span>
                <span className="quick-title-elements">IIITP App</span>
                <span className="quick-title-elements">Contact Us</span>
            </div>
        </div>
        <div className="quick-links">
            <h2 className="footer-title">Locate Us</h2>
            <div className="footer-hr"></div>
            <p className="para">Indian Institute of Information Technology (IIIT) Pune
                Survey No. - 9/1/3. . Ambegaon Budruk,
                Sinhgad Institute Road Pune 411041</p>
        </div>
      </div>
      <div className="lower-footer">
            Copyright © 2021 - All Rights Reserved - IIIT Pune
      </div>
    </footer>
  );
}
