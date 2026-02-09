
import React, { useState } from "react";
import "./SequenceAnalysis.css";
import upload from '../pic/upload.png';
import picexport from '../pic/picexport.png';


export default function SequenceAnalysis() {
  const [activeTab, setActiveTab] = useState("converter");

  return (
    <div className="seq-page">
      <div className="seq-card">
        <h3>Sequence Analysis Module</h3>
        <p className="seq-subtitle">
          DNA/RNA/Protein analysis tools for students and researchers
        </p>

        {/* Tabs */}
        <div className="seq-tabs">
          <button
            className={activeTab === "converter" ? "seq-active" : ""}
            onClick={() => setActiveTab("converter")}
          >
            Converter
          </button>
          <button
            className={activeTab === "analysis" ? "seq-active" : ""}
            onClick={() => setActiveTab("analysis")}
          >
            Analysis
          </button>
          <button
            className={activeTab === "orf" ? "seq-active" : ""}
            onClick={() => setActiveTab("orf")}
          >
            ORF Finder
          </button>
          <button
            className={activeTab === "mutation" ? "seq-active" : ""}
            onClick={() => setActiveTab("mutation")}
          >
            Mutations
          </button>
        </div>

        {/* Converter */}
        {activeTab === "converter" && (
          <div className="seq-tab-content">
            <div className="seq-upload">
            <label>Input Sequence</label>
            <button className="seq-upload-btn"> <img src={upload} style={{height: 15}}></img>&nbsp;&nbsp;Upload FASTA</button>
            </div>
            <textarea placeholder="Enter DNA, RNA, or protein sequence..." />

            <div className="seq-btn-grid">
              <button>DNA → RNA</button>
              <button>RNA → Protein</button>
              <button>Complement</button>
              <button>Rev. Complement</button>
            </div>
            <div className="res-export">
            <label>Result</label>
            <button className="seq-full"><img src={picexport} style={{height: 15}}></img>&nbsp;&nbsp;Export Result</button>
            </div>
            <textarea readOnly placeholder="Result will appear here..." />
          </div>
        )}

        {/* Analysis */}
        {activeTab === "analysis" && (
          <div className="seq-tab-content">
            <label>Sequence for Analysis</label>
            <textarea placeholder="Enter sequence..." />

            <button className="seq-full-GC">Calculate GC Content</button>

            <label>Result</label>
            <textarea readOnly placeholder="GC Content result..." />
          </div>
        )}

        {/* ORF Finder */}
        {activeTab === "orf" && (
          <div className="seq-tab-content">
            <label>DNA Sequence</label>
            <textarea placeholder="Enter DNA sequence..." />

            <button className="seq-full-orf">Find Open Reading Frames</button>

            <label>Detected ORFs</label>
            <textarea readOnly placeholder="ORFs will appear here..." />
          </div>
        )}

        {/* Mutations */}
        {activeTab === "mutation" && (
          <div className="seq-tab-content">
            <div className="seq-mutation-grid">
              <div>
                <label style={{marginBottom:6}}>Reference Sequence</label>
                <textarea placeholder="Reference sequence..." />
              </div>
              <div>
                <label style={{marginBottom:6}}>Variant Sequence</label>
                <textarea placeholder="Variant sequence..." />
              </div>
            </div>

            <button className="seq-full-mut">Compare & Find Mutations</button>
            
          </div>
        )}
      </div>
    </div>
  );
}