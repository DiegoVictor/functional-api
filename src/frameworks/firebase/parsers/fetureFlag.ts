import admin from 'firebase-admin';

export const parseFeatureFlag = (
  doc: admin.firestore.QueryDocumentSnapshot<admin.firestore.DocumentData>
) => {
  const { id, key, active } = doc.data();
  return {
    id,
    key,
    active,
  };
};
