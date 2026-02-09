import logo1 from './pic/logo1.png';
import dna from './pic/dna.png';
import microscope from './pic/microscope.png';
import brain from './pic/brain.png';
import scissor from './pic/scissor.png';
import flask from './pic/flask.png';
import dnabw from './pic/dnabw.png';
import microscopebw from './pic/microscopebw.png';
import scissorbw from './pic/scissorsbw.png';
import brainbw from './pic/brainbw.png';
import flaskbw from './pic/flaskbw.png';
import problem from './pic/problem.png';
import SequenceAnalysis from './components/SequenceAnalysis';

import './App.css';
import { useState } from 'react';


function App() {
  const [activeTab, setActiveTab] = useState("sequence");
  return (
    <>
    <div className="page-wrapper">
      {/*Header*/}
      <div className="container-fluid header" id="header1">
        <img src={logo1} alt='logo'className='header-logo'/>
        <div className="header-text">
        <h4>Bioinformatics Platform</h4>
        <p>Comprehensive tools for sequnece analysis, protein studies, and genome editing</p>
        </div>
      </div>
      <div className="page-wrapper">
  {/* ================= TABS ================= */}
  
<div className="tabs-container">
  <div className="tabs">
    <button
  className={`tab sequence ${activeTab === "sequence" ? "active" : ""}`}
  onClick={() => setActiveTab("sequence")}
>
  <img src={dnabw} className="tabimg" />
  <span>Sequence Analysis</span>
</button>

<button
  className={`tab protein ${activeTab === "protein" ? "active" : ""}`}
  onClick={() => setActiveTab("protein")}
>
  <img src={microscopebw} className="tabimg" />
  <span>Protein Module</span>
</button>

<button
  className={`tab crispr ${activeTab === "crispr" ? "active" : ""}`}
  onClick={() => setActiveTab("crispr")}
>
  <img src={scissorbw} className="tabimg" />
  <span>CRISPR Design</span>
</button>

<button
  className={`tab lims ${activeTab === "lims" ? "active" : ""}`}
  onClick={() => setActiveTab("lims")}
>
  <img src={flaskbw} className="tabimg" />
  <span>Lab Management</span>
</button>

<button
  className={`tab ai ${activeTab === "ai" ? "active" : ""}`}
  onClick={() => setActiveTab("ai")}
>
  <img src={brainbw} className="tabimg" />
  <span>Data Intelligence</span>
</button>
  </div>
  
  <div className="tab-content">
    
    <div ><img src={problem}/></div><div id='act-tab'>
    {activeTab === "sequence" && <h6>DNA/RNA/Protein Sequence Analysis</h6>}
    {activeTab === "protein" && <h6>3D Protein Visualization & Properties</h6>}
    {activeTab === "crispr" && <h6>CRISPR gRNA Design & Validation</h6>}
    {activeTab === "lims" && <h6>Laboratory Information Management System</h6>}
    {activeTab === "ai" && <h6>ML-Powered Data Intelligence</h6>}
    {activeTab === "sequence" && <p>Convert sequences, find ORFs, detect mutations, calculate GC content, and analyze FASTA files. Essential tools for molecular biology and genetics research.</p>}
    {activeTab === "protein" && <p>Visualize protein structures in 3D, predict secondary structure, calculate molecular weight, isoelectric point, and hydrophobicity. Upload PDB files for advanced analysis.</p>}
    {activeTab === "crispr" && <p>Design guide RNAs for CRISPR-Cas9 genome editing. Automatically detect PAM sites, score efficiency, and predict off-target effects for optimal gene editing.</p>}
    {activeTab === "lims" && <p>Organize experiments, track samples, maintain digital lab notebooks, and manage research data. Export records for documentation and collaboration.</p>}
    {activeTab === "ai" && <p>Discover biomarkers using machine learning, predict disease risk from genetic data, and analyze drug-gene interactions for precision medicine.</p>}
    </div>
  </div>
</div>
{/*Module containers*/}
<SequenceAnalysis/>


  <div id="cards" className='container'>
    <div id='card1'>
      <img src={dna} className='crdimg'/>
      <h3>10+</h3>
      <p className='crdTxt'>Sequence Tools</p>
    </div>
    <div id='card2'>
      <img src={microscope} className='crdimg'/>
      <h3>3D</h3>
      <p className='crdTxt'>Protein Viz</p>
    </div>
    <div id='card3'>
      <img src={scissor} className='crdimg' />
      <h3>Cas9/12</h3>
      <p className='crdTxt'>CRISPR Design</p>
    </div>
    <div id='card4'>
      <img src={flask} className='crdimg'/>
      <h3>Digital</h3>
      <p className='crdTxt'>Lab Notebook</p>
    </div>
    <div id='card5'>
      <img src={brain} className='crdimg'/>
      <h3>ML</h3>
      <p className='crdTxt'>Al Analysis</p>
    </div>
  </div>
  </div>
      {/*Footer*/}
      <footer className="fixed-footer">
        <div className="footer-content">
          <div className='footerdiv'>
            <h5>About</h5>
            <p>Comprehensive bioinformatics platform for students, researchers, and labs.
              Tools for sequence analysis, protein studies, genome editing, and data-driven discoveries.
            </p>
          </div>

          <div className='footerdiv'>
            <h5>Features</h5>
            <ul>
              <li>• DNA/RNA/Protein sequence manipulation</li>
              <li>• 3D protein visualization & analysis</li>
              <li>• CRISPR gRNA design with scoring</li>
              <li>• Digital lab notebook (LIMS)</li>
              <li>• ML-powered biomarker discovery</li>
            </ul>
          </div>

          <div className='footerdiv'>
            <h5>Resources</h5>
            <ul>
              <li>• Education tool for learning bioinformatics</li>
              <li>• Research-grade algorithms</li>
              <li>• Export data for further</li>
              <li>• Mock data for demonstrations</li>
            </ul>
          </div>
          <hr />
          <div className="footer-bottom">
            <p>BioInformatics Platform © 2026 | Built for research and educational purposes </p>

          </div>

        </div>
      </footer>
</div>
    </>
  );
}

export default App;
