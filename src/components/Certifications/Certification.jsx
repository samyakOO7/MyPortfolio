import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import './Certification.scss';
import Azure from '../../images/azure.png';
import Aws from '../../images/aws.png';
import Google from '../../images/google.png';
import DevelopAssociate from '../../Certificates/Azure-Developer-Associate.pdf';
import DataFundamentals from '../../Certificates/MS-Data-Fundamentals.pdf';
import AzureFundamentals from '../../Certificates/Azure-Fundamentals.pdf';
import GoogleCertificate from '../../Certificates/Google-Certificate.pdf'
import AWSPractitioner from '../../Certificates/AWS.pdf'
import MSMTA from '../../Certificates/MS-MTA.pdf'
import WithFadeInTransition from '../FadeInText/WithFadeInTransition';
function Certification() {
  // Define your certifications data
  const certifications = [
    { name: 'Azure Developer Solutions [AZ-204]', image: Azure, certificate:DevelopAssociate},
    { name: 'AWS Cloud Practitioner', image: Aws, certificate: AWSPractitioner },
    { name: 'Google Cloud Digital Leader', image: Google, certificate: GoogleCertificate },
    { name: 'Azure Data Fundamentals [DP-900]', image: Azure, certificate: DataFundamentals },
    { name: 'Azure Fundamentals [AZ-900]', image: Azure, certificate: AzureFundamentals },
    { name: 'MS MTA Certification for JAVA', image: Azure, certificate: MSMTA },
  ];

  // Function to handle certificate download
  const handleDownload = (certificateUrl, certificateName) => {
    fetch(certificateUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', certificateName);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error('Error downloading certificate:', error));
  };

  return (
    <div className="certification-container">
      <h2>Certifications</h2>
     
      <List className="certification-list">
        {certifications.map((certification, index) => (
          <ListItem key={index} className="certification-item">
            <ListItemAvatar>
              <div className="certification-avatar" style={{ backgroundImage: `url(${certification.image})` }} />
            </ListItemAvatar>
            <ListItemText
              primary={certification.name}
              className="certification-name"
            />
            <button
              className="certification-download"
              onClick={() => handleDownload(certification.certificate, `${certification.name}.pdf`)}
            >
              Download Certificate
            </button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default WithFadeInTransition(Certification);
