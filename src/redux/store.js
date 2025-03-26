import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"; // Uses localStorage for persistence

import modalSlicer from "./slicers/modalSlicer";
import visitedProfileSlicer from "./slicers/visitedProfileSlicer";
import tweetSlicer from "./slicers/tweetSlicer";
import currentProfileSlicer from "./slicers/currentProfileSlicer";

// Combine all your reducers
const rootReducer = combineReducers({
  visitedProfile: visitedProfileSlicer,
  currentProfile: currentProfileSlicer,
  modal: modalSlicer,
  tweet: tweetSlicer,
});

// Redux Persist configuration
const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["currentProfile"], // Only persist the authentication state (adjust if needed)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and export the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoid issues with non-serializable data
    }),
});

export const persistor = persistStore(store);
export default store;