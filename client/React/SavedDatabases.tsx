/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';

import { Uris } from './types';

function SavedDatabases({
  savedUris, GetUsersUris, setSelectedDatabase, username,
}) {
  
  // Call GetUsersUris whenever the username changes
  React.useEffect(() => {
    GetUsersUris();
  }, []);

  return (
    <div id="saved-db-container">
      <select name="savedDatabases" id="savedDatabases" onChange={(e) => setSelectedDatabase(e.target.value)}>
        {/* for each saved uri make a option inside the select field */}
        <option selected disabled>Saved Databases</option>
        {Array.isArray(savedUris) && savedUris.map((uri: Uris) => (
          <option value={uri.uri_name}>{uri.uri_name}</option>
        ))}
      </select>
    </div>
  );
}

export default SavedDatabases;
