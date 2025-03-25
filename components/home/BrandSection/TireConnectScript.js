// TireConnectScript.js
// This file should be imported once at the top level of your application

// This function initializes the TireConnect widget
function initTireConnect() {
  // Monkeypatch console to prevent sensitive data leakage
  const originalConsoleLog = console.log;
  const originalConsoleInfo = console.info;
  const originalConsoleDebug = console.debug;

  // Override console methods to filter out API key
  console.log = function () {
    const filtered = filterSensitiveArgs(arguments);
    originalConsoleLog.apply(console, filtered);
  };

  console.info = function () {
    const filtered = filterSensitiveArgs(arguments);
    originalConsoleInfo.apply(console, filtered);
  };

  console.debug = function () {
    const filtered = filterSensitiveArgs(arguments);
    originalConsoleDebug.apply(console, filtered);
  };

  // Clear localStorage items first
  clearTireConnectStorage();

  // If TireConnect is already loaded, just return
  if (
    document.querySelector(
      'script[src="https://app.tireconnect.ca/js/widget.js"]'
    )
  ) {
    return;
  }

  // Create and add the script
  const script = document.createElement("script");
  script.src = "https://app.tireconnect.ca/js/widget.js";
  script.async = true;
  script.onload = function () {
    // Initialize widget after script loads
    setTimeout(() => {
      if (window.TCWidget && document.getElementById("tireconnect")) {
        window.TCWidget.initForm({
          apikey: "6637aba88ecf90ed53e09ddae683bc65",
          container: "tireconnect",
          locationDetect: "manual",
          redirectUrl: "https://tirestoretx.com/shop-tires/",
        });
      }
    }, 500);
  };

  document.body.appendChild(script);
}

// Function to filter out sensitive data from console logs
function filterSensitiveArgs(args) {
  const apiKeyPattern = /6637aba88ecf90ed53e09ddae683bc65/g;
  const newArgs = Array.from(args).map((arg) => {
    if (typeof arg === "string") {
      return arg.replace(apiKeyPattern, "[API_KEY_REDACTED]");
    } else if (typeof arg === "object" && arg !== null) {
      try {
        const str = JSON.stringify(arg);
        if (str.match(apiKeyPattern)) {
          const redacted = str.replace(apiKeyPattern, "[API_KEY_REDACTED]");
          return JSON.parse(redacted);
        }
      } catch (e) {
        // Ignore stringify errors
      }
    }
    return arg;
  });
  return newArgs;
}

// Simple function to clear TireConnect storage
function clearTireConnectStorage() {
  if (window.localStorage) {
    try {
      // Remove any TireConnect-related localStorage items
      Object.keys(localStorage)
        .filter((key) => key.startsWith("tc_") || key.includes("tireconnect"))
        .forEach((key) => localStorage.removeItem(key));
    } catch (e) {
      // Ignore errors
    }
  }

  if (window.sessionStorage) {
    try {
      // Remove any TireConnect-related sessionStorage items
      Object.keys(sessionStorage)
        .filter((key) => key.startsWith("tc_") || key.includes("tireconnect"))
        .forEach((key) => sessionStorage.removeItem(key));
    } catch (e) {
      // Ignore errors
    }
  }
}

// Export the initialization function
export default initTireConnect;
