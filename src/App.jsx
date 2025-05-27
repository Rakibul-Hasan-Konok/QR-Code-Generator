import { Navbar, Container, Nav } from "react-bootstrap";
import navLogo from "./assets/images/logo.png";
import { useState } from "react";
import QRCode from "qrcode.react";

const App = () => {
  const [input, setInput] = useState("https://www.google.com");

  const downloadImage = () => {
    const canvas = document.querySelector("canvas");
    const imageDataURI = canvas.toDataURL("image/png");
    const el = document.createElement("a");
    el.href = imageDataURI;
    el.download = "qr-code.png";
    el.click();
  };

  return (
    <>
      {/* Header */}
      <Navbar bg="gray" expand="lg" className="shadow-sm py-3 fixed-top">
        <Container>
          <Navbar.Brand className="d-flex align-items-center gap-2">
            <img src={navLogo} alt="Logo" height="40" />
            <span className="fw-bold fs-4 text-primary">QR Code Generator</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div className="main-content">
        <Container className="text-center py-5" style={{ marginTop: "100px" }}>
          <h2 className="mb-4 fw-bold text-primary">Create Your QR Code</h2>
          <p className="text-muted mb-4">
            Enter a URL or any text below to generate your QR code instantly.
          </p>

          <div className="col-md-6 mx-auto">
            <input
              type="url"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control form-control-lg shadow-sm mb-4"
              placeholder="Enter URL or text..."
            />

            {input && (
              <>
                <div className="my-4">
                  <QRCode value={input} size={200} level="H" />
                </div>
                <button
                  className="btn btn-lg btn-outline-primary shadow-sm"
                  onClick={downloadImage}
                >
                  Download QR Code
                </button>
              </>
            )}
          </div>
        </Container>
      </div>

      {/* Footer */}
      <footer className="footer bg-white text-center text-muted py-3 shadow-sm">
        <Container>
          <small>
            &copy; {new Date().getFullYear()} QR Code Generator by Rokibul Konok. All rights reserved.
          </small>
        </Container>
      </footer>
    </>
  );
};

export default App;
