// App.js

'use client'
import React, { useEffect, useState } from "react";
// import { Client } from 'appwrite';
import { Client, Databases, ID, Query } from "appwrite";

const App = () => {




  const saveData = (date) =>{

    const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('674191ec00273930afb1')

const databases = new Databases(client);

const promise = databases.createDocument(
    '6741a7130016414e72cd',
    '6741a72d000487cb9f22',
    ID.unique(),
    { "title": "Hamlet" ,
      "date" : date,
      "items" : 
       [
          {muscle: "chest", reps: 8 ,sets: 3, workout: "flies"},
          {muscle: "chest", reps: 8 ,sets: 3, workout: "flies"}
        ]
      
    }
);

promise.then(function (response) {
  console.log(response);
}, function (error) {
  console.log(error);
});

  }

  ////////////////////////
  const fetchAllDocuments = async () => {
    try {
      const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('674191ec00273930afb1')
  
  const databases = new Databases(client);
      const response = await databases.listDocuments(
        '6741a7130016414e72cd', // Database ID
        '6741a72d000487cb9f22'  // Collection ID
      );

      console.log('Documents:', response.documents);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const updateDocument = async () => {
    try {
      const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('674191ec00273930afb1')
  
  const databases = new Databases(client);
      const response = await databases.updateDocument(
        '6741a7130016414e72cd', // Database ID
        '6741a72d000487cb9f22', // Collection ID
        'DOCUMENT_ID',          // Replace with the actual document ID
        { title: "Updated Title" } // Data to update
      );

      console.log('Document updated successfully:', response);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const deleteDocument = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this document?');
    if (!confirmDelete) return;
    try {
      const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('674191ec00273930afb1')
  
  const databases = new Databases(client);
      await databases.deleteDocument(
        '6741a7130016414e72cd', // Database ID
        '6741a72d000487cb9f22', // Collection ID
        'DOCUMENT_ID'           // Replace with the actual document ID
      );

      console.log('Document deleted successfully.');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const fetchDocument = async () => {
    const documentId = 'SPECIFIC_DOCUMENT_ID'; // Replace with the ID of the document you want to fetch

    try {
      const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('674191ec00273930afb1')
  
  const databases = new Databases(client);
      const response = await databases.getDocument(
        '6741a7130016414e72cd', // Database ID
        '6741a72d000487cb9f22', // Collection ID
        documentId              // Document ID
      );

      console.log('Document fetched successfully:', response);
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };

  const fetchDocumentsWithQuery = async () => {
    try {
      const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('674191ec00273930afb1')
  
  const databases = new Databases(client);
      // Example: Fetch documents where the 'title' field is 'Hamlet'
      const response = await databases.listDocuments(
        '6741a7130016414e72cd', // Database ID
        '6741a72d000487cb9f22', // Collection ID
        [
          Query.equal('title', 'Hamlet'), // Query to filter documents by title
        ]
      );

      // setDocuments(response.documents);
      console.log('Fetched documents:', response.documents);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  useEffect(() => {
    fetchAllDocuments();
    console.log(fetchAllDocuments())
  }, []);



// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('674191ec00273930afb1')

// const databases = new Databases(client);

// const promise = databases.createDocument(
//     '6741a7130016414e72cd',
//     '6741a72d000487cb9f22',
//     ID.unique(),
//     { "title": "Hamlet" }
// );

// promise.then(function (response) {
//   console.log(response);
// }, function (error) {
//   console.log(error);
// });

// ///////////////////////////////////////////////

  const [showPopup, setShowPopup] = useState(false);
  const [date, setDate] = useState("");
  const [items, setItems] = useState([]);
  const [workoutCards, setWorkoutCards] = useState([]);

  const handleAddItem = () => {
    setItems([
      ...items,
      { muscle: "", workout: "", sets: "", reps: "" },
    ]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const handleSave = () => {
    // if (!date) {
    //   alert("Please select a date!");
    //   return;
    // }

    const validItems = items.filter(
      (item) => item.muscle && item.workout && item.sets && item.reps
    );

    // if (validItems.length === 0) {
    //   alert("Please add at least one item!");
    //   return;
    // }
    console.log(validItems)
    saveData(date)

    setWorkoutCards([
      ...workoutCards,
      { date, items: validItems },
    ]);
  console.log(workoutCards)
    // Reset popup
    setDate("");
    setItems([]);
    setShowPopup(false);
  };
 
  return (
    <div className="container">
      <h1>Gym Workout Analysis</h1>
      <button className="btn" onClick={() => setShowPopup(true)}>
        Add Workout
      </button>
      <div className="cards-container">
        {workoutCards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.date}</h3>
            <ul>
              {card.items.map((item, i) => (
                <li key={i}>
                  {item.muscle} - {item.workout} ({item.sets} sets x {item.reps} reps)
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <h2>Add Workout</h2>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <div id="itemsContainer">
              {items.map((item, index) => (
                <div key={index} className="item-group">
                  <label>
                    Muscle Type:
                    <input
                      type="text"
                      value={item.muscle}
                      onChange={(e) =>
                        handleItemChange(index, "muscle", e.target.value)
                      }
                      required
                    />
                  </label>
                  <label>
                    Workout:
                    <input
                      type="text"
                      value={item.workout}
                      onChange={(e) =>
                        handleItemChange(index, "workout", e.target.value)
                      }
                      required
                    />
                  </label>
                  <label>
                    Sets:
                    <input
                      type="number"
                      value={item.sets}
                      onChange={(e) =>
                        handleItemChange(index, "sets", e.target.value)
                      }
                      required
                    />
                  </label>
                  <label>
                    Reps:
                    <input
                      type="number"
                      value={item.reps}
                      onChange={(e) =>
                        handleItemChange(index, "reps", e.target.value)
                      }
                      required
                    />
                  </label>
                </div>
              ))}
            </div>
            <button className="btn" onClick={handleAddItem}>
              Add Item
            </button>
            <button className="btn save-btn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
