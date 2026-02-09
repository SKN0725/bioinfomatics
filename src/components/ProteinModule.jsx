import React, { useState } from "react";
import "./ProteinUI.css";

export default function ProteinUI() {
  const [activeTab, setActiveTab] = useState("visualization");

  return (
    <div className="proteinUI-page">
      <div className="proteinUI-box">
        <h3 className="proteinUI-title">Protein Structure & Property Analysis</h3>
        <p className="proteinUI-subtitle">
          Visualize 3D protein structures and predict biochemical properties
        </p>

        {/* Tabs */}
        <div className="proteinUI-tabs" role="tablist">
          <button
            className={`proteinUI-tab ${activeTab === "visualization" ? "proteinUI-active" : ""}`}
            onClick={() => setActiveTab("visualization")}
            type="button"
          >
            3D Visualization
          </button>
          <button
            className={`proteinUI-tab ${activeTab === "analysis" ? "proteinUI-active" : ""}`}
            onClick={() => setActiveTab("analysis")}
            type="button"
          >
            Properties & Analysis
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "visualization" && (
          <>
          <div className="proteinUI-lab-upld">
            <label className="proteinUI-label" htmlFor="protein-sequence">
              Protein Sequence or PDB
            </label>
            <button className="proteinUI-uploadBtn" type="button">
                Upload PDB
              </button>
              </div>
            <div className="proteinUI-inputRow">
              <textarea
                id="protein-sequence"
                className="proteinUI-sequenceInput"
                placeholder="Enter protein sequence (single letter amino acid codes)..."
              />
              
            </div>

            <div className="proteinUI-viewer">
              <span>Enter protein sequence to visualize</span>
            </div>
            <div className="protein-design-canvas">

            </div>

            <div className="proteinUI-info">
              <b>Interactive 3D Visualization:</b><small> The protein structure is rendered showing amino acids colored by hydrophobicity. Orange = hydrophobic, Blue = hydrophilic, Purple = neutral. The structure auto-rotates for better viewing.</small>
            </div>
          </>
        )}

        {activeTab === "analysis" && (
          <div className="proteinUI-analysis">
            <p>Analyze biochemical properties of the protein sequence.</p>
            <div className="proteinUI-inputRow">
                <label className="proteinUI-label" htmlFor="protein-sequence">
              Protein Sequence or PDB
            </label>
              <textarea
                id="protein-sequence"
                className="proteinUI-sequenceInput"
                placeholder="Enter protein sequence (single letter amino acid codes)..."
              />
              
            </div>
            <button className="proteinUI-analyzeBtn" type="button">
              Analyze Protein Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
}