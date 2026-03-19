import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Skills", "Contact"];

const SKILLS = [
  { name: "Core Java", icon: "☕" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "VS Code", icon: "💻" },
  { name: "Git & GitHub", icon: "🐙" },
];

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <header style={{ ...styles.header, ...(scrolled ? styles.headerScrolled : {}) }}>
        <div style={styles.logo}>
          <span style={styles.logoText}>Aman</span>
          <span style={styles.logoName}>Portfolio</span>
        </div>
        <nav style={styles.nav}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                ...styles.navBtn,
                ...(active === link ? styles.navBtnActive : {}),
              }}
            >
              {link}
            </button>
          ))}
        </nav>
      </header>

      {/* Home */}
      <section id="home" style={styles.home}>
        <div style={styles.homeBg} />
        <div style={{ ...styles.homeContent, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.9s ease" }}>
          <div style={styles.badge}>👋 Welcome</div>
          <h1 style={styles.heroName}>Aman Badodiya</h1>
          <p style={styles.heroSub}>BCA 2nd Year Student</p>
          <p style={styles.heroRole}>✦ Aspiring Full Stack Developer ✦</p>
          <div style={styles.heroBtns}>
            <button onClick={() => scrollTo("Contact")} style={styles.btnPrimary}>Contact Me</button>
            <button onClick={() => scrollTo("Skills")} style={styles.btnOutline}>View Skills</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={styles.about}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={styles.divider} />
          <div style={styles.aboutCard}>
            <div style={styles.avatarCircle}>🧑‍💻</div>
            <div style={styles.aboutText}>
              <p style={styles.aboutPara}>
                Hello! My name is <strong>Aman Badodiya</strong>. I am a BCA 2nd year student
                with a strong interest in Software Development and Web Technologies.
              </p>
              <p style={styles.aboutPara}>
                Currently I am learning <strong>Core Java</strong>, <strong>HTML</strong> & <strong>CSS</strong>.
              </p>
              <p style={styles.aboutPara}>
                My goal is to become a <strong>Full Stack Developer</strong> and build efficient web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={styles.skills}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <div style={styles.divider} />
          <div style={styles.skillsGrid}>
            {SKILLS.map((skill, i) => (
              <div
                key={skill.name}
                style={{
                  ...styles.skillCard,
                  animationDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #4d99e0, #6bb8f5)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(77,153,224,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "#222";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                }}
              >
                <span style={styles.skillIcon}>{skill.icon}</span>
                <span style={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.contact}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <div style={styles.divider} />
          <div style={styles.contactGrid}>
            {[
              { icon: "📞", label: "Phone", value: "+91 7987018341", href: "tel:+917987018341" },
              { icon: "📍", label: "Location", value: "Harda, Madhya Pradesh", href: null },
              { icon: "📧", label: "Email", value: "amanb.bca2025@ssism.org", href: "mailto:amanb.bca2025@ssism.org" },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/amanbadodiya", href: "https://www.linkedin.com/in/amanbadodiya" },
              { icon: "🐙", label: "GitHub", value: "github.com/amanbadodiya", href: "https://github.com/amanbadodiya" },
            ].map((item) => (
              <div key={item.label} style={styles.contactCard}>
                <span style={styles.contactIcon}>{item.icon}</span>
                <div>
                  <div style={styles.contactLabel}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={styles.contactValue} target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <div style={styles.contactValuePlain}>{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>©2026 Aman Badodiya</p>
      </footer>
    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily: "'Segoe UI', sans-serif",
    margin: 0,
    padding: 0,
    color: "#222",
    background: "#fff",
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 4px",
    background: "rgba(77,153,224,0.95)",
    backdropFilter: "blur(10px)",
    transition: "box-shadow 0.3s",
  },
  headerScrolled: {
    boxShadow: "0 4px 24px rgba(77,153,224,0.3)",
  },
  logo: { display: "flex", alignItems: "center", gap: 10 },
  logoText: {
    background: "#fff",
    color: "#4d99e0",
    fontWeight: 800,
    fontSize: 18,
    borderRadius: 8,
    padding: "4px 10px",
  },
  logoName: { color: "#fff", fontWeight: 700, fontSize: 20 },
  nav: { display: "flex", gap: 8 },
  navBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    padding: "8px 16px",
    borderRadius: 8,
    cursor: "pointer",
    transition: "background 0.2s",
  },
  navBtnActive: {
    background: "rgba(255,255,255,0.25)",
    fontWeight: 700,
  },
  home: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 50%, #e3f0fb 100%)",
  },
  homeBg: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 70% 50%, rgba(77,153,224,0.15) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  homeContent: {
    textAlign: "center",
    zIndex: 1,
    padding: "0 20px",
  },
  badge: {
    display: "inline-block",
    background: "rgba(77,153,224,0.12)",
    color: "#4d99e0",
    fontWeight: 500,
    fontSize: 14,
    padding: "6px 18px",
    borderRadius: 20,
    marginBottom: 20,
    border: "1px solid rgba(77,153,224,0.25)",
  },
  heroName: {
    fontSize: "clamp(2.0rem, 5vw, 99rem)",
    fontWeight: 1000,
    margin: "0 23 2px",
  color: "#4d99e0"
  },
  heroSub: {
    fontSize: 20,
    color: "#555",
    margin: "0 0 8px",
    fontWeight: 500,
  },
  heroRole: {
    fontSize: 16,
    color: "#4d99e0",
    fontWeight: 600,
    marginBottom: 36,
    letterSpacing: 1,
  },
  heroBtns: { display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" },
  btnPrimary: {
    background: "linear-gradient(135deg, #4d99e0, #2a80cc)",
    color: "#fff",
    border: "none",
    padding: "14px 32px",
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 8px 24px rgba(77,153,224,0.4)",
    transition: "transform 0.2s",
  },
  btnOutline: {
    background: "transparent",
    color: "#4d99e0",
    border: "2px solid #4d99e0",
    padding: "14px 32px",
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  about: { padding: "100px 20px", background: "#fff" },
  sectionInner: { maxWidth: 900, margin: "0 auto" },
  sectionTitle: {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    fontWeight: 800,
    textAlign: "center",
    margin: "0 0 12px",
    color: "#1a1a1a",
  },
  divider: {
    width: 60,
    height: 4,
    background: "linear-gradient(90deg, #4d99e0, #6bb8f5)",
    borderRadius: 4,
    margin: "0 auto 48px",
  },
  aboutCard: {
    display: "flex",
    gap: 40,
    alignItems: "center",
    background: "#f8fbff",
    borderRadius: 20,
    padding: 40,
    boxShadow: "0 4px 24px rgba(77,153,224,0.1)",
    flexWrap: "wrap",
  },
  avatarCircle: {
    width: 100,
    height: 100,
    background: "linear-gradient(135deg, #4d99e0, #2a80cc)",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    fontWeight: 800,
    flexShrink: 0,
    boxShadow: "0 8px 24px rgba(77,153,224,0.4)",
  },
  aboutText: { flex: 1, minWidth: 200 },
  aboutPara: { fontSize: 17, lineHeight: 1.8, color: "#444", marginBottom: 12 },
  skills: { padding: "100px 20px", background: "#f6f9ff" },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 20,
  },
  skillCard: {
    background: "#fff",
    borderRadius: 16,
    padding: "28px 20px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  skillIcon: { fontSize: 36 },
  skillName: { fontSize: 16, fontWeight: 600 },
  contact: { padding: "100px 20px", background: "#fff" },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 20,
  },
  contactCard: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    background: "#f8fbff",
    borderRadius: 16,
    padding: "24px 28px",
    boxShadow: "0 4px 16px rgba(77,153,224,0.08)",
    transition: "transform 0.2s",
  },
  contactIcon: { fontSize: 28, flexShrink: 0 },
  contactLabel: { fontSize: 13, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 },
  contactValue: { fontSize: 15, color: "#4d99e0", fontWeight: 600, textDecoration: "none", wordBreak: "break-all" },
  contactValuePlain: { fontSize: 15, color: "#333", fontWeight: 500 },
  footer: {
    background: "linear-gradient(135deg, #4d99e0, #2a80cc)",
    padding: "24px",
    textAlign: "center",
    
  },
  footerText: { color: "#fff", margin: 0, fontWeight: 500, fontSize: 15 },
};
