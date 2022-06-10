const admin = require('firebase-admin');
const crypto = require('crypto');

const {
  project_id,
  client_email,
  private_key,
} = require('../src/config/service-account.json');

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: project_id,
    clientEmail: client_email,
    privateKey: private_key,
  }),
});

admin.firestore().collection('feature-flags').add({
  id: crypto.randomUUID(),
  active: false,
  key: 'encode_output',
});
