# Architectural Decision Record (ADR)
## Database Storage

### Context
We have to decide on database storage solutions for the storage of financial data, including expense entries and images of receipts. We considered various options such as SQLite and Realm, but Firestore was chosen due to its combination of NoSQL flexibility, real-time synchronization, offline capabilities, and seamless image storage.

### Decision
We have decided to use Firebase Firestore, a service that is part of the Firebase platform provided by Google, as the database storage solution for our expense-tracking app.

### Rationale
* NoSQL Structure: Firebase Firestore is a NoSQL database that provides flexibility in handling structured financial data, such as expense entries and categories, while also efficiently storing binary image data for receipts.
* Real-Time Synchronization: Firestore offers real-time data synchronization, allowing users to access and update their expense data from multiple devices and ensuring consistency across platforms.
* Offline Capabilities: Firestore's offline data access feature is vital for our expense tracking app, enabling users to record expenses and attach images of receipts even when they are offline. The app will automatically sync the data when an internet connection is available.
* Scalability: Firestore automatically scales to accommodate growing data volumes and user bases. This is important as our app may expand in the future, as well as the continuously growing financial record of users.
* Security: Firebase provides robust authentication and security features, ensuring the privacy and protection of financial and image data.
* Image Storage: Firestore's integration with Firebase Cloud Storage makes it straightforward to store and retrieve images of receipts securely. This aligns perfectly with our requirement to save pictures of receipts.

### Consequences
* Battery Drain: Real-time requesting media file access and synchronization between devices may battery drain issues if the code is not carefully constructed.
* Cost of connectivity: Camera functionality, uploading, and downloading multimedia files can potentially cause an increase in connectivity cost, especially when users need to use the app with cellular data.

### Summary
The decision to use Firebase Firestore as the database storage solution for our expense tracking app was made to efficiently manage financial and image data, provide real-time and offline capabilities, ensure scalability, and enhance security. This choice contributes to a comprehensive and user-friendly app experience.