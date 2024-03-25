import React, { useState } from 'react';
import './Resources.scss';
import { FaRegFilePdf, FaRegFileWord, FaRegFilePowerpoint } from 'react-icons/fa';
import { BsCloudDownload } from 'react-icons/bs';
import file from '../../assets/file.pdf'
import './Resources.scss'

const Resources = () => {
  const [selectedTab, setSelectedTab] = useState('documents');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setSelectedFile(null);
  };

  const handleFileClick = (fileName) => {
    setSelectedFile(fileName);
  };

  return (
    <div className="resources">
      <h1 className="resources-title">Member Resources</h1>
      <div className="resources-tabs">
        <button className={`resources-tab ${selectedTab === 'documents' ? 'active' : ''}`} onClick={() => handleTabClick('documents')}>
          <FaRegFilePdf className="resources-tab-icon" />
          <span className="resources-tab-text">Documents</span>
        </button>
        <button className={`resources-tab ${selectedTab === 'presentations' ? 'active' : ''}`} onClick={() => handleTabClick('presentations')}>
          <FaRegFilePowerpoint className="resources-tab-icon" />
          <span className="resources-tab-text">Presentations</span>
        </button>
      </div>
      <div className="resources-content">
        <div className="resources-files">
          {selectedTab === 'documents' && (
            <>
              <div className="resources-file" onClick={() => handleFileClick('document-1')}>
                <FaRegFilePdf className="resources-file-icon" />
                <div className="resources-file-info">
                  <h3 className="resources-file-name">Document 1</h3>
                  <p className="resources-file-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <BsCloudDownload className="resources-file-download" />
              </div>
              <div className="resources-file" onClick={() => handleFileClick('document-2')}>
                <FaRegFileWord className="resources-file-icon" />
                <div className="resources-file-info">
                  <h3 className="resources-file-name">Document 2</h3>
                  <p className="resources-file-description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <BsCloudDownload className="resources-file-download" />
              </div>
            </>
          )}
          {selectedTab === 'presentations' && (
            <>
              <div className="resources-file" onClick={() => handleFileClick('presentation-1')}>
                <FaRegFilePowerpoint className="resources-file-icon" />
                <div className="resources-file-info">
                  <h3 className="resources-file-name">Presentation 1</h3>
                  <p className="resources-file-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <BsCloudDownload className="resources-file-download" />
              </div>
              <div className="resources-file" onClick={() => handleFileClick('presentation-2')}>
                <FaRegFilePowerpoint className="resources-file-icon" />
                <div className="resources-file-info">
                  <h3 className="resources-file-name">Presentation 2</h3>
                  <p className="resources-file-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
              </div>
              </div>
            </>
          )}
        </div>
        <div className="resources-preview">
          {selectedFile && (
            <>
              {selectedFile === 'document-1' && (
                <embed className="resources-preview-file" src={file} />
              )}
              {selectedFile === 'document-2' && (
                <embed className="resources-preview-file" src={file} />
              )}
              {selectedFile === 'presentation-1' && (
                <iframe className="resources-preview-file" src={file} />
              )}
              {selectedFile === 'presentation-2' && (
                <iframe className="resources-preview-file" src={file} />
              )}
            </>
          )}
          {!selectedFile && (
            <p className="resources-preview-placeholder">Click on a file to preview</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Resources;






