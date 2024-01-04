const translateFile = {
  authentication: {
    field: "Authentication",
  },
  // backup: {
  //   backUpDialog: {
  //     backUpTenant: "Backup Tenant",
  //     runBackUp: "Run backup now",
  //     tenantToBackUp: "Tenant to backup",
  //   },
  //   backupHeader: "Delete Backup",
  //   backupInfo:
  //     "This operation cannot be undone. Are you sure you want to delete the backup?",
  //   discardChanges: "Delete Backup",
  //   name: "Backup Name",
  //   noData: "No backup to display.",
  //   restoreDialog: {
  //     restoreButtonLable: "Restore backup",
  //     restoreContent:
  //       "Restoring data will delete all existing data in the tenant. Are you sure you to proceed?",
  //     restoreHeader: "Restore Backup",
  //   },
  //   runBackup: "Run a backup now",
  //   tenantName: "Tenant Name",
  //   timeStamp: "Backup TimeStamp",
  //   upload: "Upload",
  // },
  // button: {
  //   close: "Close",
  //   discard: "Cancel",
  // },
  // common: {
  //   deleteTenants: "Delete Tenants",
  //   required: "Required",
  // },
  // createTenant: {
  //   add: "Create Tenant",
  //   authentication: {
  //     authServerConfig: "Authentication Server Configuration",
  //     authentication: "Authentication",
  //     msg: "A set of standard roles and users will be created automatically.",
  //     msg2: "Roles, users and their credentials can be customized after tenant creation.",
  //     tooltip: "Advanced option will be available after creation of the tenant",
  //     permissionWarning:
  //       "You do not have permission to access authentication info.",
  //   },
  //   basics: {
  //     appParams: "Configured application parameters",
  //     domain: ".panopticon.altair.com",
  //     newTenantName: "new-tenant-name-1",
  //     protocol: "https://",
  //   },
  //   connecting: "Connecting",
  //   newTenant: "Create new tenant",
  //   resources: {
  //     cpu: {
  //       limit: "CPU Limit",
  //       request: "CPU Request",
  //     },
  //     custom: "Custom [ CPUs min-max 0.7-2, Memory min-max 2.4 GB-4.9 GB ]",
  //     maxHeap: "JVM Heap Max(-Xmx)",
  //     memory: {
  //       limit: "Memory Limit",
  //       request: "Memory Request",
  //     },
  //     minHeap: "JVM Heap Min(-Xms)",
  //     monetdb: "MonetDB",
  //     noAppVersionError:
  //       "Application Version is not selected. Select Application Version in Basics Tab.",
  //     notResponding: "Not Responding",
  //     not_ready: "Not Ready",
  //     panoviz: "Panopticon Visualization",
  //     python: "Python",
  //     "python-container": "Python",
  //     rserve: "Rserve",
  //     running: "Running",
  //     sizeError: "Could not fetch Sizing details from server.",
  //     sizing: "Sizing",
  //     xSmallOption:
  //       "x-small [ CPUs min-max 0.7-2, Memory min-max 2.4 GB-4.9 GB ]",
  //     permissionWarning: "You do not have permission to access resources info.",
  //   },
  //   tenantCreated:
  //     "Tenant created, POD started. Might take a few minutes for containers to be ready.",
  //   toolTip: {
  //     cpulimit: "Valid CPU format: number or number m (Example: 100, 100m)",
  //     cpurequest: "Valid CPU format: number or number m (Example: 100, 100m)",
  //     maxHeap:
  //       "Valid maxHeap format: optional -Xmx, followed by number and optional M/m (Example: -Xmx1900m, 1900m)",
  //     memorylimit:
  //       "Valid memory format: number, number Mi, or number Gi (Example: 1024, 1024 Mi, 1024 Gi)",
  //     memoryrequest:
  //       "Valid memory format: number, number Mi, or number Gi (Example: 1024, 1024 Mi, 1024 Gi)",
  //     minHeap:
  //       "Valid minHeap format: optional -Xms, followed by number and optional M/m (Example: -Xms900m, 900m)",
  //   },
  //   writeConfig: "Writing Configuration",
  // },
  // errors: {
  //   authParamsError: "Error fetching Authentication Parameters",
  //   authTypeError: "Error fetching Authentication list",
  //   cpuFieldsError: "Proper values not provided for cpu fields",
  //   cpuLimitError:
  //     "The request value is higher than specified limit for cpu field. Please ensure that the request value is lower than the limit value.",
  //   cpuLowerBoundError:
  //     "CPU request and limit values must be greater than zero.",
  //   error: "Error",
  //   errorDownloadFile: "File download failed. Please try again later.",
  //   intervalParseError:
  //     "The provided interval value in the configuration file is invalid. As a fallback, we'll be using a default interval of 30 seconds.",
  //   jvmHeapError: "Proper values not provided for JVM Heap fields",
  //   jvmLimitError:
  //     "The heap min value is higher than specified heap max for jvm field.Please ensure that the heap min value is lower than the heap max value.",
  //   jvmLowerBoundError:
  //     "The JVM Heap Minimum and Maximum values must be greater than zero.",
  //   memoryFieldsError: "Proper values not provided for memory fields",
  //   memoryLimitError:
  //     "The request value is higher than specified limit for memory field. Please ensure that the request value is lower than the limit value.",
  //   memoryLowerBoundError:
  //     "Memory request and limit values must be greater than zero.",
  //   parseError: "Input parsing error occurred.",
  //   required: "This field is required.",
  //   requiredError: "Please fill in all required fields.",
  // },
  // extensions: {
  //   discardChanges: "Delete Jar Extension",
  //   extensionHeader: "Delete Extensios",
  //   extensionInfo:
  //     "This operation cannot be undone. Are you sure you want to delete the extension?",
  //   name: "Extension Name",
  //   noData: "No extensions to display.",
  //   timeStamp: "Extension TimeStamp",
  // },
  // fileUpload: {
  //   drag: "or drag and drop file here",
  //   fileUploadInProgress: "File upload in progress...",
  //   upload: "Upload from my computer",
  // },
  // headerTabs: {
  //   backups: "Backups",
  //   logout: "Log Out",
  //   tenants: "Tenants",
  // },
  // link: "Link",
  // login: {
  //   password: "Password",
  //   signIn: "Sign In",
  //   title: "Altair Panopticon Cloud Administration",
  //   userName: "Name or email",
  // },
  // resources: {
  //   status: {
  //     notResponding: "Not Responding",
  //     not_ready: "Not Ready",
  //     running: "Running",
  //   },
  // },
  // serverError: "Error fetching data from server",
  // suffixError: "Error fetching suffix data from server.",
  // tenantTable: {
  //   backUptenant: "Backup tenants before deletion",
  //   cancelMsg1: "Do you want to cancel the new tenant action?",
  //   cancelMsgHeader: "Cancel new tenant creation",
  //   continueCreatingTenant: "Continue creating tenant",
  //   cpu: "CPUs",
  //   createNewTenant: "Create new tenant",
  //   delete: "Delete",
  //   deleteMsg1: "This operation cannot be undone.",
  //   deleteMsg2:
  //     "Deleting tenants will cause connected users to be disconnected and/or lose data that is not also saved elsewhere.",
  //   deleteMsgHeader: "Delete Selected Tenants",
  //   deleteTenants: "Delete Selected tenants",
  //   done: "Done",
  //   lastBackup: "Last Backup",
  //   lastUpdated: "Last Updated",
  //   memory: "Memory",
  //   name: "Tenant Name",
  //   noTenants: "No tenants to display.",
  //   reqLimit: "req-limit",
  //   status: "Status",
  //   url: "Tenant Url",
  //   version: "Application Version",
  // },
  // updateTenant: {
  //   apply: "Apply",
  //   applyBtnInfo:
  //     "For the changes to take effect, the tenant POD has to be restarted. Restarting the tenant POD might cause connected users to be disconnected and/or lose unsaved data.",
  //   applyBtnMessageHeader: "Apply Changes",
  //   applyChanges: "Apply changes and restart tenant POD",
  //   back: "Back",
  //   backBtnInfo:
  //     "You made changes that have not been applied. Unapplied changes will be lost going back to the tenants list. ",
  //   backBtnMessageHeader: "There Are Non Applied Changes",
  //   backup: {
  //     backupName: "Backup Name",
  //   },
  //   cancel: "Cancel",
  //   diagnostics: {
  //     loading: "Loading",
  //     noResources: "No Resources found for the selected tenant",
  //     resource: "Resource Name",
  //     service: "Service",
  //     status: "Status",
  //   },
  //   diagonostics: {
  //     service: "Service",
  //   },
  //   discardChanges: "Discard changes",
  //   extensions: {
  //     extensionName: "Extension Name",
  //   },
  //   restartPod: "Restart",
  // },
};

module.exports = translateFile;
