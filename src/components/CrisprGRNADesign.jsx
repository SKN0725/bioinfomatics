import React from 'react'
import './Crispr.css';
import scissorsbw from '../pic/scissorsbw.png';

export default function CrisprGRNADesign() {
  return (
   <div className="crispr-wrap">
      <div className="crispr-card">
        <div className="crispr-head">
          <h3 className="crispr-title">
            <img src={scissorsbw} style={{height:15}}/>&nbsp;CRISPR gRNA Design & Validation
          </h3>
          <p className="crispr-desc">
            Design guide RNAs for genome editing with efficiency scoring and off-target prediction
          </p>
        </div>

        <div className="crispr-body">
          {/* Input Section */}
          <div className="crispr-inputs">
            <div className="crispr-field">
              <label htmlFor="target" style={{marginTop:9}}>Target Gene Sequence (DNA)</label>
              <textarea
                id="target"
                placeholder="Enter target DNA sequence..."
                rows={2.4}
                className="crispr-textarea"
              />
              <p className="crispr-note">Length: 0 bp</p>
            </div>

            <div className="crispr-field">
              <label htmlFor="cas-type">Cas Enzyme Type</label>
              <select id="cas-type" className="crispr-select">
                <option value="Cas9">Cas9 (PAM: NGG)</option>
                <option value="Cas12a">Cas12a/Cpf1 (PAM: TTTV)</option>
                <option value="Cas13">Cas13 (RNA targeting)</option>
              </select>
            </div>

            <button className="crispr-btn">Design gRNA Candidates</button>
          </div>

        
        

            {/* Guidelines */}
            <div className="crispr-alert">
              <p className="crispr-strong">How to use:</p>
              <ol style={{marginTop:-7}}>
                <li>Enter your target DNA sequence (at least 50 bp)</li>
                <li>Select the Cas enzyme type (default: Cas9)</li>
                <li>Click "Design gRNA Candidates" to find PAM sites</li>
                <li>Review scored gRNAs with efficiency and off-target predictions</li>
                <li>Export top candidates for experimental validation</li>
              </ol>
            </div>
          </div>
        </div>
    </div>
  )
}

