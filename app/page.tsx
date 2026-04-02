export default function Portfolio() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "5px" }}>
        Alicia Al-Mansaray
      </h1>

      <p style={{ color: "gray", marginBottom: "30px" }}>
        Cybersecurity Student | Future Medical Device Security Engineer
      </p>

      <hr />

      <h2 style={{ marginTop: "30px" }}>About Me</h2>
      <p>
        I am a cybersecurity student with experience in system security,
        networking, and vulnerability analysis. I am passionate about protecting
        patient data and securing healthcare systems.
      </p>

      <h2 style={{ marginTop: "30px" }}>Skills</h2>
      <ul>
        <li>Java</li>
        <li>Python</li>
        <li>C</li>
        <li>Linux & Networking</li>
        <li>Cybersecurity Analysis</li>
      </ul>

      <h2 style={{ marginTop: "30px" }}>Projects</h2>

      <div style={{ marginBottom: "15px" }}>
        <strong>Linux Kernel Module</strong>
        <p>
          Developed a module for real-time health monitoring and system
          performance tracking.
        </p>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <strong>Privilege Escalation Lab</strong>
        <p>
          Simulated a SUID misconfiguration attack on Ubuntu to demonstrate
          privilege escalation vulnerabilities.
        </p>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <strong>UDP Chat Application</strong>
        <p>
          Built a client-server chat system using Python and UDP sockets.
        </p>
      </div>

      <h2 style={{ marginTop: "30px" }}>Links</h2>
      <ul>
        <li>
          GitHub:{" "}
          <a href="https://github.com/aamansaray0" target="_blank">
            github.com/aamansaray0
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/alicia-al-mansaray-85b4a8360/"
            target="_blank"
          >
            linkedin.com/in/alicia-al-mansaray
          </a>
        </li>
      </ul>

      <hr style={{ marginTop: "30px" }} />

      <p style={{ fontSize: "14px", color: "gray" }}>
        © 2026 Alicia Al-Mansaray
      </p>
    </div>
  );
}