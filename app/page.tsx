export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f9fafb",
        color: "#111827",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "5px" }}>
          Alicia Al
        </h1>
        <p style={{ fontSize: "18px", color: "#374151" }}>
          Cybersecurity Student | Aspiring Medical Device Security Engineer
        </p>
      </div>

      {/* MAIN CARD */}
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* ABOUT */}
        <h2>About Me</h2>
        <p>
          I am a cybersecurity student focused on protecting systems and
          healthcare technologies. I am particularly interested in securing
          medical devices and ensuring the safety of sensitive data.
        </p>

        {/* SKILLS */}
        <h2>Skills</h2>
        <ul>
          <li>Java, Python, C</li>
          <li>Linux & Networking</li>
          <li>Cybersecurity Analysis</li>
          <li>Wireshark, basic penetration testing</li>
        </ul>

        {/* PROJECTS */}
        <h2>Projects</h2>

        <h3>Linux Kernel Module</h3>
        <p><b>Problem:</b> Systems require real-time monitoring to detect threats.</p>
        <p><b>Solution:</b> Developed a Linux kernel module to monitor system activity.</p>
        <p><b>Technologies:</b> C, Linux</p>

        <h3>Privilege Escalation Lab</h3>
        <p><b>Problem:</b> Misconfigured permissions can allow attackers root access.</p>
        <p><b>Solution:</b> Built a lab demonstrating SUID-based privilege escalation.</p>
        <p><b>Technologies:</b> Ubuntu, Bash</p>

        <h3>UDP Chat Application</h3>
        <p><b>Problem:</b> Need for lightweight communication between systems.</p>
        <p><b>Solution:</b> Created a UDP-based client-server chat application.</p>
        <p><b>Technologies:</b> Python, Networking</p>

        {/* LINKS */}
        <h2>Links</h2>
        <div style={{ marginTop: "10px" }}>
          <a href="https://github.com/aamansaray0" target="_blank">
            <button style={btn}>GitHub</button>
          </a>

          <a
            href="https://www.linkedin.com/in/alicia-al-mansaray-85b4a8360/"
            target="_blank"
          >
            <button style={btn}>LinkedIn</button>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <p style={{ textAlign: "center", marginTop: "30px", color: "#6b7280" }}>
        © 2026 Alicia Al
      </p>
    </div>
  );
}

const btn = {
  padding: "10px 16px",
  marginRight: "10px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};