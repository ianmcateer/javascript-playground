const _ = require('lodash')

const partners = [
  {
    type: 'AWS',
    alt: 'Amazon Web Services',
    link: '',
    src: '/assets/images/amazon-webservices-logo.svg',
    enabled: true,
  },
  {
    type: 'AZURE',
    alt: 'Microsoft Azure',
    link: '',
    src: '/assets/images/microsoft-azure-logo.svg',
    enabled: true,
  },
  {
    type: 'GCE',
    alt: 'Google Cloud Platform',
    link: '',
    src: '/assets/images/google-cloud-logo.svg',
    classes: 'gce-image',
    enabled: true,
  },
  {
    type: 'ALICLOUD',
    alt: 'Alibaba Cloud',
    link: '',
    src: '/assets/images/alibaba-partner-logo.svg',
    // TODO: flag
    enabled: true,
  },
  {
    type: 'TENCENT',
    alt: 'Tencent Cloud',
    link: '',
    src: '/assets/images/tencent-partner-logo.svg',
    enabled: true,
  },
  {
    type: 'IBM Cloud',
    alt: 'IBM Cloud',
    link: '',
    src: '/assets/images/ibm-partner-logo.svg',
    enabled: false,
    showComingSoon: false,
  },
];

const result = partners.filter((partner) => partner.showComingSoon !== true)
const comingSoonParters = _.filter(partners, {showComingSoon: true });
console.log(comingSoonParters)
