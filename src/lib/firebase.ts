import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

// Use the specified database ID if provided, otherwise default to '(default)'
// Passing undefined or an empty string to getFirestore results in the use of the default database.
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || undefined);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Validation function as per constraints with retry logic
async function testConnection(retries = 3) {
  const dbId = firebaseConfig.firestoreDatabaseId || '(default)';
  console.log('Testing Firestore connection to database:', dbId);
  for (let i = 0; i < retries; i++) {
    try {
      // getDocFromServer forces a network request to verify connectivity
      // Using 'notices' collection which is already public to avoid extra rules
      const docRef = doc(db, 'notices', 'connection-test');
      console.log('Fetching doc from path:', docRef.path);
      await getDocFromServer(docRef);
      console.log('Firestore connection successful.');
      return;
    } catch (error) {
      console.error(`Firestore connection test attempt ${i + 1} failed for database ${dbId}:`, error);
      if (i === retries - 1) {
        if (error instanceof Error) {
          if (error.message.includes('the client is offline') || error.message.includes('Could not reach')) {
            console.error("Please check your Firebase configuration or wait for provisioning to complete accurately.");
          }
        }
      } else {
        // Wait 2 seconds before retrying
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }
}
testConnection();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}
