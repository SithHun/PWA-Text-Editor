import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');

export const putDb = async (content) => {
  try {
    const db = await openDB('jate', 1); // Open the existing database
    const tx = db.transaction('jate', 'readwrite'); // Start a transaction on the object store
    const store = tx.objectStore('jate'); // Access the object store

    // Add the content to the object store
    await store.add(content);

    await tx.complete; // Complete the transaction
    console.log('Content added to the database:', content);
  } catch (error) {
    console.error('Error adding content to the database:', error);
  }
};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
