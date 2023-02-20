import { useState, useEffect } from "react";

const PERSISTENT_STATE_PREFIX = "PERSISTENT_STATE_";

const usePersistentState = (key: any, { initialValue, isSession }: any) => {
  const fullKey = PERSISTENT_STATE_PREFIX + key;

  // select storage type
  let persistentStorage: any = null;
  if (typeof window !== "undefined") {
    if (isSession) {
      persistentStorage = sessionStorage;
    } else {
      persistentStorage = localStorage;
    }
  }

  // select persistent value, if exists
  const persistentValue = JSON.parse(
    persistentStorage?.getItem(fullKey) || "{}"
  );

  // initialize state
  const [state, setState] = useState(persistentValue.data || initialValue);

  useEffect(() => {
    persistentStorage?.setItem(fullKey, JSON.stringify({ data: state }));
  }, [fullKey, persistentStorage, state]);

  return [state, setState];
};

export default usePersistentState;

// TODO: delete the older value on changing the storage type (session or local)
// TODO: remove the unused keys
